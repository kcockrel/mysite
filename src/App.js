import React from 'react';
import './App.css';

function App() {
  const resumeLink = process.env.PUBLIC_URL + '/KendalCockrel_Resume_2020_04_16.pdf';
  return (
    <div className="App">
      <header className="App-header">
        <p>
        <span role="img" aria-label="wave">👋</span>Hi, my name is Kendal Cockrel.
          <br/>
          I'm a software engineer based in San Francisco, CA.<span role="img" aria-label="fog">🌁</span>
        </p>
        <a href={resumeLink}>resume</a>
      </header>
      <div/>
    </div>
  );
}

export default App;
