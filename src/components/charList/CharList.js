import {useEffect,useState,useRef} from 'react';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMassage/ErrorMassage';
import MarvelService from '../../services/MarvelService';
import './charList.scss';

const CharList = (props) => {

    const [charList, setCharList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [newItemLoading, setNewItemLoading] = useState(false);
    const [offset, setOffset] = useState(210);
    const [charEnded, setCharEnded] = useState(false);
    
    const marvelService = new MarvelService();

    useEffect(() => {
        onRequest()
    },[])//useEffect з пустим масивом виконається (ініціалізується лише один раз)(заміна componentDidMount)
        // також не дивлячись на те що ми запускаємо цю функцію  onRequest() перед ініцаілізацію
        //вона стрілочна, суть в тому що useEffect всеодно запуститься після рендеру .


    const onRequest = (offset) =>{
            onCharlistLoading();
            marvelService.getAllCharacters(offset)
            .then(onCharListLoaded)
            .catch(onError)
    }

    const onCharlistLoading = () => {
        setNewItemLoading(true)
    }
    
    const onCharListLoaded = (newCharList) => {
        let ended = false;
        if (newCharList.length < 9) {
            ended = true;
        }
        setCharList(charList => [...charList,...newCharList])
        setLoading(loading => false)
        setNewItemLoading(newItemLoading => false)
        setOffset(offset => offset+9)
        setCharEnded(charEnded => ended)

    }

    const onError = () => {
        setError(true)
        setLoading(loading => false)
    }

    const itemRefs = useRef([]);
    
    const focusOnItem = (id) => {
        // Я реалізував варіант трохи складніший, з класом і фокусом.
        // Однак теоретично можна залишити лише фокус, і використовувати його в стилях замість класу.
        // Насправді, рішення з CSS-класом можна зробити, витягнувши персонажа
        // у окремий компонент. Але код буде більший, з'явиться новий стан
        // і не факт, що ми виграємо в оптимізації за рахунок більшої кількості елементів.
        // У разі можливості, не зловживайте рефами, використовуйте їх тільки у крайніх випадках.
        itemRefs.current.forEach(item => item.classList.remove('char__item_selected'));
        itemRefs.current[id].classList.add('char__item_selected');
        // itemRefs.current[id].focus();
    }

    // this method create for optimization
    // to not put this contruction in render
    function renderItems(arr) {
        const items =  arr.map((item,i) => {
            const isWithoutImg = item.thumbnail.includes("image_not_available")
            const letChangeObjectFit = isWithoutImg? {objectFit: 'fill'} : null
            
            return (
                <li 
                    ref={el=>itemRefs.current[i] = el}
                    className="char__item"
                    key={item.id}
                    onClick={() => {
                        props.onCharSelected(item.id);
                        focusOnItem(i);
                    }}
                    tabIndex={0}
                    onKeyPress={(e) => {
                        e.preventDefault()
                        if (e.key === ' ' || e.key === "Enter") {
                            props.onCharSelected(item.id);
                            focusOnItem(i);
                        }
                    }}
                    >
                        <img src={item.thumbnail} alt={item.name} style={letChangeObjectFit}/>
                        <div className="char__name">{item.name}</div>
                </li>
            )
        });
        // А эта конструкция вынесена для центровки спиннера/ошибки
        return (
            <ul className="char__grid">
                {items}
            </ul>
        )
    }

    

        const items = renderItems(charList);

        const errorMessage = error ? <ErrorMessage/> : null;
        const spinner = loading ? <Spinner/> : null;
        const content = !(loading || error) ? items : null;

        return (
            <div className="char__list">
                {errorMessage}
                {spinner}
                {content}
                <button
                className="button button__main button__long"
                disabled={newItemLoading}
                style={{display : charEnded? 'none' : 'block'}}
                onClick={()=> onRequest(offset)}
                
                >
                    <div className="inner">load more</div>
                </button>
            </div>
        )
    
}

export default CharList;