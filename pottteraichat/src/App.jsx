import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import { Box, Container } from "@mui/system";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import GoogleLogin from "./components/Login/GoogleLogin";
import Profile from "./components/Login/Profile";
function App() {
  return (
    //  <>
    //  <Sidebar/>
    //  <Main/>
    //  </>
    <Router>
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/gg" element={<GoogleLogin />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
