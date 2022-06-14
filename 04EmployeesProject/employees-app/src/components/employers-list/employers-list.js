import './employers-list.css';
import EmployersListItem from "../employers-list-item/employers-list-item";

const EmployersList = ({ data }) => {

    const elements = data.map((item,key) => {
        return(
            <EmployersListItem {...item} key={key}/>
        );
    });
    console.log(elements);
    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    );
};

export default EmployersList;

