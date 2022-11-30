import React from 'react';
import PracticeComponent from './components/Practice_components';
import EnteredNameComponent from './components/EnteredNameComponent'

import './App.css';

const setFirstName = (firstName) => {
  return firstName;
}

const setLastName = (lastName) => {
  return lastName;
}

function App() {
  return (
    <div className="App">
      <PracticeComponent onSetFirstName = {setFirstName} onSetLastName = {setLastName}/>
      <EnteredNameComponent firstName={setFirstName} lastName={setLastName}/>
    </div>
  );
}

export default App;
