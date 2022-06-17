import React from 'react';
import './search-panel.css';


class SearchPanel extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            term: ''
        }
    }


    onUpdateSearch = e => {
        const term = e.target.value;
        this.setState(({term}));
        this.props.searchProp(term);
    }
    render() {
        return(
            <input 
                type="text" 
                onChange={this.onUpdateSearch}
                value={this.state.term}
                className = "form-control search-input"
                placeholder = "Найти сотрудника" />
        ); 
    }
}


export default SearchPanel;