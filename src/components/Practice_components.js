import React, {useState} from 'react';


const PracticeComponent = (props) => {
    const [enteredFirstName, setEnteredFirstName] = useState('');
    const [enteredLastName, setEnteredLastName] = useState('');

    const firstNameChange = (event) =>{
        setEnteredFirstName(event.target.value);
    };

    const lastNameChange = (event) => {
        setEnteredLastName(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        props.setFirstName(enteredFirstName);
        props.onSetLastName(enteredLastName);
    
        setEnteredFirstName('');
        setEnteredLastName('');
    }

    return(
    <form onSubmit={submitHandler}>
        <label>First Name</label>
        <input type  ="text" value = {enteredFirstName} onChange={firstNameChange}/>
        <label>Last Name</label>
        <input type = "text" value = {enteredLastName} onChange={lastNameChange}/>
        <div>
            <button type = 'submit'>Lock in Name</button>
        </div>
    </form>
    )
}

export default PracticeComponent;


