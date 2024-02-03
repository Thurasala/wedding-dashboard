import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import SignUp from "./components/SignUp/SignUp";
import SignIn from "./components/SignIn/SignIn";
import VerifyUser from "./components/VerifyUser/VerifyUser";
import Password from "./components/Password/Password";
import DashboardPage from "./components/DashBoard/DashboardPage ";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/verify" element={<VerifyUser />} />
        <Route path="/password" element={<Password />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        
      </Routes>
    </Router>
  );
}

export default App;
