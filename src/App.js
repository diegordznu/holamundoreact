import logo from './yo.jpeg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Este es mi primer hola mundo de react
        </p>
        <a
          className="App-link"
          href="https://utd.edu.mx"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visitar la página de la UTD
        </a>
      </header>
    </div>
  );
}

export default App;
