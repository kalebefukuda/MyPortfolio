import logo from './logo.svg';
import './App.css';
import Header from './compenents/header/Header';
import Home from './compenents/home/Home';
import About from './compenents/about/About';
import Skills from './compenents/skills/Skills';


function App() {
  return (
    <>
      <Header />

      <main className='main'>
        <Home />
        <About />
        <Skills />
      </main>
    </>
  );
}

export default App;
