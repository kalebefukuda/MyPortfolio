import logo from './logo.svg';
import './App.css';
import Header from './compenents/header/Header';
import Home from './compenents/home/Home';

function App() {
  return (
    <>
      <Header />

      <main className='main'>
        <Home />
      </main>
    </>
  );
}

export default App;
