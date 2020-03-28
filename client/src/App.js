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
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <main>
        <JobBoard />
      </main>
    </div>
  );
}

export default App;
