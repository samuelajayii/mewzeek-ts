/* eslint-disable @typescript-eslint/no-unused-vars */
import { faBell } from "@fortawesome/free-regular-svg-icons"
import { faClockRotateLeft, faGears } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const TopBar = () => {

    const d: Date = new Date()
    let time: string = ""
    if(d.getHours() < 12){
        time = "Good Morning"
    } else if (d.getHours() === 12){
        time = "It's Noon!"
    } else if (d.getHours() <= 16){
        time = "Good Afternoon"
    } else if (d.getHours() >= 17){
        time = "Good Evening"
    }

    const [modal, setModal] = useState(false)
    const showModal = () => {
        setModal(!modal)
    }

    const modalTwo = {
        hidden: {
            y: "-100vh",
            opacity: 0,
        },
        visible: {
            y: 0,
            opacity: 1,
            transition: {type: 'tween', delay: 0.5, duration: 0.5}
        },
    }
    
    return(
        <header className="flex items-center justify-between bg-gradient-to-b">
            <h1 id="time" className="font-bold text-2xl md:text-5xl  py-2 px-2">{time}</h1>
            <div className="flex justify-betweeen items-center justify-between mt-2">
                <FontAwesomeIcon icon={faBell} className="cursor-pointer mr-4 lg:text-5xl lg:mr-10 md:mr-6 md:text-3xl" onClick={showModal}/>
                <FontAwesomeIcon icon={faGears} className="cursor-pointer mr-4 lg:text-5xl md:mr-4 md:text-3xl"/>
                {modal && (
                    <AnimatePresence>
                        <motion.div
                        className='fixed top-0 left-0 w-screen h-screen z-10 bg-[rgba(0,0,0,0.5)] flex items-center justify-center text-black'
                        animate={{opacity: 1}}
                        initial={{opacity: 0}}
                        transition={{duration: 0.5}}
                        >
                            <motion.div className='max-w-[600px] my-0 mx-auto h-3/4 bg-white rounded-xl px-6 py-4'
                            variants={modalTwo}
                            initial="hidden"
                            animate="visible"
                            
                            >   <div className="flex flex-row items-center justify-between border-b py-1">
                                    <p className='text-[1.3rem]'>Notifications</p>
                                    <button className="px-2 py-0.5" onClick={() => {setModal(!modal)}}>&times;</button>
                                </div>
                                
                                <h1 className="border-b py-2">Thank you for signing up and welcome to the Mewzeek Music Player</h1>
                            </motion.div>
                        </motion.div>
                    </AnimatePresence>
                )}
            </div>
        </header>
        
    )
}

export default TopBar