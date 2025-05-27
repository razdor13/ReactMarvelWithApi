import './comicsList.scss';
import { Link } from 'react-router-dom';
import useMarvelService from '../../services/MarvelService';
import { useEffect, useState } from 'react';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMassage/ErrorMassage';




const ComicsList = () => {
    const {error,loading,getComics}=useMarvelService()
    const [comicsList, setComicsList] = useState([])
    const [newItemLoading, setnewItemLoading] = useState(false);
    const [offset, setOffset] = useState(0);
    const [comicsEnded, setComicsEnded] = useState(false);


    useEffect(()=> {
        onRequest(offset,true)
        
    },[])

    const onRequest = (offset,initial) => {
        initial ? setnewItemLoading(false) : setnewItemLoading(true);
        getComics(offset)
        .then(onComicsLoaded)
        
    }

    const onComicsLoaded = (newComicsList) => {
        let ended = false;
        if (newComicsList.length < 8) {
            ended = true;
        }
        setComicsList(comicsList => [...comicsList, ...newComicsList])
        setnewItemLoading(newItemLoading => false);
        setOffset(offset => offset+8)
        setComicsEnded(charEnded => ended);
        
    }

    function renderItems (arr) {
        const items = arr.map((item,i)=> {
            console.log(item.id)
            return (
                <li 
                className="comics__item"
                key={item.id}
                >
                    <Link to={`/comics/${item.id}`}>
                        <img src={item.thumbnail} alt="x-men" className="comics__item-img"/>
                        <div className="comics__item-name">{item.name}</div>
                        <div className="comics__item-price">NOT AVAILABLE</div>
                    </Link>
                </li>
            )



        })
        return (
            <ul className="comics__grid">
                {items}
            </ul>
        )
    }


    const items = renderItems(comicsList)
    const errorMessage = error ? <ErrorMessage/> : null;
    const spinner = loading && !newItemLoading ? <Spinner/> : null;

    return (
        <div className="comics__list">
            {errorMessage}
            {spinner}
            {items}
            <button 
                disabled={newItemLoading} 
                style={{'display' : comicsEnded ? 'none' : 'block'}}
                className="button button__main button__long"
                onClick={() => onRequest(offset)}>
                <div className="inner">load more</div>
            </button>
        </div>
    )
}

export default ComicsList;