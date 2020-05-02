import React from 'react';
import './App.css';
import resume from './KendalCockrel_Resume.pdf';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
        <span role="img" aria-label="wave">👋</span>Hi, my name is Kendal Cockrel.
          <br/>
          I'm a software engineer based in San Francisco, CA.<span role="img" aria-label="fog">🌁</span>
        </p>
        <a href={resume}>resume</a>
      </header>
      <div>
        Icon made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
        </div>
      <div/>
    </div>
  );
}

export default App;
