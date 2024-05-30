import { Routes, Route } from "react-router-dom";
import { Login, Register } from "../pages";
import Home from '../pages/Home';

export const Allroutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
};
