import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion';
import AnimatedRoutes from './components/AnimatedRoutes';

function App() {

  return (
    <Router>
        <AnimatePresence>
          <AnimatedRoutes/>
      </AnimatePresence>
    </Router>
    
  );
}

export default App;
//https://dribbble.com/shots/13993146-Ghost-Sign-In