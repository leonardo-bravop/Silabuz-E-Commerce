import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home";
import SignUp from "components/SignUp";
import Login from "components/Login";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
  );
}

export default App;
