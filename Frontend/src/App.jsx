import React from "react";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Home } from "./pages/Home/Home";
import { About } from "./pages/About/About";
import { Academics } from "./pages/Academics/Academics";
import { Events } from "./pages/Events/Events";
import { Contacts } from "./pages/Contacts/Contacts";
import { Route, Routes } from "react-router-dom";

export const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/academics" element={<Academics />} />
        <Route path="/events" element={<Events />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
      <Footer />
    </div>
  );
};
