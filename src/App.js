import './App.css';
import Header from './compenents/header/Header';
import Home from './compenents/home/Home';
import About from './compenents/about/About';
import Skills from './compenents/skills/Skills';
import Services from './compenents/services/Services';
import Qualification from './compenents/qualification/Qualification';


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
      </main>
    </>
  );
}

export default App;
