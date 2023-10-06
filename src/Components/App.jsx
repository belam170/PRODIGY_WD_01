import React from 'react';
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import Navbar from './Nav';
import Home from './Home';
import Dishes from './Dishes';
import About from './About';
import Review from './Review';


function App() {
  return (
    <Router>
        <Navbar />
          <Routes>
          <Route path="/"  element={<Home/>} />
          <Route path="/dishes" element={<Dishes />} />
          <Route path="/about" element={<About />} />
          <Route path="/review" element={<Review />} />
          </Routes>
  
    </Router>
  );
}

export default App;
