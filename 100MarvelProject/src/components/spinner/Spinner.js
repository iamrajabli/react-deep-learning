import spinner from './spinner.gif'
import './spinner.css'

const Spinner = () => {
    return (
        <div className="spinner">
            <img src={spinner} alt="" />
        </div>
    )
}

export default Spinner;