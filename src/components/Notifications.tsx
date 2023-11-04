/* eslint-disable @typescript-eslint/no-unused-vars */
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const modal = {
    hidden: {
        y: "-100vh",
        opacity: 0
    },
    visible: {
        y: "200px",
        opacity: 1,
        transition: {delay: 0.5}
    }
}

const Notifications = () => {

    return(
        <div></div>
    )
}

export default Notifications