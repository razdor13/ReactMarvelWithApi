import { Component } from 'react';
import './charList.scss';
import abyss from '../../resources/img/abyss.jpg';
import MarvelService from '../../services/MarvelService';


class CharList extends Component {
    id = 0
    state = {
        loading : true
    }

    marvelService = new MarvelService()

    componentDidMount() {
        this.onLoadCharacter()
    }

    onLoadCharInState = (res) => {
        this.setState({
            res, 
            loading : false
        })
    }
    
    onLoadCharacter = () => {
        this.marvelService
        .getAllCharacters()
        .then(this.onLoadCharInState)
        .catch(res => console.log(res))
    }
    
    
    
    
    
    render() {
        const {loading,res} = this.state
        const content = loading? null : <Elements char={res}/>
        return (
            <div className="char__list">
                <ul className="char__grid">
                    {content}
                </ul>
                <button className="button button__main button__long">
                    <div className="inner">load more</div>
                </button>
            </div>
        )
    }
}

const Elements = ({char}) => {
    
    let id = 0
    return (
        char.map(item => {
        const isWithoutImg = item.thumbnail.includes("image_not_available")
        const letChangeObjectFit = isWithoutImg? {objectFit: 'fill'} : null
        id ++
        return(
            <li key={id} className="char__item">
                <img style={letChangeObjectFit} src={item.thumbnail} alt="abyss"/>
                <div className="char__name">{item.name}</div>
            </li> 
        )          
    }))
    
    
}

export default CharList;