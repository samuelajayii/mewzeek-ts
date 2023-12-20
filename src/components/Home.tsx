import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRecordVinyl } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'


function Home() {
    return (
        <motion.div className='flex flex-col overflow-hidden h-screen justify-between'
            exit={{ x: '-100vw' }}
            transition={{ duration: 0.4 }}

        >
            <motion.div className='w-screen h-[57vh] -mt-5 flex flex-col items-center bg-black rounded-b-[50px]'
                initial={{ y: -550 }}
                animate={{ y: 0 }}
                transition={{ type: "spring", delay: 0.5, duration: 1.5 }}
            >
                <motion.div
                    drag
                    dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                    dragElastic={0.7}
                >
                    <FontAwesomeIcon icon={faRecordVinyl} className=' text-9xl text-white mt-56 md:mt-[20rem] lg:mt-[17.6rem] border bg-black p-2 rounded-full self-center' />
                </motion.div>
            </motion.div>

            <motion.h1 className='text-black text-center font-bold text-3xl mt-[3.1rem]'
                initial={{ opacity: 0, x: -400 }}
                animate={{ opacity: 1, x: 0 }}
            >Mewzeek</motion.h1>
            <motion.button className='text-xl border w-fit self-center rounded-3xl px-6 py-1 mb-14 hover:scale-110 transition-all drop-shadow-xl hover:shadow-md'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1.2 }}
            >
                <Link to="/signup" className=''>Sign Up/In -</Link>
            </motion.button>
        </motion.div>
    )
}
export default Home
