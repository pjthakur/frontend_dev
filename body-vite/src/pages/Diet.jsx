import React from 'react'
import Forms from '../components/Forms'
import { motion } from 'framer-motion'
const Diet = () => {
  return (
    <motion.div initial={{opacity:0, }} animate={{opacity:1}} exit={{opacity:0, transition:{duration:0.5}}}>
    <div className='diet'>
    <div>Diet</div>
    <Forms/>
    </div>
    </motion.div>
  )
}

export default Diet