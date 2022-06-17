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
            ],
            term: ''
        }
        this.generatorID();
    }
    // Gerate new randomly id
    generatorID = () => {
        const id = new Date().getTime().toString().slice(9, 14);
        return +id;
    };
    // Delete user
    deleteItem = (id) => {
        this.setState(({ data }) =>
        ({
            data: data.filter(item => item.id !== id)
        }));
    };

    // Add user
    addItem = (obj) => {
        // Way 1
        // obj.id = this.generatorID();
        // obj.increase = false;
        // obj.like = false;
        // const newList = this.state.data.map( item => item);
        // newList.push(obj);

        // this.setState({data: newList});

        // Way 2
        const newItem = {
            ...obj,
            id: this.generatorID(),
            increase: false,
            like: false,
        }

        this.setState(({ data }) => {
            const newList = [...data, newItem];

            return {
                data: newList
            }
        });


    };

    // Add star
    onToggleIncrease = (id) => {

        this.setState(({ data }) => ({
            data: data.map(item => {

                if (item.id === id) {
                    return { ...item, increase: !item.increase }
                }

                return item;
            })
        }
        ));
    };

    // Add like
    onToggleLike = (id) => {
        this.setState(({ data }) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return { ...item, like: !item.like }
                }
                return item;
            })
        }));
    };

    // Search
    searchEmp = (items, term) => {
        if(term.length === 0) {
            return items;
        }

        return items.filter(item => item.name.indexOf(term) > -1)
    }

    // update *term* for searching
    onUpdateSearch = (term) => {
        this.setState({term});
    }


    render() {
        const {data, term} = this.state;
        const totalEmployees = this.state.data.length;
        const willAward = this.state.data.filter(item => item.increase).length;
        const visibleData = this.searchEmp(data, term);


        return (
            <div className="app">
                <AppInfo
                    totalEmployees={totalEmployees}
                    willAward={willAward} />
                <div className="search-panel">
                    <SearchPanel searchProp={this.onUpdateSearch} />
                    <AppFilter />
                </div>

                <EmployersList
                    data={visibleData}
                    onDelete={this.deleteItem}
                    onToggleIncrease={this.onToggleIncrease}
                    onToggleLike={this.onToggleLike}
                />
                <EmployersForm onAdd={this.addItem} />
            </div>
        );

    }
}



export default App;