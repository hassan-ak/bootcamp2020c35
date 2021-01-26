import logo from './logo.svg';
import './App.css';
import React , {useState, useEffect} from 'react';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`/.netlify/functions/hello?name=from Serverless Function`)
      .then(response => response.json())
      .then(data => setData(data));
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {data.message}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hassan ali Khan
        </a>
      </header>
    </div>
  );
}

export default App;
