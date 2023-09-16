import React from "react";
import Button from '@mui/material/Button';
import MailIcon from '@mui/icons-material/Mail';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './firstPage.css';
import NAMA from './image/NAMA.png';
// import {useNavigate} from 'react-router-dom';

const theme = createTheme({
    palette: {
      brown: {
        main: '#C08960',
        light: '#D5A580',
        dark: '#AD7143',
        contrastText: '#fff',
      },
    },
  });

const FirstPage =()=>{
    // const navigate=useNavigate();
    // const handleButtonClick =()=>{
    //     navigate
    // }
    return(
        <ThemeProvider theme={theme}>
            <div className="banner">
                <img src={NAMA} alt="" className="coverimg" />
                <div className="content">
                    
                    <p>Kepada YTH.</p>
                    <p>Nama Tamu Undangan</p>
                </div>
                <Button variant="contained" startIcon={<MailIcon/>} size="large" color="brown"
                        className="custom-button">Open Invitation</Button>
            </div>
        {/* <div className="body">
            <div className="wrapper">
                <div className="box">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>

            </div>
            <div className="banner">
                <img src={NAMA} alt="" className="coverimg" />
                <div className="content">
                    
                    <p>Kepada YTH.</p>
                    <p>Nama Tamu Undangan</p>
                </div>
                <Button variant="contained" startIcon={<MailIcon/>} size="large" color="brown"
            className="custom-button">Open Invitation</Button>
            </div>
        </div> */}
    </ThemeProvider>
    )
}

export default FirstPage;