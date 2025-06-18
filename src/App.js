import React, { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [greeting, setGreeting] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setGreeting(`שלום ${name}`);
  };

  return (
    <div className="App">
      <div className="greeting-container">
        <h1>שלום</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="הכנס את שמך"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type="submit">אישור</button>
        </form>
        {greeting && <p>{greeting}</p>}
      </div>
    </div>
  );
}

export default App;
