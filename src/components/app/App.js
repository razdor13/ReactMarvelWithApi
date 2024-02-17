import { useState } from 'react';
import { BrowserRouter as Router,Route , Switch } from 'react-router-dom';
import AppHeader from "../appHeader/AppHeader";
import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";
import ErrorBoundary from '../errorBoundary/ErrorBoundary';
import ComicsList from '../comicsList/ComicsList';
import decoration from '../../resources/img/vision.png';
import AppBanner from '../appBanner/AppBanner';

const App = () => {
    const [selectedChar,setChar] = useState(null)
    const onCharSelected = (id) => {
        setChar(id)
    }
    return (
        <Router>
            <Switch>
                <div className="app">
                    <AppHeader/>
                    <Route exact path = '/'>
                        <main>
                            <RandomChar/>
                            <div className="char__content">
                                <CharList onCharSelected={onCharSelected}/>
                                <ErrorBoundary><CharInfo charId={selectedChar}/></ErrorBoundary>
                            </div>
                            <img className="bg-decoration" src={decoration} alt="vision"/>
                        </main>
                    </Route>
                    <Route exact path = '/comics'>
                        <AppBanner/>
                        <ComicsList/>
                    </Route>
                </div>
            </Switch>
        </Router>
    )
}

export default App;