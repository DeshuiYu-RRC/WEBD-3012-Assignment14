import React from 'react';
import './App.css';
import Header from './pages/Header';
import BasicInfo from './pages/BasicInfo';
import Work from './pages/Work';
import Skills from './pages/Skills';
import Resources from './pages/Resources';
import DeveloperSetup from './pages/DeveloperSetup';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <BasicInfo />
        <Work />
        <Skills />
        <Resources />
        <DeveloperSetup />
      </main>
      <footer>
        <p>Provided By Deshui Yu</p>
      </footer>
    </div>
  );
}

export default App;
