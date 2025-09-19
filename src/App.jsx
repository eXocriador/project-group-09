import React from 'react';
import './assets/fonts/stylesheet.css';
import './css/styles.css';
import Header from './components/Header/Header.jsx';
import Hero from './components/Hero/Hero.jsx';
import AboutUs from './components/AboutUs/AboutUs.jsx';
import Catalog from './components/Catalog/Catalog.jsx';
import ChooseSection from './components/ChooseSection/ChooseSection.jsx';
import Sale from './components/Sale/Sale.jsx';
import Reviews from './components/Reviews/Reviews.jsx';
import ContactUs from './components/ContactUs/ContactUs.jsx';
import Footer from './components/Footer/Footer.jsx';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AboutUs />
        <Catalog />
        <ChooseSection />
        <Sale />
        <Reviews />
        <ContactUs />
      </main>
      <Footer />
    </>
  );
}
