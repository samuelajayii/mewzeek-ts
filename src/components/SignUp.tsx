import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRecordVinyl } from '@fortawesome/free-solid-svg-icons'
import SignUpForm from './SignUpForm'

const animations = {
    initial: {x: "-100vw"},
    animate: {x: 0},
    exit: {x: "-100vw"}
}

function SignUp() {
    return(
        <div className='overflow-x-hidden flex items-center justify-center h-screen'>
            <motion.div className='flex flex-wrap items-center justify-center mt-9'
            transition={{type: "spring", stiffness: 40}} 
            variants={animations}
            initial="initial"
            animate="animate"
            exit="exit"
            >
                <div className='border rounded-3xl py-6 px-5 flex flex-col items-center justify-center'>
                    <div className='flex flex-row px-4 items-center'>
                        <FontAwesomeIcon icon={faRecordVinyl} className='text-3xl'/>
                        <h1 className='font-semibold text-lg ml-3'>Mewzeek</h1>
                    </div>
                    <h1>Mewzeek To Your Ears</h1>
                    <SignUpForm/>
                </div>
                
            </motion.div>
        </div>
        
    )
}

export default SignUp