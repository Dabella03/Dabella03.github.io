import React from "react";
import Button from '@mui/material/Button';
import MailIcon from '@mui/icons-material/Mail';
import './firstPage.css';

function FirstPage(){
    return(
        <body>
        <div className="wrapper">
            {/* <h2>hello world</h2> */}
            {/* <h3>The Wedding of</h3>
            <h1>Yossi & Roffi</h1>
            <h3>20.11.23</h3>
            <Button variant="contained" startIcon={<MailIcon/>}
            className="custom-button">Open Invitation</Button> */}
            <div className="box">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>

        </div>
        </body>
    )
}

export default FirstPage;