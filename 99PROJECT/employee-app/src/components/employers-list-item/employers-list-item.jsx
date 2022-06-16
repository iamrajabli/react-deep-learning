import React from 'react';
import './employers-list-item.css';

const EmployersListItem = (props) => {
    const { id, name, salary, onDelete, increase, like, onToggleIncrease, onToggleLike } = props;
    let className = "list-group-item d-flex justify-content-between";

    if (increase) {
        className += " increase";
    }
    if (like) {
        className += " like";
    }

    return (
        <li className={className}>
            <span
                onClick={() => onToggleLike(id)}
                className="list-group-item-label">
                {name}
            </span>
            <input type="text" className="list-group-item-input" defaultValue={`${salary}$`} />
            <div className='d-flex justify-content-center align-items-center'>
                <button type="button" onClick={() => onToggleIncrease(id)}
                    className="btn-cookie btn-sm ">
                    <i className="fas fa-cookie"></i>
                </button>

                <button type="button"
                    className="btn-trash btn-sm"
                    onClick={() => onDelete(id)}>
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    );


};

export default EmployersListItem;