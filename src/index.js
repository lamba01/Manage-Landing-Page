import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ThemeProvider, createTheme, GlobalStyles, CssBaseline } from '@mui/material';
import '@fontsource/be-vietnam-pro';

const theme = createTheme({
  // color palette
  palette: {
    primary: {
      main: "hsl(12, 88%, 59%)",
    },
  },
  // typography
  typography: {
    myHeader: {
      color: 'hsl(228, 39%, 23%)',
      fontSize: '50px',
      fontWeight: '700', 
      margin: 0,
    },
    myParagraph: {
      color: 'hsl(227, 12%, 61%)',
      fontSize: '16px',
      fontWeight: '600',
    },
  },
    
})



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <CssBaseline />
    <GlobalStyles
        styles={{
          '*': {
            fontFamily: '"Be Vietnam Pro", sans-serif',
          },
        }}
      />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

