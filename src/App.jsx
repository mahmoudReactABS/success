import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import MainLayout from './MainLayout';
import Home from './Pages/Home';
import About from './Pages/About';
import Services from './Pages/Services';
import Clients from './Pages/Clients';
import ContactUs from './Pages/ContactUs';
import SingleService from './Pages/singleService'; 
import Error from './Components/Error';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="client" element={<Clients />} /> 
          <Route path="contacts" element={<ContactUs />} />
          <Route path="service/:name" element={<SingleService />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
