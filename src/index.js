import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import { ThemeProvider } from "@material-ui/styles";
import { CssBaseline } from "@material-ui/core";

import Themes from "./themes";
import App from './components/App/App';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import { LayoutProvider } from "./context/LayoutContext";
import { UserProvider } from "./context/UserContext";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

{/* <LayoutProvider>
<UserProvider>
  <ThemeProvider theme={Themes.default}>
    <CssBaseline />
    <App />
  </ThemeProvider>
</UserProvider>
</LayoutProvider> */}
