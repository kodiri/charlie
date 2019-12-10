import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import '../frontend/App.css';
import UserPage from './UserPage/UserPage';
import Homepage from './Homepage/Homepage';

function App() {

  return (
    <Router>
      <div>
        <Route exact path='/'>
          <Homepage />
        </Route>
        <Route exact path='/userpage'>
          <UserPage />
        </Route>
      </div>
    </Router>
  );
}

export default App;
