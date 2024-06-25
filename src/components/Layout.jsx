import { CssBaseline, ThemeProvider ,createTheme } from '@mui/material'
import { lightBlue } from '@mui/material/colors';
import React from 'react'
import Header from './Header';
import Home from '../pages/Home';
import { Outlet } from 'react-router-dom';


const theme = createTheme({
    palette: {
      mode: 'light',
    },
  });

export default function Layout() {
  return (
    <ThemeProvider theme={theme}>
        <CssBaseline></CssBaseline>
        <Header></Header>
        <main>
            <Outlet></Outlet>
        </main>
   
        <footer></footer>
    </ThemeProvider>
    
  )
}
