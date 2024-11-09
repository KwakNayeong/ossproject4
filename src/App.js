import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <section className="App-section">
        <h2>Welcome to My React App</h2>
        <p>This is a new section added to demonstrate CSS styling in React.</p>
        </section>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {}
        <button className="App-button">Click Me!</button>
      </header>
      
    </div>
  );
}

export default App;
