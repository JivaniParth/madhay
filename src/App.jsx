import React from 'react';
import "./App.css";
import Header from "./components/Header and Footer/Header.jsx";
import Footer from "./components/Header and Footer/Footer.jsx";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
