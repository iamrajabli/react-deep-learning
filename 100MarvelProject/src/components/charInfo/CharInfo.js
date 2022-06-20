import React from 'react';
import MarvelService from '../../services/MarvelService';
import './charInfo.scss';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';
import Skeleton from '../skeleton/Skeleton';

export default class CharInfo extends React.Component {

    state = {
        char: null,
        loading: false,
        error: false
    }

    componentDidMount() {
        this.updateChar();
    }

    MarvelService = new MarvelService();

    componentDidUpdate(prevProps) {

        if(this.props.onCharSelected !== prevProps.onCharSelected) {
            this.updateChar();
        }
    }

    onCharLoaded = (char) => {
        this.setState(({
            char,
            loading: false,
            error: false
        }))
    }

    onCharLoading = () => {
        this.setState({
            loading: true
        })
    }

    onErrorLoaded = () => {
        this.setState({
            error: true,
            loading: false
        })
    }

    updateChar = () => {
        const { onCharSelected } = this.props;
        if (!onCharSelected) {
            return;
        }
        this.onCharLoading();
        this.MarvelService.getCharacter(onCharSelected)
            .then(this.onCharLoaded)
            .catch(this.onErrorLoaded)
    }


    render() {
        const { char, loading, error } = this.state;

        const skeleton = char || loading || error ? null : <Skeleton />
        const errorContent = error ? <ErrorMessage /> : null;
        const loadingContent = loading ? <Spinner /> : null;
        const content = !(loading || error || !char) ? <View char={char}/> : null;

        return (
            <div className="char__info">
                {skeleton}
                {errorContent}
                {loadingContent}
                {content}
            </div>
        )
    }
};

const View = ({ char }) => {
    const { name, description, thumbnail, homepage, wiki } = char;

    return (
        <>
            <div className="char__basics">
                <img src={thumbnail} alt="abyss" />
                <div>
                    <div className="char__info-name">{name}</div>
                    <div className="char__btns">
                        <a href={homepage} className="button button__main">
                            <div className="inner">homepage</div>
                        </a>
                        <a href={wiki} className="button button__secondary">
                            <div className="inner">Wiki</div>
                        </a>
                    </div>
                </div>
            </div>
            <div className="char__descr">
                {description}
            </div>
            <div className="char__comics">Comics:</div>
            <ul className="char__comics-list">
                <li className="char__comics-item">
                    All-Winners Squad: Band of Heroes (2011) facebook.com3
                </li>
                <li className="char__comics-item">
                    Alpha Flight (1983) facebook.com50
                </li>
                <li className="char__comics-item">
                    Amazing Spider-Man (1999) facebook.com503
                </li>
                <li className="char__comics-item">
                    Amazing Spider-Man (1999) facebook.com504
                </li>
                <li className="char__comics-item">
                    AMAZING SPIDER-MAN VOL. 7: BOOK OF EZEKIEL TPB (Trade Paperback)
                </li>
                <li className="char__comics-item">
                    Amazing-Spider-Man: Worldwide Vol. 8 (Trade Paperback)
                </li>
                <li className="char__comics-item">
                    Asgardians Of The Galaxy Vol. 2: War Of The Realms (Trade Paperback)
                </li>
                <li className="char__comics-item">
                    Vengeance (2011) facebook.com4
                </li>
                <li className="char__comics-item">
                    Avengers (1963) facebook.com1
                </li>
                <li className="char__comics-item">
                    Avengers (1996) facebook.com1
                </li>
            </ul>

        </>
    )
}