import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRecordVinyl } from '@fortawesome/free-solid-svg-icons'
import SignInForm from './SignInForm'

const animations = {
    initial: { y: "100vh" },
    animate: { y: 0 },
    exit: { y: "-100vh" }
}

const SignIn = () => {
    return (
        <div className='overflow-y-hidden flex items-center justify-center h-screen '>
            <motion.div
                transition={{ type: "spring", stiffness: 40 }}
                variants={animations}
                initial="initial"
                animate="animate"
                exit="exit"
                className='flex flex-wrap items-center justify-center '
            >
                <div className='border rounded-3xl py-6 px-5 flex flex-col items-center justify-center'>
                    <div className='flex flex-row px-4 items-center'>
                        <FontAwesomeIcon icon={faRecordVinyl} className='text-3xl' />
                        <h1 className='font-semibold text-lg ml-3'>Mewzeek</h1>
                    </div>
                    <h1>Mewzeek To Your Ears</h1>
                    <SignInForm />
                </div>

            </motion.div>
        </div>
    )
}

export default SignIn