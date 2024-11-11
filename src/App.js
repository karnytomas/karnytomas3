import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import SectionOne from './components/SectionOne';
import Footer from './components/Footer';
import './App.css';
import './Test.css';
import Home from './pages/Home';
import Web from './pages/Web';
import Grafic from './pages/Grafic';
import Marketing from './pages/Marketing';
import Reference from './pages/Reference';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  const location = useLocation();

  const pages = [
    { path: '/', titleFirst: 'Moře možností', titleSecond: 'budeme vás navigovat!' },
    { path: '/web', titleFirst: 'WEBOVÝ VÝVOJ', titleSecond: 'VÁM NA MÍRU.' },
    { path: '/grafic', titleFirst: 'GRAFICKÝ DESIGN', titleSecond: 'VÁM NA MÍRU.' },
    { path: '/marketing', titleFirst: 'DIGITÁLNÍ MARKETING', titleSecond: 'VÁM NA MÍRU.' },
    { path: '/reference', titleFirst: 'ŘEŠENÍ PRO', titleSecond: 'VAŠE PODNIKÁNÍ.' },
    { path: '/o-nas', titleFirst: 'NÁŠ SEN', titleSecond: 'VÁŠ ÚSPĚCH.' },
    { path: '/kontakt', titleFirst: '', titleSecond: 'SPOJME SE' }
  ];

  const currentPage = pages.find(page => page.path === location.pathname) || pages[0];

  return (
    <>
      <Header />
      <SectionOne titleFirst={currentPage.titleFirst} titleSecond={currentPage.titleSecond} location={location} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/web" element={<Web />} />
        <Route path="/grafic" element={<Grafic />} />
        <Route path="/marketing" element={<Marketing />} />
        <Route path="/reference" element={<Reference />} />
        <Route path="/o-nas" element={<About />} />
        <Route path="/kontakt" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
