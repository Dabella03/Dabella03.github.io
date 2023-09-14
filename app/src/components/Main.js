import React, { Component } from "react";
import './main.css';
import NAMA from './image/NAMA.png';
import Baskervville from './fonts/Baskervville-Regular.ttf';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const theme = createTheme({
    typography: {
      fontFamily: 'Baskervville, Serif',
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: `
          @font-face {
            font-family: 'Baskervville';
            font-style: normal;
            font-display: swap;
            font-weight: 400;
            src: local('Baskervville'), local('Baskervville-Regular'), url(${Baskervville}) format('ttf');
            unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
          }
        `,
      },
    },
  });

function Main(){
    return(
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className='main-section'>
            <div className="container">
            <img src={NAMA} alt="" className="gambar-animasi" />
            </div>
            <div className="tanggal">
                <p>save the date and join our sweet wedding</p>
                <h1>01.02.2021</h1>
                <h3>13.00-17.00 WIB</h3>
                <p style={{fontSize: "small"}}>(Akad 10.00 WIB)</p>
                <h4>Sindang Reret Hall, Bandung</h4>
                <br/>
                <p>RSVP</p>
                <h3>ryaalya.wed</h3>
            </div>
        </div>
    </ThemeProvider>
    )
}

export default Main;