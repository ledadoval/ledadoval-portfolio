import React from 'react';

function Projects() {
  const projects = [
    {
      title: "communibus",
      description: "a web system developed in the 3rd semester of the Systems Analysis and Development course, helping users find the nearest bus schedules based on their geolocation.",
      repolink: "https://github.com/ICEI-PUC-Minas-PSG-ADS-TI/TIAPLI-2023-2-CommuniBus",
      color: " #4b0101",
    },
    {
      title: "locaveiculos",
      description: "an API developed in C# during the 4th semester of the Systems Analysis and Development course.",
      repolink: "https://github.com/PSG-TADS/psg-tads-2024-1-back-bd-ledadoval",
      color: " #4b0101",
    },
    {
      title: "plantbuddy",
      description: "a project developed in React Native to provide users with all the necessary information about plant cultivation, developed in the 5th semester of the Systems Analysis and Development course.",
      repolink: "#",
      color: " #4b0101",
    },
    {
      title: "lrburguer",
      description: "a landing page built using HTML, CSS, and JavaScript.",
      repolink: "#",
      color: " #4b0101",
    },
    {
      title: "atorf",
      description: "an OOP project developed in Java for vehicle fleet management.",
      repolink: "#",
      color: " #4b0101",
    },
    {
      title: "excusify",
      description: "a random excuse generator for missing an appointment.",
      repolink: null,
      color: "#6b7280",
    },
    {
      title: "loading...",
      description: "waiting",
      repolink: null,
      color: "#6b7280",
    },
  ];

  return (
    <div className="projects-content" id='projects'>
      <h2>projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div
            key={index}
            className="project-card"
            style={{  borderColor: project.color,
              borderStyle: 'solid',
              borderWidth: '2px'}}
          >
            <h3 style={{ color: project.color }}>{project.title}</h3>
            <p>{project.description}</p>
            {project.repolink ? (
              <a href={project.repolink} target="_blank" rel="noopener noreferrer">
                check the repo
              </a>
            ) : (
              <p className="disabled">soon...</p>
            )}
          </div>
        ))}
      </div>
    </div>

  );
}

export default Projects;
