import React from 'react';
import { Card } from '../components/Card/Card';
import { Text } from '../components/Text/Text';
import { developerSetup } from '../data/portfolioData';

function DeveloperSetup() {
  return (
    <section id="dev-setup" className="section developer-setup">
      <div className="container">
        <Text size="xl" weight="bold">
          Developer Setup
        </Text>

        <div className="setup-grid">
          <Card title="VS Code Setup">
            <Text>
              <strong>Theme:</strong> {developerSetup.vscode.theme}
            </Text>
            <Text>
              <strong>Settings:</strong> {developerSetup.vscode.settings}
            </Text>
            <Text>
              <strong>Extensions:</strong>
            </Text>
            <ul>
              {developerSetup.vscode.extensions.map((ext, index) => (
                <li key={index}>
                  <Text size="small">{ext}</Text>
                </li>
              ))}
            </ul>
          </Card>

          <Card title="Terminal Setup">
            <Text>
              <strong>Shell:</strong> {developerSetup.terminal.shell}
            </Text>
            <Text>
              <strong>Theme:</strong> {developerSetup.terminal.theme}
            </Text>
            <Text>
              <strong>Tools:</strong> {developerSetup.terminal.tools}
            </Text>
          </Card>

          <Card title="Editor Font">
            <Text>
              <strong>Font:</strong> {developerSetup.font.editor}
            </Text>
            <Text>
              <strong>Size:</strong> {developerSetup.font.size}
            </Text>
            <Text>
              <strong>Features:</strong> {developerSetup.font.ligatures}
            </Text>
          </Card>

          <Card title="Node.js Setup">
            <Text>
              <strong>Version:</strong> {developerSetup.nodeSetup.version}
            </Text>
            <Text>
              <strong>Package Manager:</strong>{' '}
              {developerSetup.nodeSetup.packageManager}
            </Text>
            <Text>
              <strong>Global Packages:</strong>
            </Text>
            <ul>
              {developerSetup.nodeSetup.globalPackages.map((pkg, index) => (
                <li key={index}>
                  <Text size="small">{pkg}</Text>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default DeveloperSetup;
