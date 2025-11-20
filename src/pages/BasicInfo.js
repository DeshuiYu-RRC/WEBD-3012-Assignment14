import React from 'react';
import { Card } from '../components/Card/Card';
import { Button } from '../components/Button/Button';
import { Text } from '../components/Text/Text';
import { basicInfo } from '../data/portfolioData';

function BasicInfo() {
  return (
    <section id="basic-info" className="section basic-info">
      <div className="container">
        <Text size="xl" weight="bold">
          About Me
        </Text>
        <div className="basic-info-content">
          <div className="profile-image">
            <div className="avatar">
              {basicInfo.name
                .split(' ')
                .map((n) => n.charAt(0))
                .join('')}
            </div>
          </div>
          <Card title={basicInfo.name}>
            <Text weight="bold">{basicInfo.title}</Text>
            <Text>{basicInfo.bio}</Text>
            <div className="contact-info">
              <Text size="small">{basicInfo.email}</Text>
              <Text size="small">{basicInfo.phone}</Text>
              <Text size="small">{basicInfo.location}</Text>
            </div>
            <div className="social-links">
              <Button
                variant="secondary"
                size="medium"
                onClick={() => window.open(basicInfo.github, '_blank')}
              >
                GitHub
              </Button>
              <Button
                variant="success"
                size="medium"
                onClick={() => window.open(basicInfo.linkedin, '_blank')}
              >
                LinkedIn
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default BasicInfo;
