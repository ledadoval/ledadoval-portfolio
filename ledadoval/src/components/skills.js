import React from 'react';
import '../App.css';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaWordpress, FaJava, FaPython } from 'react-icons/fa';
import { SiMysql, SiCsharp, SiFigma, SiPowerbi } from 'react-icons/si';
import { SiDotnet } from 'react-icons/si'; // Exemplo de substituição para C#
import { SiMicrosoftpowerpoint } from 'react-icons/si'; // Caso não encontre Power BI, use algo próximo


function Skills(){
    return(
        <div className='skills-container' id='skills'>
        <h2 className='skills-h2'>my skills</h2>
        <h5>list of tools that I already use, or study on my projects</h5>
        <div className='skills-buttons'>
        <button onClick={() => window.open('https://developer.mozilla.org/en-US/docs/Glossary/HTML5')}>
          <FaHtml5 size={32} color="#e34c26" />
        </button>
        <button onClick={() => window.open('https://developer.mozilla.org/en-US/docs/Web/CSS')}>
          <FaCss3Alt size={32} color="#1572b6" />
        </button>
        <button onClick={() => window.open('https://developer.mozilla.org/en-US/docs/Web/JavaScript')}>
          <FaJs size={32} color="#f7df1e" />
        </button>
        <button onClick={() => window.open('https://react.dev/')}>
          <FaReact size={32} color="#61dafb" />
        </button>
        <button onClick={() => window.open('https://reactnative.dev/')}>
          <FaReact size={32} color="#61dafb" />
        </button>
        <button onClick={() => window.open('https://nodejs.org/pt')}>
          <FaNodeJs size={32} color="#339933" />
        </button>
        <button onClick={() => window.open('https://learn.microsoft.com/en-us/dotnet/csharp/')}>
          <SiDotnet size={32} color="#239120" />
        </button>
        <button onClick={() => window.open('https://dev.mysql.com/doc/')}>
          <SiMysql size={32} color="#4479a1" />
        </button>
        <button onClick={() => window.open('https://help.figma.com/hc/en-us')}>
          <SiFigma size={32} color="#f24e1e" />
        </button>
        <button onClick={() => window.open('https://wordpress.com/')}>
          <FaWordpress size={32} color="#21759b" />
        </button>
        <button onClick={() => window.open('https://git-scm.com/doc')}>
          <FaGitAlt size={32} color="#f05032" />
        </button>
        <button onClick={() => window.open('https://dev.java/')}>
          <FaJava size={32} color="#007396" />
        </button>
        <button onClick={() => window.open('https://learn.microsoft.com/en-us/power-bi/')}>
        </button>
        <button onClick={() => window.open('https://www.python.org/doc/')}>
          <FaPython size={32} color="#3776ab" />
        </button>
        </div>
        </div>

    );
}

export default Skills;