import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@material-ui/core';
import { createTheme } from '@material-ui/core';
import App from './App';

let theme = createTheme({
  palette: {
    primary: {
      main: '#131a22',
    },
    secondary: {
      main: '#131f33',
    },
  },
});

console.log({theme});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
