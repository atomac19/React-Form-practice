import React, { useState } from 'react';


function StudentForm() {
  const [firstName, setFirstName] = useState('');
  function handleFirstName(e) {
    setFirstName(e.target.value);
  }
  const [lastName, setLastName] = useState('');
  function handleLastName(e) {
    setLastName(e.target.value);
  }
  const [age, setAge] = useState(6);
  function handleAge(e) {
    setAge(e.target.value);
  }
  const [userInput, setUserInput] = useState('');
  function handleUserInput(e) {
    setUserInput(e.target.value);
  }
  const [homeroomClassNumber, setHomroomClassNumber] = useState(1);
  function handleHomeroomClassNumber(e) {
    setHomroomClassNumber(e.target.value);
  }
  const [address, setAddress] = useState('');
  function handleAddress(e) {
    setAddress(e.target.value);
  }
  const [studentId, setStudentId] = useState('');
  function handleStudentId(e) {
    setStudentId(e.target.value);
  }
  const [lunch, setLunch] = useState('');
  function handleLunch(e) {
    setLunch(e.target.value);
  }

  return (
    <>
    <div style={{ 
      fontFamily: 'Courier',
      textAlign: 'center'
      }}>
      <h2 style={{
        border: '2px solid black',
      }}>Student Form for a School Administrator</h2>
      <form>
          <label for="firstName">First name: </label>
          <input id="firstName" type="text" size="20" style={{marginBottom: 10}} onChange={handleFirstName} value={firstName}/>
          <label for="lastName">  Last name: </label>
          <input id="lastName" type="text" onChange={handleLastName} value={lastName}/>
          <label for="age">Age: </label>
          <input
            id="age"
            value={age}
            onChange={handleAge}
            type="number"
            min="6"
            max="70"
          />
          <label>Address:
            <input id="address" type="text" size="47" style={{marginBottom: 10}} onChange={handleAddress} value={address}/> 
          </label>
          
          <label for="homeroomClass">Homeroom class number: </label>
          <input
            id="homeroomClass"
            value={homeroomClassNumber}
            onChange={handleHomeroomClassNumber}
            type="number"
            min="1"
            max="100"
          />
          <label> Student ID:
            <input type="text" size="19" onChange={handleStudentId} value={studentId}/> 
          </label>
          
          <fieldset style={{marginBottom: 10}}>
            <legend>Lunch option: </legend>
              <label>
                <input type="radio" value="Spinach Salad" 
                      checked={lunch === "Spinach Salad"} onChange={handleLunch} />
                Spinach Salad
              </label>
              <label>
                <input type="radio" value="Simple Tomato Sandwich" 
                      checked={lunch === "Simple Tomato Sandwich"} onChange={handleLunch} />
                Simple Tomato Sandwich
              </label>
              <label>
                <input type="radio" value="Applesauce Sandwiches" 
                      checked={lunch === "Applesauce Sandwiches"} onChange={handleLunch} />
                Applesauce Sandwiches
              </label>
          </fieldset>
      </form>
    </div>
    <div>
        <h2>Update state for each field</h2>
        <p>First name: {firstName}</p>
        <p>Last name: {lastName}</p>
        <p>Age: {age}</p>
        <p>Address: {address}</p>
        <p>Homeroom class number: {homeroomClassNumber}</p>
        <p>Student ID: {studentId}</p>
        <p>Lunch option: {lunch}</p> 
      </div>
    </>
  );
}




export default StudentForm;