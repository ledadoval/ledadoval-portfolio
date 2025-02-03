import React from 'react';

function Projects() {
  const projects = [
    {
      title: "communibus",
      description: "sistema web desenvolvido no 3º período do curso de análise e desenvolvimento de sistemas, onde ajuda o usuário a saber o horário do ônibus mais próximos a partir da sua geolocalização.",
      repolink: "https://github.com/ICEI-PUC-Minas-PSG-ADS-TI/TIAPLI-2023-2-CommuniBus",
      color: "red-500",
    },
    {
      title: "locaveiculos",
      description: "api desenvolvida em c# durante o 4º período do curso de análise e desenvolvimento de sistemas",
      repolink: "https://github.com/PSG-TADS/psg-tads-2024-1-back-bd-ledadoval",
      color: "blue-500",
    },
    {
      title: "plantbuddy",
      description: "projeto elaborada para um usuário saiba todas as informações sobre o plantio das plantas durante o 5ª período de análise e desenvolviment de sistemas",
      repolink: "#",
      color: "green-500",
    },
    {
      title: "lrburguer",
      description: "landing page feita utilizando html, css e javascript",
      repolink: "#",
      color: "blue-500",
    },
    {
      title: "atorf",
      description: "projeto de poo feito utilizando java para o gerenciamento de frotas de veiculos",
      repolink: "",
      color: "gray-500",
    },
    {
      title: "loading...",
      description: "waiting",
      repolink: null,
      color: "gray-500",
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
            style={{ borderColor: project.color }}
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
