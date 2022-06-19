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
            term: '',
            filter: 'All'
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
        ))};

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
    searchEmp = (data, term) => {
        // way 1
        // if (term.length > 0 && this.state.salary) {
        //     const newData = data.filter(item => item.salary > 1000);
        //     return newData.filter(item => item.name.indexOf(term) > -1);
        // }

        // if (term.length > 0 && this.state.increase) {
        //     const newData = data.filter(item => item.increase);
        //     return newData.filter(item => item.name.indexOf(term) > -1);
        // }

        // if (this.state.salary) {
        //     return data.filter(item => item.salary > 1000);
        // }

        // if (this.state.increase) {
        //     return data.filter(item => item.increase)
        // }

        // if (term.length == 0) {
        //     return data;
        // }

        // way 2 
        if (term.length === 0) {
            return data;
        }

        return data.filter(item => item.name.indexOf(term) > -1);

    };

    // Salary filter > 1000
    onUpdateFilter = (filter) => {
        this.setState({ filter });
    };

    filterEmp = (data, filter) => {
        switch (filter) {
            case 'All':
                return data;
            case 'salary':
                return data.filter(item => item.salary > 1000);
            case 'increase':
                return data.filter(item => item.increase);
        }
    }

    // update *term* for searching
    onUpdateSearch = (term) => {
        this.setState(({ term }));
    };


    render() {
        const { data, term } = this.state;
        const totalEmployees = this.state.data.length;
        const willAward = this.state.data.filter(item => item.increase).length;

        const visibleData = this.filterEmp(this.searchEmp(data, term), this.state.filter);


        return (
            <div className="app">
                <AppInfo
                    totalEmployees={totalEmployees}
                    willAward={willAward} />
                <div className="search-panel">
                    <SearchPanel searchProp={this.onUpdateSearch} />
                    <AppFilter onUpdateFilter={this.onUpdateFilter} filterProps={this.state.filter} />
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