// App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import LoginClient from "./pages/LoginClient";
import LoginDoctor from "./pages/LoginDoctor"
import ClientReg from "./pages/ClientReg";
import DoctorReg from "./pages/DoctorReg";
import Footer from './components/Footer';
import HomePage from "./components/HomePage";
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Navbar />
        <div className="app-container">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/register/client" element={<ClientReg />} />
            <Route path="/register/doctor" element={<DoctorReg />} />
            <Route path="/login/client" element={<LoginClient />} />
            <Route path="/login/doctor" element={<LoginDoctor/>} />

          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;







