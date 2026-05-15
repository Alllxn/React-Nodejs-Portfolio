import React from "react";
import "./App.css";
import Nav from './PortfolioContainer/Nav/Nav';
import Home from './PortfolioContainer/Home/Home';
import About from './PortfolioContainer/About/About';
import Work from './PortfolioContainer/Work/Work';
import Contact from './PortfolioContainer/Contact/Contact';
import Timeline from './PortfolioContainer/Timeline/Timeline';
import Footer from './PortfolioContainer/Footer/Footer';
import './assets/fontawesome';

function App() {
  // const [data, setData] = React.useState(null);
  // React.useEffect(() => {
  //   fetch("/api")
  //     .then((res) => res.json())
  //     .then((data) => setData(data.message))
  //     .then(() => {
  //       console.log(data);
  //     })
  // }, []);
  return (
    // TODO: Crear funcionalidad cambio de idioma
    // TODO: Crear funcionalidad de cambio de color del fondo
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
  );
}

export default App;