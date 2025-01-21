import React from 'react';
import { Outlet } from 'react-router';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import { TranslationProvider } from './translationContext';


const MainLayout = () => {
  return (
    <TranslationProvider>
      <NavBar/>
      <Outlet />
      <Footer />
    </TranslationProvider>
  );
};

export default MainLayout;
