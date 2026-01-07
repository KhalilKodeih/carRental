// src/App.js

// import Sayara from "./sayara";

import { Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

import Home from "./pages/home";
import Cars from "./pages/carListing";
import CarDetails from "./pages/carDetails";
import Login from "./pages/login";
import Register from "./pages/Register";
import LandPage from "./pages/LandPage";

function App() {
  return (
    <div className="app">
      {/* Navbar on all pages */}
      <NavBar />

      <Routes>
        {/* If you want Home instead of LandPage on /, swap them */}
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<LandPage />} />

        <Route path="/cars" element={<Cars />} />
        <Route path="/cars/:id" element={<CarDetails />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>

      {/* Footer on all pages */}
      <Footer />
    </div>
  );
}

export default App;
