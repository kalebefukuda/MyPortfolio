import './App.css';
import Header from './compenents/header/Header';
import Home from './compenents/home/Home';
import About from './compenents/about/About';
import Skills from './compenents/skills/Skills';
import Services from './compenents/services/Services';
import Qualification from './compenents/qualification/Qualification';
import Work from './compenents/work/Work';
import Testimonials from './compenents/testimonials/Testimonials';
import Contact from './compenents/contact/Contact';
import Footer from './compenents/footer/Footer';
import ScrollUp from './compenents/scrollup/ScrollUp';
import Certificate from './compenents/certificate/Certificate';


function App() {
  return (
    <>
      <Header />

      <main className='main'>
        <Home />
        <About />
        <Skills />
        <Services />
        <Qualification />
        <Certificate />
        <Work />
        <Testimonials />
        <Contact />
        
      </main>

      <Footer />
      <ScrollUp />
    </>
  );
}

export default App;
