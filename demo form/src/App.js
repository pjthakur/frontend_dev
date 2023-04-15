import './App.css';
import { useState } from 'react';
import Axios from 'axios';


function App() {
  const [name, setName] = useState("");
  const [country, setCountry] = useState(""); 
  const [email, setEmail] = useState(""); 
  const [role, setRole] = useState("role"); 
  const [tele, setTele] = useState(); 
  const [age, setAge] = useState(""); 
  const [weight, setWeight] = useState("role"); 
  const [height, setHeight] = useState(); 
  const [workout, setWorkout] = useState(); 
  const isd = 91
  const url = "";
  const getIsFormValid = () => { 
    return ( 
      name && 
      role !== "role" 
    ); 
  };

  const clearForm = () => { 
    setName("");  
    setEmail(""); 
    
    setRole("role"); 
  };

  const handleSubmit = (e) => { 
    e.preventDefault(); 
    alert("Account created!"); 
    clearForm(); 
    Axios.post(url,{
      name:name,
      country:country,
      email:email,
      role:role,
      tele:tele,
      age:age,
      weight:weight,
      height:height,
      workout:workout,
      isd :isd
    })
    .then()
  };
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <fieldset>
        <h1>Sign Up!</h1>
        <label>Name: <span>*</span></label>
        <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}}/>
        
        <label>TelePhone: <span>*</span></label>
        <input type="tel" value={tele} onChange={(e)=>{setTele(e.target.value)}}/>
        <label>Country: <span>*</span></label>
        <input type="text" value={country} onChange={(e)=>{setCountry(e.target.value)}}/>
        <label>Email: <span>*</span></label>
        <input type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
        <label>Gender:</label>
        <select value={role} onChange={(e)=>{setRole(e.target.value)}}>
          <option value="role">Role</option>
          <option value ="male">Male</option>
          <option value = "female">Female</option>
          <option value = "others">Others</option>
        </select>
        <label>Age: <span>*</span></label>
        <input type="number" value={age} onChange={(e)=>{setAge(e.target.value)}}/>
        <label>Weight: <span>*</span></label>
        <input type="number" value={weight} onChange={(e)=>{setWeight(e.target.value)}}/>
        <label>Height: <span>*</span></label>
        <input type="number" value={height} onChange={(e)=>{setHeight(e.target.value)}}/>
        <label>Workout: <span>*</span></label>
        <input type="text" value={workout} onChange={(e)=>{setWorkout(e.target.value)}}/>
        
        <button type = "submit" disabled={!getIsFormValid()}>Submit</button>
        </fieldset>
      </form>
    </div>
  );
}

export default App;
