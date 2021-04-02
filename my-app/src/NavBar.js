import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
  import Home from './pages/Home/Home';
  import About from './pages/About/About';
  import Projects from './pages/Projects/Projects';
  import Contact from './pages/Contact/Contact';
  import Nav from './Components/Nav/Nav';

  export default function NavBar(){
      return(
          <Router>

              {/* Nav is placed in between Router and Switch, because we want it to be present in all pages */}
              <Nav />
              
              <Switch>
              {/* Switch renders a route and route is used to check if the path matches*/}

                  <Route path= "/">
                      <Home />
                  </Route>
                  <Route path= "/About">
                      <About />
                  </Route>
                  <Route path= "/Projects">
                      <Projects />
                  </Route>
                  <Route path= "/Contact">
                      <Contact />
                  </Route>

              </Switch>

          </Router>
      )
  }