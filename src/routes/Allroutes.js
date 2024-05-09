import { Routes, Route } from "react-router-dom";
import { Login, Register } from "../pages";

export const Allroutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};
