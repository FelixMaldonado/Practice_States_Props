import React, {useState} from 'react';
import EnteredNames from './EnteredNameComponent'


const PracticeComponent = (props) => {
    const [enteredFirstName, setEnteredFirstName] = useState('');
    const [enteredLastName, setEnteredLastName] = useState('');
    const [savedFirstName, setSavedFirstName] = useState('');
    const [savedLastName, setSavedLastName] = useState('');
    const [names, setNames] = useState([]);

    const firstNameChange = (event) =>{
        setEnteredFirstName(event.target.value);
    };

    const lastNameChange = (event) => {
        setEnteredLastName(event.target.value);
    };


    const submitHandler = (event) => {
        event.preventDefault();
        names.push(enteredFirstName, enteredLastName);
        setSavedFirstName(enteredFirstName);
        setSavedLastName(enteredLastName);

        setEnteredFirstName('');
        setEnteredLastName('');
    }

    return(
    <div>
        <form onSubmit={submitHandler}>
            <label>First Name</label>
            <input type  ="text" value = {enteredFirstName} onChange={firstNameChange}/>
            <label>Last Name</label>
            <input type = "text" value = {enteredLastName} onChange={lastNameChange}/>
            <div>
                <button type = 'submit'>Lock in Name</button>
            </div>
        </form>
        <div>
            <EnteredNames onSaveFirstName = {savedFirstName} onSaveLastName = {savedLastName} arraySave = {names}/>
        </div>
    </div>
    )
}

export default PracticeComponent;


