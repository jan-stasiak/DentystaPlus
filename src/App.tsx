import React from 'react';
import './App.css';

import { Navbar } from "./containers";
import { Login, Signup, Aboutus } from "./components";

function App() {
  return (
    <>
      <Navbar />
      <Aboutus />
    </>
  );
}

export default App;
