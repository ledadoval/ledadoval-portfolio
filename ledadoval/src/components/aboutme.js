import React from 'react';
import ledaimgae from '../assets/leda-do-val-ai.png';
import Skills from './skills';

function AboutMe() {
    return (
        <div className='aboutme-class' id='aboutme'>
            <img src={ledaimgae} />
            <p>I am a 22-year-old developer who found my passion for programming while studying Materials Engineering. 
                My first contact with coding came through elective courses, and I soon realized it was the path I wanted to pursue. 
                Throughout my studies, I explored different areas and developed a strong interest in frontend development. 
                With experience in marketing, I also understand and apply SEO techniques to enhance digital projects. 
                I have a degree in Systems Analysis and Development and am currently pursuing a bachelor's degree in 
                Information Systems. Now, I am expanding my skills in data science and machine learning.
                <div className='button-aboutme'>
                    <a href='#skills'>
                        <button>check my skills</button>
                    </a>
                </div>
            </p>
        </div>
    );
}

export default AboutMe;