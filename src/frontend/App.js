import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import '../frontend/App.css';
import UserPage from './UserPage/UserPage';
import Homepage from './Homepage/Homepage';
import Burger from './components/BurgerMenu/BurgerMenu'

function App() {

  const [name, setName] = useState('');
  const [team, setTeam] = useState('');


  return (
    <Router>
      <div>
        <Route exact path='/'>
          <Homepage setName={setName} setTeam={setTeam} />
        </Route>
        <Route exact path='/userpage'>
          <UserPage team={team} name={name} />
        </Route>
        {/* <Route exact path='/burger' component={Burger} /> */}
      </div>
    </Router>
  );
}

export default App;
