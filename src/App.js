import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from 'react';
import Navbar from './components/Navbar';
import LoginPage from "./pages/LoginPage";
import ClientReg from "./pages/ClientReg";
import DoctorReg from "./pages/DoctorReg";
import Footer from './components/Footer'
import HomePage from "./components/HomePage";
import './App.css';


const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
        <Route path="/" element={<HomePage/>} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register/client" element={<ClientReg />} />
          <Route path="/register/doctor" element={<DoctorReg />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;






