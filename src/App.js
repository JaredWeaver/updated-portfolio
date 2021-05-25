import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { ThemeProvider } from 'styled-components';
// import { useDarkMode } from './components/UseDarkMode';
import { GlobalStyles } from './components/GlobalStyles';
// import { lightTheme, darkTheme } from './components/Themes';
// import Toggle from './components/Toggle';
import Navbar from './components/NavBar'

const App = () => {
  // const [theme, themeToggler] = useDarkMode('light');
  // const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    // <Router>

    // <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />
        <div>
          <Navbar />
          {/* <Toggle theme={theme} toggleTheme={themeToggler} /> */}
        </div>
      </>
    // </ThemeProvider>

    // </Router>
  );
};

export default App;
