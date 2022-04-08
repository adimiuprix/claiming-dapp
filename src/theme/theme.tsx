import {createTheme} from '@mui/material';

export const theme = createTheme({
    palette: {
      primary: {
        main: '#edc681',
        light: '#585858',
        dark: '##0a0a0d',
        contrastText: '#edc681',
      },
      text: {
        primary: '#edc681',
      },
    },
    typography: {
      body2: {
        fontWeight: 300,
      },
      h6: {
        fontWeight: 400,
      }
    }
  })