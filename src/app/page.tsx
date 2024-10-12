import React from 'react';
import Header from "@/sections/Header";
import Footer from '@/sections/Footer';
import Hero from '@/sections/Hero';
import Faq from '@/sections/Faq';
import PhotoSlider from '@/sections/PhotoSlider';
import AboutSb from '@/sections/AboutSb';

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <PhotoSlider />
      <AboutSb/>
      <Faq/>
      <Footer />

      
    </>
  );
};

export default Home;
