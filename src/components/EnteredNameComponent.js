import React from 'react';



const EnteredNames = (props) => {
    console.log("Felix", props);
    return(
    <div>
        <p>{props.onSaveFirstName}</p>
        <p>{props.onSaveLastName}</p>
        <p>{props.arraySave.map(names =>(
            <li>{names}</li>
        ))}</p>
    </div>
    );

}

export default EnteredNames;