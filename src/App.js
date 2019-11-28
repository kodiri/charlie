import React from 'react';
import logo from './images/logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='logo'>
        <img src={logo} alt='logo'></img>
      </div>
       
      <div className='form'> 
        <form >
           <input className='name' type='text' placeholder='Please enter your name' />
           <br></br>
          <select className='select'>
            <option>REAL MADRID</option>
            <option>BARCELONA</option>
            <option>MAN CITY</option>
          </select>
          <button className='button'>ENTER</button>
          </form>
         
          
          
        {/* <footer className='footer'>
       
        </footer> */}
      </div>
    </div>
  );
}

export default App;
