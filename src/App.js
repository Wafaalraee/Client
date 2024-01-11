// Import necessary modules
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState } from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import LoginClient from './pages/LoginClient';
import LoginDoctor from './pages/LoginDoctor';
import ClientReg from './pages/ClientReg';
import DoctorReg from './pages/DoctorReg';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import ClientDashBoard from './pages/ClientDashBoard';
import ProfilePage from './pages/ProfilePage';
import ClientHomePage from './pages/ClientHomePage';
import ClientAppointmentsPage from './pages/ClientAppointmentsPage';
import DoctorList from './pages/DoctorList';
import ClientNotifications from './pages/ClientNotifications';
import BookAppointment from "./pages/BookAppointment";
import DoctorDashBoard from './DoctorPages/DoctorDashBoard';
import DoctorHomePage from './DoctorPages/DoctorHomePage';
import DoctorNotifications from './DoctorPages/DoctorNotifications';
import Appointments from './DoctorPages/Appointments';
import DoctorProfile from './DoctorPages/DoctorProfile';
import Logout from './pages/Logout';
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
            <Route path="/login/doctor" element={<LoginDoctor />} />
            <Route path="/dashboard/client" element={<ClientDashBoard />} />
            <Route path="/dashboard/client/profile" element={<ProfilePage />} />
            <Route path="/dashboard/client/home" element={<ClientHomePage />} />
            <Route path="/dashboard/client/appointments" element={<ClientAppointmentsPage />} />
            <Route path="/dashboard/client/doctors" element={<DoctorList />} />
            <Route path="/dashboard/client/notifications" element={<ClientNotifications />} />
            <Route path="/dashboard/client/doctors/:id" element={<BookAppointment />} />
            <Route path="/dashboard/doctor" element={<DoctorDashBoard />} />
            <Route path="/dashboard/doctor/home" element={<DoctorHomePage />} />
            <Route path="/dashboard/doctor/notifications" element={<DoctorNotifications />} />
            <Route path="/dashboard/doctor/appointments" element={<Appointments />} />
            <Route path="/dashboard/doctor/profile" element={<DoctorProfile />} />
            <Route path="/dashboard/logout" element={<Logout />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

















