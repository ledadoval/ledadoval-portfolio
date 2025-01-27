import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import ledaimgae from '../assets/leda-do-val-ai.png';

function AboutMe() {
    return (
        <div id='aboutme'>
            <h2>about me</h2>
            <img src={ledaimgae} />
            <p>Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsum lorem ipsumlorem ipsum lorem ipsumlorem ipsum lorem ipsumlorem ipsum lorem ipsumlorem ipsum lorem ipsumlorem ipsum lorem ipsum </p>
        </div>
    );
}

export default AboutMe;