import React, { useState } from 'react'
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Route, Routes, Switch } from 'react-router-dom'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Home from "../src/components/pages/Home"
import About from "../src/components/pages/About"
import Contact from './components/pages/Contact';
import Navbar from './components/Layout/Navbar';
import NotFound from './components/pages/NotFound';
import AddUsers from './components/users/AddUser';

function App() {


  return (
    <BrowserRouter>
      <div className="container">
        {/* <h1>Hello react</h1> */}

        <Navbar />
        <Routes>


          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />}></Route>
          <Route path="/users/add" element={<AddUsers />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
