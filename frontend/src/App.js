import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "./components/ui/toaster";

// Components
import Header from "./components/Header";
import Hero from "./components/Hero";
import PlotDetails from "./components/PlotDetails";
import Amenities from "./components/Amenities";
import LocationAdvantages from "./components/LocationAdvantages";
import Testimonials from "./components/Testimonials";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <PlotDetails />
      <Amenities />
      <LocationAdvantages />
      <Testimonials />
      <ContactForm />
      <Footer />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
      <Toaster />
    </div>
  );
}

export default App;