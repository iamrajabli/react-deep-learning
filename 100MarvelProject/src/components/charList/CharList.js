import { useState, useEffect } from 'react';
import './charList.scss';
import MarvelService from '../../services/MarvelService';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';


const CharList = (props) => {

    const [charList, setCharList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [offset, setOffset] = useState(210);

    const marvelServices = new MarvelService();

    useEffect(() => {
        onRequest();
    }, [])



    const onRequest = (offset) => {
        marvelServices.getAllCharacters(offset)
            .then(onCharListLoaded)
            .catch(onErrorLoaded);
    }

    const onErrorLoaded = () => {
        setError(true);
        setLoading(false);
    }

    const onCharListLoaded = (newCharList) => {
        setCharList([...charList, ...newCharList]);
        setLoading(false);
        setError(false);
        setOffset(offset => offset + 9)
    }


    const onRender = (charList) => {
        return charList.map(char => {
            return (
                <li
                    className="char__item"
                    key={char.id}
                    onClick={() => props.onCharSelected(char.id)}>
                    <img src={char.thumbnail} alt="abyss" />
                    <div className="char__name">{char.name}</div>
                </li>
            )
        })

    }

    const errorContent = error ? <ErrorMessage /> : null;
    const loadingContent = loading ? <Spinner /> : null;
    const content = !(loading || error) ? onRender(charList) : null;

    return (
        <div className="char__list">
            <ul className="char__grid">
                {content}
                {errorContent}
                {loadingContent}
            </ul>
            <button
                className="button button__main button__long"
                onClick={() => { onRequest(offset) }}>
                <div className="inner">load more</div>
            </button>
        </div>
    )
};

export default CharList