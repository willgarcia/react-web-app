import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://my-demo-secured-default.apps.rosa.gd1.1u4e.p3.openshiftapps.com/index.html');
        const data = await response.json();

        setData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {data.length > 0 ? data.map((item, index) => <div key={index}>{item}</div>) : 'Loading...'}
      </header>
    </div>
  );
}

export default App;
