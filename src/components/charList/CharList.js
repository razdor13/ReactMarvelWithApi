import {Component} from 'react';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMassage/ErrorMassage';
import MarvelService from '../../services/MarvelService';
import './charList.scss';

class CharList extends Component {
    state = {
        charList: [],
        loading: true,
        error: false,
        newItemLoading : false,
        offset : 1550,
        charEnded : false
    }
    
    marvelService = new MarvelService();

    componentDidMount() {
        this.onRequest()
    }


    onRequest = (offset) =>{
        this.onCharlistLoading();
        this.marvelService.getAllCharacters(offset)
            .then(this.onCharListLoaded)
            .catch(this.onError)
    }

    onCharlistLoading = () => {
        this.setState({
            newItemLoading: true
        })
    }
    
    onCharListLoaded = (newCharList) => {
        let ended = false;
        if (newCharList.length < 9) {
            ended = true;
        }
        this.setState(({offset,charList}) => ({
            charList: [...charList,...newCharList],
            loading: false,
            newItemLoading: false,
            offset: offset+9,
            charEnded : ended
        }))
        debugger
    }

    onError = () => {
        this.setState({
            error: true,
            loading: false
        })
    }

    // this method create for optimization
    // to not put this contruction in render
    renderItems(arr) {
        const items =  arr.map((item) => {
            const isWithoutImg = item.thumbnail.includes("image_not_available")
            const letChangeObjectFit = isWithoutImg? {objectFit: 'fill'} : null
            
            return (
                <li 
                    className="char__item"
                    key={item.id}
                    onClick={() => this.props.onCharSelected(item.id)}
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

    render() {

        const {charList, loading, error,offset,newItemLoading,charEnded} = this.state;
        const items = this.renderItems(charList);

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
                onClick={()=> this.onRequest(offset)}
                >
                    <div className="inner">load more</div>
                </button>
            </div>
        )
    }
}

export default CharList;