import {Route,Routes} from "react-router-dom"
import './App.css';
import Home from "./routes/Home";
import About from "./routes/About";
import Service from "./routes/Service";
import Contact from "./routes/Contact";
import Navbar from "./components/Navbar";
import React from 'react';
import Signup from "./components/Signup";
import Login from "./components/Login";
import Details from "./components/Details";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/service" element={<Service/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/details" element={<Details/>} />


      </Routes>
      {/* <Navbar/> */}
      {/* <Signup/> */}
    </div>
  );
}

export default App;
