import { motion } from "framer-motion";
import Contact from "../components/contact/Contact";
const Connect = () =>{
    return(
        <motion.div className="connect" initial={{opacity:0, }} animate={{opacity:1}} exit={{opacity:0, transition:{duration:0.5}}}>
            <Contact/>
        </motion.div>

    )
}
export default Connect;