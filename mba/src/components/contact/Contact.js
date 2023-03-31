import './contact.css'
import { useState } from 'react';
import { FiMail } from "react-icons/fi";

const Contact = () =>{
    const [role, setRole] = useState("role");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [number, setNumber] = useState("");
    const [org, setOrg] = useState("");
    const [selectedFile, setSelectedFile] = useState();
  const getIsFormValid = () => {
    return name && email && subject && org && number.length>=10 && role !== "role";
  };

  const clearForm = () => {
    setName("");
    setSubject("");
    setEmail("");
    setMessage("");
    setNumber("");
    setRole("role");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Query Sent!!")
    clearForm();
  };
    return(
        <div className="contact-form">
           <h2>Contact Info</h2>
           <hr/>
            <div className='details'>
                <div className='for'>
                    <h6>For Programme:</h6>
                    <h5>National AMB PMU MoHFW</h5>
                    <a href='mailto:amb.mohfw@gmail.com'><FiMail/> amb.mohfw@gmail.com</a>
                </div>
                <div className='for'>
                    <h6>For Dashboard:</h6>
                    <h5>AMB Help Desk MoHFW</h5>
                    <a href='mailto:ambhelpdeskmohfw@gmail.com'><FiMail/> ambhelpdeskmohfw@gmail.com</a>
                </div>
            </div>
            <hr/>
            <h5 id='query-heading'>SUBMIT YOUR QUERY / MESSAGES</h5>
            <div className='form-sub'>
                <form onSubmit={handleSubmit}>
                    
                    <label>
                        Query Type
                    <br/>
                    <select value={role} onChange={(e)=>{setRole(e.target.value)}}>
                        <option value='Select'>Please Select One</option>
                        <option value='Programme-related'>Programme Related</option>
                        <option value='Dashboard-related'>Dashboard Related</option>
                    </select>
                    </label>
                    <label>
                        Your name
                        <br/>
                        <input type='text' placeholder='Full name' value={name} onChange={(e)=>{setName(e.target.value)}}/>
                    </label>
                    <label>
                        Your Email
                        <br/>
                        <input type='email' placeholder='enter your mail' value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                    </label>
                    <label>
                        Subject
                        <br/>
                        <input type='text' placeholder='enter your subject' value={subject} onChange={(e)=>{setSubject(e.target.value)}}/>
                    </label>
                   
                    <label>
                        Your message (option)
                        <br/>
                        <textarea type='text' value={message} onChange={(e)=>{setMessage(e.target.value)}}/>
                    </label>
                    <label>
                        Organization
                        <br/>
                        <input type='text' placeholder='enter your organization' value={org} onChange={(e)=>{setOrg(e.target.value)}}/>
                    </label>
                    <label>
                        Contact No.
                        <br/>
                        <input type='tel' placeholder='eg : 97561...' value={number} onChange={(e)=>{setNumber(e.target.value)}}/>
                    </label>
                    <label>
                     File
                        <br/>
                        <input type='file' placeholder='enter your subject' onChange={(e)=>setSelectedFile(e.target.files[0])}/>
                    </label>
                    <button type='=submit' disabled={!getIsFormValid()}> SUBMIT</button>
                </form>
            </div>
        </div>
    )
}
export default Contact;