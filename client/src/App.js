import React from 'react';
import Google from './components/Google';
import JobBoard from './components/JobBoard';
import './App.css';

function App() {
  return (
    <div className="App">
      <header id="Google"className="App-header">
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
        <a className="arrowDown" href="#JobBoard">▼</a>
      </header>
      <main id="JobBoard">
        <a className="arrowUp" href="#Google">▲</a>
        <JobBoard />
        <footer>Created by<a href="//www.dylandavis.io" target="_blank"> Dylan Davis</a></footer>
      </main>
    </div>
  );
}

export default App;
