import React from 'react';
// import Data from './Data'
import '../frontend/App.css';
import UserPage from './UserPage/UserPage';
import PremTable from './PremTable/PremTable';
import Homepage from './Homepage/Homepage';

function App() {

  return (
    <div className="App">
      <div>
              <Homepage />
      </div>
      {/* <UserPage /> */}
      <div className='table'>
              <PremTable />
      </div>
      {/* <Data /> */}
    </div>
  );
}

export default App;
