import React from 'react';
import { Button } from '../components/Button/Button';
import { Text } from '../components/Text/Text';

function Header() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="header">
      <div className="header-content">
        <Text size="xl" weight="bold">
          Deshui Yu - Portfolio
        </Text>
        <nav className="nav">
          <Button
            variant="primary"
            size="medium"
            onClick={() => scrollToSection('basic-info')}
          >
            About
          </Button>
          <Button
            variant="primary"
            size="medium"
            onClick={() => scrollToSection('work')}
          >
            Projects
          </Button>
          <Button
            variant="primary"
            size="medium"
            onClick={() => scrollToSection('skills')}
          >
            Skills
          </Button>
          <Button
            variant="primary"
            size="medium"
            onClick={() => scrollToSection('resources')}
          >
            Resources
          </Button>
          <Button
            variant="primary"
            size="medium"
            onClick={() => scrollToSection('dev-setup')}
          >
            Setup
          </Button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
