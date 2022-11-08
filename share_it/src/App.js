import Home from "./pages/home/Home"
import Login from "./pages/login/Login"
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import React, { Component } from 'react';

import './App.css';


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/Home" element={<Home />}></Route>
          {/* <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
      </Routes>
    </Router>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);