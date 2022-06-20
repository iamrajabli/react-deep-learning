import React from 'react';
import './charList.scss';
import MarvelService from '../../services/MarvelService';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';


export default class CharList extends React.Component {
    state = {
        charList: [],
        loading: true,
        error: false
    }

    marvelService = new MarvelService();

    componentDidMount() {
        this.marvelService.getAllCharacters()
            .then(data => this.onCharListLoaded(data))
            .catch(this.onErrorLoaded);
    }
    onErrorLoaded = () => {
        this.setState(({
            loading: false,
            error: true
        }))
    }

    onCharListLoaded = (charList) => {
        this.setState(({
            charList,
            loading: false, 
            error: false
        }));
    }

    onRender = (charList) => {
        return charList.map(char => {
            return (
                <li 
                className="char__item" 
                key={char.id}
                onClick={() => this.props.onCharSelected(char.id)}>
                    <img src={char.thumbnail} alt="abyss" />
                    <div className="char__name">{char.name}</div>
                </li>
            )
        })

    }

    render() {
        const { charList, loading, error } = this.state;
        const errorContent = error ? <ErrorMessage /> : null;
        const loadingContent = loading ? <Spinner /> : null;
        const content = !(loading || error) ? this.onRender(charList) : null;

        return (
            <div className="char__list">
                <ul className="char__grid">
                    {content}
                    {errorContent}
                    {loadingContent}
                </ul>
                <button className="button button__main button__long">
                    <div className="inner">load more</div>
                </button>
            </div>
        )
    }
};