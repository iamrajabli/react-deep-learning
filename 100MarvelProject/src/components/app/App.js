import React from "react";
import AppHeader from "../appHeader/AppHeader";
import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";

export default class App extends React.Component {
    state = {
        selectedChar: null
    }
    onCharSelected = (id) => {
        this.setState(({selectedChar: id}))
    }


    render() {
        return (
            <div className="app">
                <AppHeader />
                <main>
                    <RandomChar />
                    <div className="char__content">
                        <CharList onCharSelected={this.onCharSelected} />
                        <CharInfo onCharSelected={this.state.selectedChar} />
                    </div>
                </main>
            </div>
        )
    }
};