// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import AOS from 'aos';
import Home from "../src/components/Home";
import Skills from './components/Skills';
import Header from './components/Header';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1500, 
      once: true, 
    });
  }, []); 
  
  return (
    <> 
      <Header />
      <main className='bg-gray-100'>
        {/* <Routes>
          <Route path="/" element={<Home />} />
        </Routes> */}

        <Home />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </>
  )
}

export default App;
