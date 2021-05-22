import React from "react";

// Local Modules
import TimeLineSkeleton from "../../Components/TimeLineSkeleton";
import {
  Container,
  ProjectsHeader,
  ProjectsContainer,
  ProjectsList,
  ProjectCard,
  ProjectImage,
  ProjectNameText,
} from "./styles";

// Image Modules
import vidaSaude from "../../images/projects/clinica-vida-saude.png";
import ieqApp from "../../images/projects/ieq-app.png";

function Projects() {
  return (
    <Container>
      <ProjectsHeader>Projetos</ProjectsHeader>
      <ProjectsContainer>
        <ProjectsList>
          {/* Clínica Vida e Saúde */}
          <ProjectCard top={0} animateIn="animate__bounceInLeft">
            <ProjectImage src={vidaSaude} marginBottom={"-50px"} />
            <ProjectNameText>
              Site
              <br />
              Clínica Vida e Saúde
            </ProjectNameText>
          </ProjectCard>
        </ProjectsList>

        <TimeLineSkeleton nodes={2} />

        <ProjectsList>
          {/* Ieq App */}
          <ProjectCard bottom={0} animateIn="animate__bounceInUp">
            <ProjectNameText>
              App
              <br />
              Ieq Iguaí Bahia
            </ProjectNameText>
            <ProjectImage src={ieqApp} />
          </ProjectCard>
        </ProjectsList>
      </ProjectsContainer>
    </Container>
  );
}

export default Projects;
