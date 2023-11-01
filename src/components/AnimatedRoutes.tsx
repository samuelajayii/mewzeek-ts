import { Route, Routes } from "react-router-dom"
import { useLocation } from "react-router-dom"
import Home from "./Home"
import SignIn from "./SignIn"
import SignUp from "./SignUp"
import {AnimatePresence} from 'framer-motion'


const AnimatedRoutes = () => {
    const location = useLocation()

    return(
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}> 
              <Route path="/" element={<Home/>}/>
              <Route path="/signup" element={<SignUp/>}/>
              <Route path='/signin' element={<SignIn/>}/>
            </Routes>
        </AnimatePresence>
    )
}
export default AnimatedRoutes