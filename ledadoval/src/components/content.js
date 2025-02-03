import React from 'react';
import AboutMe from './aboutme';

function Content(){   
    return(
        <div className='content-div' id='intro'>
            <h5>hi, I'm</h5>
            <h1>Lêda do Val</h1>
            <p>front-end developer learning about data science</p>
            <div className='button-content'> 
            <button onClick={AboutMe}>about me</button> <button>contact</button>
            </div>
        </div>
    );
}

export default Content;