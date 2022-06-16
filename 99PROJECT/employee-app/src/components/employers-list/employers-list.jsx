import './employers-list.css';
import EmployersListItem from "../employers-list-item/employers-list-item";

const EmployersList = ({ data, onDelete, onToggleLike, onToggleIncrease }) => {

    const elements = data.map(item => {
        const key = item.id;
        return (
            <EmployersListItem
                {...item}
                key={key} 
                onDelete={onDelete}
                onToggleLike={onToggleLike}
                onToggleIncrease={onToggleIncrease}
                />
        );
    });
    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    );
};

export default EmployersList;

