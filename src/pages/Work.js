import React from 'react';
import { Card } from '../components/Card/Card';
import { Button } from '../components/Button/Button';
import { Text } from '../components/Text/Text';
import { Img } from '../components/Img/Img';
import { workProjects } from '../data/portfolioData';

function Work() {
  return (
    <section id="work" className="section work">
      <div className="container">
        <Text size="xl" weight="bold">
          My Projects
        </Text>

        <div className="projects-grid">
          {workProjects.map((project) => (
            <Card key={project.id} title={project.title}>
              <Img
                src={project.image}
                alt={project.title}
                borderRadius="medium"
              />

              <Text>{project.description}</Text>

              <div className="tech-list">
                {project.techList.map((tech, index) => (
                  <span key={index}>{tech}</span>
                ))}
              </div>

              <Button
                variant="primary"
                size="medium"
                onClick={() => window.open(project.link, '_blank')}
              >
                View on GitHub
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Work;
