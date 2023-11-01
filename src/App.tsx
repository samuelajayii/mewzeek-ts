import React from 'react';
import './App.css';
import { Routes, Route} from 'react-router-dom'
import { motion } from 'framer-motion';
import Home from './components/Home';
import SignIn from './components/SignIn';
import { AnimatePresence } from 'framer-motion';
import SignUp from './components/SignUp';


function App() {
  return (
    <motion.div>
      <AnimatePresence>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/signin" element={<SignIn/>}/>
          <Route path='/signup' element={<SignUp/>}/>
        </Routes>
      </AnimatePresence>
      
    </motion.div>
      
  );
}

export default App;
//https://dribbble.com/shots/13993146-Ghost-Sign-In