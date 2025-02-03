import React from 'react';
import '../App.css';

function Skills(){
    return(
        <div className='skills-container'>
        <h2 className='skills-h2'>my skills</h2>
        <h5>list of tools that I already use, or study on my projects</h5>
        <div className='skills-buttons'>
        <button onClick={() => window.open('https://developer.mozilla.org/en-US/docs/Glossary/HTML5')}>html</button>
        <button onClick={() => window.open('https://developer.mozilla.org/en-US/docs/Web/CSS')}>css</button>
        <button onClick={() => window.open('https://developer.mozilla.org/en-US/docs/Web/JavaScript')}>javascript</button>
        <button onClick={() => window.open('https://react.dev/')}>react</button>
        <button onClick={() => window.open('https://reactnative.dev/')}>react native</button>
        <button onClick={() => window.open('https://nodejs.org/pt')}>node js</button>
        <button onClick={() => window.open('https://learn.microsoft.com/en-us/dotnet/csharp/')}>c#</button>
        <button onClick={() => window.open('https://dev.mysql.com/doc/')}>mysql</button>
        <button onClick={() => window.open('https://help.figma.com/hc/en-us')}>figma</button>
        <button onClick={() => window.open('https://git-scm.com/doc')}>git</button>
        <button onClick={() => window.open('https://dev.java/')}>java</button>
        <button onClick={() => window.open('https://learn.microsoft.com/en-us/power-bi/')}>power bi</button>
        <button onClick={() => window.open('https://www.python.org/doc/')}>python</button>
        </div>
        </div>

    );
}

export default Skills;