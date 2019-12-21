import React from 'react';
import './App.css';
import 'typeface-roboto';
import WishListApp from "./components/WishListApp";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { green } from "@material-ui/core/colors";

function App() {
  const theme = createMuiTheme({
    palette: {
      primary: green
    }
  });

  return (
    <MuiThemeProvider theme={theme}>
      <WishListApp />
    </MuiThemeProvider>
  );
}

export default App;