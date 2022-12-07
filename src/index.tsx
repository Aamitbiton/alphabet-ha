import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from "react-redux";
import store from "./store/store";
import reportWebVitals from './reportWebVitals';
import { createTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@mui/material";



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const theme = createTheme({
    palette: {
        primary: {
            main: "rgba(53, 154, 248, 0.62)"
        },
        secondary: {
            main: "rgba(63, 186, 5, 0.47)"
        },
        info:{
            main: '#9D9D9DFF'
        },
        warning:{
            main: '#ffffff'
        }

    }
});
root.render(
  <React.StrictMode>
      <Provider store={store}>
          <ThemeProvider theme={theme}>
              <App />
          </ThemeProvider>
      </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
