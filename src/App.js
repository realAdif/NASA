import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './pages/Navbar';
import HomePage from './pages/HomePage'
import Mars from './pages/Mars';


import './styles/Homepage.scss'

function App() {
  return (
    <>
    
    <Router>
      <Routes>
        <Route path='/'
        element={<HomePage/>}
        />

        <Route path='/mars'
        element={<Mars/>}
        />
        
      </Routes>
    </Router>
    </>
  );
}

export default App;
