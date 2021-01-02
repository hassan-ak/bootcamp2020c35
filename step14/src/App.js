import logo from './logo.svg';
import React , {useState, useEffect} from 'react';
import './App.css';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`/.netlify/functions/hello?name=from Serverless Function`)
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  return (
    <div className="App" id="file">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {data.message}
        </p>
        <a
          className="App-link"
          href="#file"
          rel="noopener noreferrer"
        >
          by: Hassan ali Khan
        </a>
      </header>
    </div>
  );
}

export default App;
