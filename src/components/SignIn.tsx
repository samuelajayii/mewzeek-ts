import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRecordVinyl } from '@fortawesome/free-solid-svg-icons'
import Form from './Form'

function SignIn() {
    return(
        <div className='overflow-x-hidden flex items-center justify-center h-screen w-screen '>
            <motion.div
            initial={{x: "100vw"}}
            animate={{x: 0}}
            transition={{type: "spring", delay: 0.5, stiffness: 40, duration: 5}} className='flex flex-wrap items-center justify-center '
            >
                <div className='border rounded-3xl py-6 px-5 flex flex-col items-center justify-center'>
                    <div className='flex flex-row px-4 items-center'>
                        <FontAwesomeIcon icon={faRecordVinyl} className='text-3xl'/>
                        <h1 className='font-semibold text-lg ml-3'>Mewzeek</h1>
                    </div>
                    <h1>Mewzeek To Your Ears</h1>
                    <Form/>
                </div>
                
            </motion.div>
        </div>
        
    )
}

export default SignIn