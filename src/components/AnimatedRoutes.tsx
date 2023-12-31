/* eslint-disable @typescript-eslint/no-unused-vars */
import { Route, Routes } from "react-router-dom"
import { useLocation } from "react-router-dom"
import Home from "./Home"
import SignIn from "./SignIn"
import SignUp from "./SignUp"
import MusicPage from "./MusicPage"
import Profile from "./Profile"
import Search from "./Search"
import { AnimatePresence } from 'framer-motion'

const AnimatedRoutes = () => {
    const location = useLocation()


    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path='/signin' element={<SignIn />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/musicpage" element={<MusicPage />} />
                <Route path='/profile' element={<Profile />} />
                <Route path="/search" element={<Search />} />
            </Routes>
        </AnimatePresence>
    )
}
export default AnimatedRoutes