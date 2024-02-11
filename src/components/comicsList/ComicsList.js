import './comicsList.scss';
import uw from '../../resources/img/UW.png';
import xMen from '../../resources/img/x-men.png';
import useMarvelService from '../../services/MarvelService';
import { useEffect, useState } from 'react';





const ComicsList = () => {

    const {error,loading,getComics}=useMarvelService()

    const [comicsList, setComicsList] = useState([])
    const [offset, setOffset] = useState(210);
    const [charEnded, setCharEnded] = useState(false);

    useEffect(()=> {
        onRequest()
        
    },[])

    const onRequest = () => {
        getComics()
        .then(onComicsLoaded)
        
    }

    const onComicsLoaded = (newComicsList) => {
        setComicsList(comicsList => [...comicsList, ...newComicsList])
        setOffset(offset => offset+8)
        
    }

    function renderItems (arr) {
        const items = arr.map((item,i)=> {
            
            return (
                <li 
                className="comics__item"
                key={item.id}
                >
                    <a href="#">
                        <img src={item.thumbnail} alt="x-men" className="comics__item-img"/>
                        <div className="comics__item-name">{item.name}</div>
                        <div className="comics__item-price">NOT AVAILABLE</div>
                    </a>
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
    
    return (
        <div className="comics__list">
            {items}
        </div>
    )
}

export default ComicsList;