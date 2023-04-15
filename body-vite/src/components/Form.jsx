import React from 'react'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
const Forms = () => {
  const submitForm = () =>{

  }
  return (
    <form onSubmit={submitForm}>
      <div className='form-fields'>
      <label>
        Enter your Name:
        <br/>
        <input type="text" placeholder=''/>
      </label>
      <br/>
      <label>
        Enter your Country:
        <br/>
        <input type="text" placeholder=''/>
      </label>
      <br/>
      <label>
        Enter your Mobile Number:
        <br/>
        <PhoneInput
        country={'in'}
      />
      </label>
      <br/>
      <label>
        Select your Gender:
        <br/>
        <select>
          <option>Male</option>
          <option>Female</option>
        </select>
      </label>
      <br/>
      <label>
        Enter your age<span> (in years) </span>:
        <br/>
        <input type="number" placeholder=''/>
      </label>
      <br/>
      <label>
        Enter your Weight<span> (In kgs) </span>:
        <br/>
        <input type="number" placeholder=''/>
      </label>
      <br/>
      <label>
        Enter your height <span> (in cm) </span>:
        <br/>
        <input type="text" placeholder=''/>
      </label>
      
      </div>
    </form>
  )
}

export default Forms