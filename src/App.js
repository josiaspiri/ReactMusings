import React from 'react';
import GitCards from './components/GitCards';
import './App.css';

function App() {
  return (
      <GitCards url="https://api.josiaspiri.dev/github/users/josiaspiri/repos" />
  );
}

export default App;
