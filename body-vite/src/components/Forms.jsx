import { Axios } from 'axios';
import React, { useState } from 'react'

const Forms = () => {
  const [data, setData] = useState({
    name:"",
    country:"",
    isd_code:"",
    mobile_number:"",
    gender:"",
    age:"",
    weight:"",
    height:"",
    work_out:"",
    workout_period:"",
    workout_time:"",
    expected_from_dietplan:"",
    disease_allergy:"",
    diet:"",
    south_indian:"",
    regular_diet:"",
    taking_supplements:"",
    supplements:"",
  })

  const handle=(e)=>{
    const id = e.target.id;
    const value = e.target.value;
    setData ({...data, [id]:value})
  }
  const submission = (e) =>{
    e.preventDefault();
    alert("submitted")
    console.log(data)
   
  }
  return (
    <div className='forms'>
      <form onSubmit={submission} >
          <label>
            Name :
            <br/>
            <input type='text' id="name" value={data.name} onChange={handle} name='name'/>
          </label>
          <label>
            Country :
            <br/>
            <input type='text' id="country" value={data.country} onChange={handle} name='country'/>
          </label>
          <label>
            ISD Code :
            <br/>
            <input type='text' id="isd_code" value={data.isd_code} onChange={handle} name='isd_code'/>
          </label>
          <label>
            Mobile Number :
            <br/>
            <input type='tel' id="mobile_number" value={data.mobile_number} onChange={handle} name="mobile_number"/>
          </label>
          <label>
            Gender :
            <br/>
            <select id="gender" value={data.gender} onChange={handle} name="gender">
              <option>Select</option>
              <option>Male</option>
              <option>Female</option>
            </select>
          </label>
          <label>
            Age :
            <br/>
            <input type='number' id="age" value={data.age} onChange={handle} name="age"/>
          </label>
          <label>
            Weight :
            <br/>
            <input type='number' min={30} max={200} id="weight" value={data.weight} onChange={handle} name="weight"/>
          </label>
          <label>
            Height :
            <br/>
            <input type='number'step={0.1} id="height" value={data.height} onChange={handle} name="height"/>
          </label>
          <label>
            Workout :
            <br/>
            <input type='text' id="work_out" value={data.work_out} onChange={handle} name="work_out"/>
          </label>
          <label>
            Workout Period :
            <br/>
            <select id="workout_period" value={data.workout_period} onChange={handle} name="workout_period">
              <option value="">Select</option>
              <option>Morning</option>
              <option>Evening</option>
            </select>
          </label>
          <label>
            Workout Time: <span>( no. of times you workout daily )</span>
            <br/>
            <input type='number' id="workout_time" value={data.workout_time} onChange={handle} name="workout_time"/>
          </label>
          <label>
            Diet Expectations :
            <br/>
            <textarea type='text' style={{backgroundColor:'#0b0b0c00', width:'100%'}} id="expected_from_dietplan" value={data.expected_from_dietplan} onChange={handle} name="expected_from_dietplan"/>
          </label>
          <label>
            Any Disease <span>(optional)</span> : 
            <br/>
            <input type='text' id="disease_allergy" value={data.disease_allergy} onChange={handle} name="disease_allergy"/>
          </label>
          <label id='dp'>
            Diet Preference :
            <br/>
            <select id="diet" value={data.diet} onChange={handle} name="diet">
              <option>Veg</option>
              <option>Non-Veg</option>
              <option>Egg</option>
            </select>
            
          </label>
          <label className="container">Are you South-Indian:
          <select id="south_indian" value={data.south_indian} onChange={handle} name="south_indian">
              <option>Select</option>
              <option>No</option>
              <option>Yes</option>
            </select>
          </label>  
          
          <label className="container">Do you want a regular diet :
          <select id="regular_diet" value={data.regular_diet} onChange={handle} name="regular_diet">
              <option>Select</option>
              <option>No</option>
              <option>Yes</option>
            </select>          
            </label>  
          <label className="container">Are you Taking any supplements :
          <select id="taking_supplements" value={data.taking_supplements} onChange={handle} name="taking_supplements">
              <option>Select</option>
              <option>No</option>
              <option>Yes</option>
            </select>
          </label>  
          <label>
            If yes, mention them : <span>(seperate by comma(,))</span>
            <br/>
            <input type='text' id="supplements" value={data.supplements} onChange={handle} name="supplements"/>
          </label>
          <button type='submit'> Submit </button>
      </form>
    </div>
  )
}

export default Forms