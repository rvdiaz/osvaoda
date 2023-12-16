import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { persistor, store } from './Store/Store';
import { PersistGate } from 'redux-persist/integration/react';
import { Main } from './Components/ui/Main';
import { themePalette } from './Core/core';

function App() {
  
  const theme=createTheme({
    palette: themePalette
});

  const theme1 = createTheme({
    palette: {
      primary: {
        main: '#e7ac2c'
      },
      secondary: {
        main: '#fff'
      },
      dark: {
        main: '#000000b8'
      },
      lessDark: {
        main: '#00000036'
      },
      solidDark: {
        main:'#000'
      },
      lessGray:{
        main:'#f6f6f6'
      },
      green:{
        main:'#01a884'
      }
    }
  });

  return (
    <>
    <Provider store={store}>
      <PersistGate loading={'loading'} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <Main/>
          </BrowserRouter>
        </ThemeProvider>
      </PersistGate>
     </Provider>
    </>
  );
}

export default App;
