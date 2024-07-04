import './Form.css';
import Email from '../input/Email';
import FirstName from '../input/FirstName';
import LastName from '../input/LastName';
import Button from '../button/Button';

const Form = () => {
    return (
        <form className="form">
            <FirstName />
            <LastName />
            <Email />
            <Button />
        </form>
    )
}

export default Form;