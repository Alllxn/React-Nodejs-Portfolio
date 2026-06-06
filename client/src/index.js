import React from 'react';
import ReactDOM from 'react-dom/client';
import ReactGA from 'react-ga4';
import './index.css';
import App from './App';

ReactGA.initialize('G-HGG7TNSY9C');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

// TODO: preguntar "analiza el proyecto y dime si necesito tener policita de cookies y de proteccion de datos, además analiza que mas hace falta a la web"
// TODO: policita de proteccion de datos
// TODO: politica de cookies