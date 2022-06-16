import React from 'react';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployersList from '../employers-list/employers-list';
import EmployersForm from '../employers-add-form/employers-add-form';
import './app.css';


class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [
                { id: 1, name: 'Roman D.', salary: 800, increase: true, like: false },
                { id: 2, name: 'Alex R.', salary: 3000, increase: false, like: false },
                { id: 3, name: 'Carl M.', salary: 5000, increase: false, like: true },
            ]
        }
    }
    
    // Delete item
    deleteItem = (id) => {
        this.setState(({data}) => 
            ({
                data: data.filter(item => item.id !== id)
            })
        )
    }


    render() {

        return (
            <div className="app">
                <AppInfo />
                <div className="search-panel">
                    <SearchPanel />
                    <AppFilter />
                </div>

                <EmployersList
                    data={this.state.data}
                    onDelete={this.deleteItem}
                />
                <EmployersForm />
            </div>
        );

    }
}



export default App;