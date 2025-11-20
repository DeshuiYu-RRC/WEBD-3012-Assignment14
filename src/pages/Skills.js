import React from 'react';
import { Card } from '../components/Card/Card';
import { Text } from '../components/Text/Text';
import { skills } from '../data/portfolioData';

function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="container">
        <Text size="xl" weight="bold">
          Skills & Technologies
        </Text>
        <Text>{skills.description}</Text>

        <div className="skills-grid">
          <Card title="Languages">
            <ul>
              {skills.languages.map((language, index) => (
                <li key={index}>
                  <Text size="small">{language}</Text>
                </li>
              ))}
            </ul>
          </Card>

          <Card title="Frameworks & Libraries">
            <ul>
              {skills.frameworks.map((framework, index) => (
                <li key={index}>
                  <Text size="small">{framework}</Text>
                </li>
              ))}
            </ul>
          </Card>

          <Card title="Tools & Technologies">
            <ul>
              {skills.tools.map((tool, index) => (
                <li key={index}>
                  <Text size="small">{tool}</Text>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default Skills;
