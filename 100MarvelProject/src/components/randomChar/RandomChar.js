import './randomChar.scss';
import React from 'react';
import MarvelService from '../../services/MarvelService';
import mjolnir from '../../resources/img/mjolnir.png';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';

export default class RandomChar extends React.Component {
 
    state = {
        char: {},
        loading: true,
        error: false
    }

    componentDidMount() {
        this.updateChar();
    }

    MarvelService = new MarvelService();

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
        const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000);
        this.onCharLoading();
        this.MarvelService
            .getCharacter(id)
            .then(res => {
                this.onCharLoaded(res);
            })
            .catch(this.onErrorLoaded);
    }

    render() {
        
        const { char, loading, error } = this.state;
        const errorContent = error ? <ErrorMessage /> : null;
        const loadingContent = loading ? <Spinner /> : null;
        const content = !(error || loading) ? <View char={char} /> : null;


        return (
            <div className="randomchar">
                {errorContent}
                {loadingContent}
                {content}
                <div className="randomchar__static">
                    <p className="randomchar__title">
                        Random character for today!<br />
                        Do you want to get to know him better?
                    </p>
                    <p className="randomchar__title">
                        Or choose another one
                    </p>
                    <button
                        onClick={this.updateChar}
                        className="button button__main" >
                        <div className="inner">try it</div>
                    </button>
                    <img src={mjolnir} alt="mjolnir" className="randomchar__decoration" />
                </div>
            </div>
        )
    }
};


const View = ({ char }) => {
    const { name, description, thumbnail, homepage, wiki } = char;
    return (
        <div className="randomchar__block">
            <img src={thumbnail} alt="Random character" className="randomchar__img" />
            <div className="randomchar__info">
                <p className="randomchar__name">{name}</p>
                <p className="randomchar__descr">
                    {description}
                </p>
                <div className="randomchar__btns">
                    <a href={homepage} className="button button__main">
                        <div className="inner">homepage</div>
                    </a>
                    <a href={wiki} className="button button__secondary">
                        <div className="inner">Wiki</div>
                    </a>
                </div>
            </div>
        </div>
    )
}
