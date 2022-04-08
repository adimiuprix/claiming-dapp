import React from 'react';
import './App.css';
import Logo from './components/Logo';
import ClaimBox from './components/ClaimBox';
import Footer from './components/Footer';
import {createTheme, ThemeProvider} from '@mui/material';
import {theme} from './theme/theme';


const App: React.FC = () => {

  return (
    <ThemeProvider theme={theme}>
      <div>
          <Logo />
          <ClaimBox />
          <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
