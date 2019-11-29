import React from 'react';
import logo from '../Images/logo.png';
import messi from '../Images/messi.png';
import cristiano from '../Images/cris.png';
import './Homepage.css';

export default function Homepage() {
    return (
      <>
            <div className='logo'>
                <img src={logo} alt='logo'></img>
            </div>
            <div className='players'>
                <img className='cris' src={cristiano} alt='Cris' />
                <img className='messi' src={messi} alt='Messi' />
            </div>
            <div className='form'>
                <form>
                    <input className='name' type='text' placeholder='Please enter your name' />
                    <br></br>
                    <select className='select'>
                        <option>REAL MADRID</option>
                        <option>BARCELONA</option>
                        <option>MAN CITY</option>
                    </select>
                    <button className='button'>ENTER</button>
                </form>
            </div>
      </>
    )
}
