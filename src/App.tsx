import React from 'react';
import './App.css';
import Logo from './components/Logo';
import ClaimBox from './components/ClaimBox';
import Footer from './components/Footer';
import {createTheme, ThemeProvider} from '@mui/material';
import {theme} from './theme/theme';
import { Box } from '@mui/system';


const App: React.FC = () => {

  return (
    <ThemeProvider theme={theme}>
      <Box>
          <Logo />
          <ClaimBox />
          <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;
