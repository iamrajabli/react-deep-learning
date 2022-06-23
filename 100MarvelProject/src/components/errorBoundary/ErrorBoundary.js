import { Component } from 'react';

export default class ErrorBoundary extends Component {

    state = {
        error: false
    }

    getError = () => {
        this.setState(({ error: true }));
    }


    componentDidCatch() {
        this.getError();
    }

    render() {
        if (this.state.error) {
            return <h1>Something went wrong...</h1>
        }

        return (
            this.props.children
        )
    }
}