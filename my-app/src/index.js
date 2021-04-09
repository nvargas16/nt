import React from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Projects from './pages/Projects/Projects';
import Contact from './pages/Contact/Contact';
import Nav from './Components/Nav/Nav';
import NavBar from './NavBar';
import Shapes from './Components/Shapes/Shapes';


ReactDOM.render(
  <React.StrictMode>
    <NavBar />
  </React.StrictMode>,
  document.getElementById('root')
);



