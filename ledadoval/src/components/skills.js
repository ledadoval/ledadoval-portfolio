import React from 'react';
import '../App.css';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaWordpress, FaJava, FaPython } from 'react-icons/fa';
import { SiMysql, SiCsharp, SiFigma, SiPowerbi } from 'react-icons/si';
import { SiDotnet } from 'react-icons/si';

function Skills() {
  const skills = [
    { icon: <FaHtml5 size={40} />, color: "#e34c26", link: "https://developer.mozilla.org/en-US/docs/Glossary/HTML5" },
    { icon: <FaCss3Alt size={40} />, color: "#1572b6", link: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
    { icon: <FaJs size={40} />, color: "#f7df1e", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    { icon: <FaReact size={40} />, color: "#61dafb", link: "https://react.dev/" },
    { icon: <FaNodeJs size={40} />, color: "#339933", link: "https://nodejs.org/pt" },
    { icon: <SiDotnet size={40} />, color: "#239120", link: "https://learn.microsoft.com/en-us/dotnet/csharp/" },
    { icon: <SiMysql size={40} />, color: "#4479a1", link: "https://dev.mysql.com/doc/" },
    { icon: <SiFigma size={40} />, color: "#f24e1e", link: "https://help.figma.com/hc/en-us" },
    { icon: <FaWordpress size={40} />, color: "#21759b", link: "https://wordpress.com/" },
    { icon: <FaGitAlt size={40} />, color: "#f05032", link: "https://git-scm.com/doc" },
    { icon: <FaJava size={40} />, color: "#007396", link: "https://dev.java/" },
    { icon: <FaPython size={40} />, color: "#3776ab", link: "https://www.python.org/doc/" },
  ];

  return (
    <div className="skills-container" id="skills">
      <h2 className="skills-h2">my skills</h2>
      <h5>list of tools I use or study for my projects</h5>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <button
            key={index}
            className="skill-button"
            onClick={() => window.open(skill.link, "_blank")}
            style={{ borderColor: skill.color }}
          >
            <span style={{ color: skill.color }}>{skill.icon}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default Skills;
