import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { GlobalStyles } from './components/GlobalStyles';
import Navbar from './components/NavBar';
import Intro from './components/Intro';
import Projects from './components/Projects';

const App = () => {
  return (
    // <Router>

    <>
      <GlobalStyles />
      <div>
        <Navbar />
        <Intro/>
        <Projects/>
      </div>
    </>

    // </Router>
  );
};

export default App;
