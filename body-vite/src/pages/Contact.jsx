import React from 'react'
import Form from '../components/Forms'
import {motion} from 'framer-motion'
import contact from '../assets/contactus.png'

const Contact = () => {
  return (
    <motion.div initial={{opacity:0,}} animate={{opacity:1}} exit={{opacity:0,transition:{duration:0.5}}}>
    <div className = "contactus">
      <img src={contact}/>
      <h2 >Feel free to Contact us</h2>
      <div className='contact-main'>
    
          <form>
          <fieldset id='fs'>
            <label className='contact-item1'>
            Your Name: 
            <br/>
            <input type='text'/>
            </label>
            <label className='contact-item2'>
            Email: 
            <br/>
            <input type='email'/>
            </label>
            <br/>
            <label className='contact-item3'>
            Subject:
            <br/> 
            <input type='text'/>
            </label>
            <br/>
            <label className='contact-item4'>
            Your Message <span>(optional)</span> 
            <br/>
            <textarea type='text'/>
            </label>
          </fieldset>
          </form>
        </div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1723.4966373028317!2d78.04798382705005!3d27.219219197237926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1681579457322!5m2!1sen!2sin" width="100%" height="450" style={{border:0, marginTop:50}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>
    </motion.div>
  )
}

export default Contact