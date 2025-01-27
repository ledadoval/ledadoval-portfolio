import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import Box from '@mui/material/Box';

function Projects(){

    const cardProjects = [
        {
          title: "communibus",
          description:
            "sistema web desenvolvido no 3º período do curso de análise e desenvolvimento de sistemas, onde ajuda o usuário a saber o horário do ônibus mais próximos a partir da sua geolocalização.",
          image: "sistema web desenvolvido no 3º período do curso de análise e desenvolvimento de sistemas, onde ajuda o usuário a saber o horário do ônibus mais próximos a partir da sua geolocalização.",
          repolink: "https://github.com/ICEI-PUC-Minas-PSG-ADS-TI/TIAPLI-2023-2-CommuniBus",
        },
        {
          title: "lr burguer",
          description:
            "landing page desenvolvida para uma hamburgueria",
          image: "",
        },
        {
          title: "locaveiculos",
          description:
            "api desenvolvida em c#",
          image: "",
          repolink: "https://github.com/PSG-TADS/psg-tads-2024-1-back-bd-ledadoval",
        },
        {
          title: "plant buddy",
          description:
            "projeto elaborada para um usuário saiba todas as informações sobre o plantio das plantas",
          image: "",
          repolink: "https://github.com/ICEI-PUC-Minas-PSG-ADS-TI/psg-ads-2024-2-p7-proj-tidai-t1-plant-buddy",
        },
        {
          title: "portal games",
          description:
            "portal de jogos desenvolvido no 1º período de ads, onde o intuito era elaborar uma página usando html, css e javascript e utilizar a api raw",
          image: "",
          repolink: "https://github.com/ledadoval/DIW-Portal-de-Games",
        },
      ];
      

    return(
        <div id='projects'>

        <h2>personal projects</h2>
        <h5>here's a list of some projects that I alredy did during my journey of coding</h5>

        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      {cardProjects.map((card, index) => (
        <Card key={index} sx={{ display: "flex", alignItems: "center", p: 2 }}>
          <CardMedia
            component="img"
            sx={{ width: 150, height: 150, borderRadius: 2, mr: 2 }}
            image={card.image}
            alt={card.title}
          />
          <Box sx={{ flex: 1 }}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {card.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {card.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" color="primary" onClick={() => window.open(card.repolink, "_blank")}>
                repositorie
              </Button>
              <Button size="small" color="secondary">
                Learn More
              </Button>
            </CardActions>
          </Box>
        </Card>
      ))}
    </Box>
        </div>

        
    );
}

export default Projects;