import React from 'react';
import AboutMe from './aboutme';

function Content(){   
    return(
        <div className='content-div' id='intro'>
            <h5>hi, I'm</h5>
            <h1>Lêda do Val</h1>
            <p>a developer learning about data science</p>
            <div className='button-content'> 
                <a href='#aboutme'>

            <button onClick={AboutMe}>about me</button> 
                </a>
            <a href='mailto:ledadoval2002@gmail.com'>
            <button>contact</button>
            </a>
            </div>
        </div>
    );
}

export default Content;