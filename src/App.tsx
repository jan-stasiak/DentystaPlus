import React from 'react';
import './App.css';
import { Link, Route, Routes, useLocation } from "react-router-dom";
import CSS from 'csstype'

import { Navbar } from "./containers";
import { Login, Signup, Aboutus } from "./components";



const App = () => {
  return (
    <div className="flex fixed">
      <div>
        <div className="bg-gradient-to-br from-blue-600 to-gray-900">
          <Navbar />
        </div>

        <div className=''>
          <Routes>
            <Route path="/" element={<Aboutus />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
