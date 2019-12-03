import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import '../frontend/App.css';
import UserPage from './UserPage/UserPage';
import Homepage from './Homepage/Homepage';
import Burger from './components/BurgerMenu/BurgerMenu'

function App() {

  return (
    // <div>
    //   <Homepage />
    // </div>
    <Router>
      <div>
      <Route exact path='/burger' component={Burger} />
        <Route exact path='/' component={Homepage} />
        <Route exact path='/userpage' component={UserPage} />
      </div>
    </Router>
);
}

export default App;
