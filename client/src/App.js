import React from 'react';
import Google from './components/Google';
import JobBoard from './components/JobBoard';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2 id="Logo"><strong>Un</strong>Employed at <strong>Home</strong></h2>
        <Google />
        <p>
          "Get a job ya bum!" - Dylan Davis
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Get a Job
        </a>
      </header>
      <main>
        <JobBoard />
      </main>
    </div>
  );
}

export default App;
