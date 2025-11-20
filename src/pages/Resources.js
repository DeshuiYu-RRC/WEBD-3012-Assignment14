import React from 'react';
import { Card } from '../components/Card/Card';
import { Button } from '../components/Button/Button';
import { Text } from '../components/Text/Text';
import { Img } from '../components/Img/Img';
import { resources } from '../data/portfolioData';

function Resources() {
  return (
    <section id="resources" className="section resources">
      <div className="container">
        <Text size="xl" weight="bold">
          Learning Resources
        </Text>
        <div className="resources-grid">
          {resources.map((resource) => (
            <Card key={resource.id} title={resource.title}>
              <div className="resource-icon">
                <Img
                  src={resource.icon}
                  alt={resource.title}
                  width="64px"
                  height="64px"
                />
              </div>
              <Text>{resource.summary}</Text>
              <Button
                variant="secondary"
                size="medium"
                onClick={() => window.open(resource.link, '_blank')}
              >
                Visit Resource →
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Resources;
