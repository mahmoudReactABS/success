import React from 'react';
import { Outlet } from 'react-router';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import { TranslationProvider } from './translationContext';


const MainLayout = () => {
  return (
    <main className='w-100 overflow-x-hidden'>
      <TranslationProvider>
        <NavBar />
        <Outlet />
        <Footer />
      </TranslationProvider>
    </main>
  );
};

export default MainLayout;
