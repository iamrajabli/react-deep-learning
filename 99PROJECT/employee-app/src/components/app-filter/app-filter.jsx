import './app-filter.css';

const AppFilter = (props) => {

    const selectClass = (value) => {
        if (props.filterProps === value) {
            return 'btn btn-light';
        }
        return 'btn btn-outline-light';

    }

    return (
        <div className="btn-group">
            <button
                onClick={() => { props.onUpdateFilter('All') }}
                className={selectClass('All')}> Все сотрудники </button>
            <button
                onClick={() => { props.onUpdateFilter('increase') }}
                className={selectClass('increase')}> На повышение </button>
            <button
                onClick={() => { props.onUpdateFilter('salary') }}
                className={selectClass('salary')}> З/П больше 1000$ </button>
        </div>
    );
};

export default AppFilter;