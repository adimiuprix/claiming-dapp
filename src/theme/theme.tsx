import {createTheme} from '@mui/material';

declare module '@mui/material/styles' {
  interface SimplePaletteColorOptions {
    bgcolor?: string;
  }
  interface ThemeOptions {
    boxWidth?: {
      main?: string;
    }
  }
}

export const theme = createTheme({
    palette: {
      primary: {
        main: '#edc681',
        light: '#585858',
        dark: '##0a0a0d',
        contrastText: '#edc681',
        bgcolor: '#30303c',
      },
      text: {
        primary: '#edc681',
      },
      background: {
        default: 'radial-gradient(circle, rgba(51,51,51,1) 0%, rgba(41,41,51,1) 35%, rgba(0,0,0,1) 100%)',
      },
    },
    typography: {
      body2: {
        fontWeight: 300,
      },
      h6: {
        fontWeight: 400,
      },
    },
    boxWidth: {
      main: '28%',
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            background: 'radial-gradient(circle, rgba(51,51,51,1) 0%, rgba(41,41,51,1) 35%, rgba(0,0,0,1) 100%)',
          }
        }
      }
    }
  })