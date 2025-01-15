import React from 'react';
import './App.css'
import Header from './components/Header';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Support from './components/Support';
import Footer from './components/Footer';


const App = () => {

  return (
    <div className="App">
      <Header />
      <Features />
      <Pricing />
      <Testimonials />
      <FAQ />
      <Support />
      <Footer />
    </div>
  )
};

      export default App;
