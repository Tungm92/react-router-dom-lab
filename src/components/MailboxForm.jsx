import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// initial form data
const initialState = {
    boxholder: '',
    boxsize:'Small',
};

const MailboxForm = (props) => {

    // create formData state
    const [formData, setFormData] = useState(initialState);

    // function for navigation away from form
    const navigate = useNavigate();

    // submission function
    const handleSubmit = (event) => {

        // prevent automatic navigation
        event.preventDefault();

        // place the properties in the form to the function that was passed
        // from App.jsx
        props.addMailbox(formData)

        // reset formData
        setFormData(initialState);

        // navigate back to the list of mailboxes after submission
        navigate('/mailboxes')
    };

    // allow the input/selection to be update as the user fills/selects
    const handleChange = (event) => {

        // set the form data to what is input/selected
        setFormData({ ...formData, [event.target.name]: event.target.value})
    };

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <label htmlFor="boxholder">Mailbox Holder: </label>
                <input 
                    id="boxholder"
                    name="boxholder"
                    value={formData.boxholder}
                    onChange={handleChange}
                />
                <label htmlFor="boxsize">Mailbox Size: </label>
                <select 
                    id="boxsize"
                    name="boxsize"
                    value={formData.boxsize}
                    onChange={handleChange}
                >
                    <option value='Small'>Small</option>
                    <option value='Medium'>Medium</option>
                    <option value='Large'>Large</option>
                </select>
                <button type="submit">Submit mailbox</button>
            </form>
        </div>
    );
};

export default MailboxForm;