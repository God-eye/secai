import React from 'react';
import BannerHeader from "./components/BannerHeader";
import BannerAbout from './components/BannerAbout';
import Services from "./components/Services";
import Demo from './components/Demo';
import Skills from './components/Skills';
import Testimonials from './components/Testimonials';
// import Clients from './components/Clients';
// import Contact from './components/Contact';
import UserGuide from './components/UserGuide';

import Footer from './components/Footer';

export const Home = () => (
  <div className="body_wrapper">
    {/* <Navbar mainlogo="earth-logo.png" stickylogo="earth-logo.png"/> */}
    <BannerHeader/>
    <BannerAbout/>
    <UserGuide />
    <Services/>
    <Demo/>
    <Skills/>
    <Testimonials/>
    {/* <Clients/> */}
    {/* <Contact/> */}
    <Footer/>
  </div>
)
