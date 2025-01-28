import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import AboutMe from './aboutme';

function Content(){
    return(
        <div className='' id='intro'>
            <h5>hi, I'm</h5>
            <h1>Lêda do Val</h1>
            <p>front-end developer learning about data science</p>
            <button onClick={AboutMe}>about me</button> <button>contact</button>
        </div>
    );
}

export default Content;