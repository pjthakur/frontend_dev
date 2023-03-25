import './App.css';
import { useState } from 'react';
const PasswordErrorMessage = () => { 
  return ( 
    <p className="FieldError">*Password should have at least 8 characters*</p> 
  ); 
 }; 

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState(""); 
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState({ 
    value: "", 
    isTouched: false, 
  });; 
  const [role, setRole] = useState("role"); 
  
  const getIsFormValid = () => { 
    return ( 
      firstName && 
      password.value.length >= 8 && 
      role !== "role" 
    ); 
  };

  const clearForm = () => { 
    setFirstName(""); 
    setLastName(""); 
    setEmail(""); 
    setPassword({
      value:"",
      isTouched:false
    });
    setRole("role"); 
  };

  const handleSubmit = (e) => { 
    e.preventDefault(); 
    alert("Account created!"); 
    clearForm(); 
  };
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <fieldset>
        <h1>Sign Up!</h1>
        <label>First Name: <span>*</span></label>
        <input type="text" value={firstName} onChange={(e)=>{setFirstName(e.target.value)}}/>
        <label>Last Name: <span>*</span></label>
        <input type="text" value={lastName} onChange={(e)=>{setLastName(e.target.value)}}/>
        <label>Email: <span>*</span></label>
        <input type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
        <label>Password: <span>*</span></label>
        <input type="password"  value = {password.value} onChange={(e) => { 
               setPassword({ ...password, value: e.target.value }); 
             }} 
             onBlur={() => { 
               setPassword({ ...password, isTouched: true }); 
             }}/>
             {/* {password.isTouched && password.value.length < 8 ? ( 
             <PasswordErrorMessage /> 
              ) : null}  */}
        <label>Role:</label>
        <select value={role} onChange={(e)=>{setRole(e.target.value)}}>
          <option value="role">Role</option>
          <option value ="individual">Individual</option>
          <option value = "business">Business</option>
        </select>
        <button type = "submit" disabled={!getIsFormValid()}>Submit</button>
        </fieldset>
      </form>
    </div>
  );
}

export default App;
