import React from 'react';
import getData from './getData'
import '../frontend/App.css';
import UserPage from './UserPage/UserPage';

function App() {

  return (
    <div className="App">
      <h1>FootApp</h1>
      <UserPage />
    </div>
  );
}

export default App;
