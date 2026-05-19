import React from "react";
import "./App.css";
import Nav from './PortfolioContainer/Nav/Nav';
import Home from './PortfolioContainer/Home/Home';
import About from './PortfolioContainer/About/About';
import Work from './PortfolioContainer/Work/Work';
import Contact from './PortfolioContainer/Contact/Contact';
import Timeline from './PortfolioContainer/Timeline/Timeline';
import Footer from './PortfolioContainer/Footer/Footer';
import { LanguageProvider } from './context/LanguageContext';
import { ThemeProvider } from './context/ThemeContext';
import './assets/fontawesome';

function App() {
  return (
    <ThemeProvider>
    <LanguageProvider>
      <div className="App" id="App">
        <Nav/>
        <Home/>
          <main>
            <About/>
            <Timeline/>
            <Work/>
            <Contact/>
          </main>
          <Footer/>
      </div>
    </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;