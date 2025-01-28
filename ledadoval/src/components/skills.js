import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import '../App.css';

function Skills(){
    return(
        <div className='skills-container'>
        <h2>my skills</h2>
        <h5>list of tools that I already use, or study on my projects</h5>
        <div className='skills-buttons'>
        <button>html</button>
        <button>css</button>
        <button>javascript</button>
        <button>react</button>
        <button>react native</button>
        <button>node js</button>
        <button>java</button>
        <button>c#</button>
        <button>mysql</button>
        <button>figma</button>
        <button>git</button>
        </div>
        </div>

    );
}

export default Skills;