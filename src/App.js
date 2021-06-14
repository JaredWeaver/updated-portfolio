import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { GlobalStyles } from './components/GlobalStyles';
import Navbar from './components/NavBar';
import Intro from './components/Intro';
import Projects from './components/Projects';
import Contact from './components/Contact';
// import Footer from './components/Footer';


const App = () => {
  return (
    // <Router>

    <>
      <GlobalStyles />
      <div>
        <Navbar />
        <Intro/>
        <Projects/>
        <Contact />
        {/* <Footer /> */}

      </div>
    </>

    // </Router>
  );
};

export default App;
