import React from 'react';
import getData from '../Data';
import { Link } from 'react-router-dom';
import logo from '../Images/logo.png';
import messi from '../Images/messi.png';
import cristiano from '../Images/cris.png';
import './Homepage.css';

export default function Homepage() {

    return (
        <>
            <div className='App'>
                <div className='layout'>
                    <img className='cris' src={cristiano} alt='Cris' />
                    <div className='form'>
                        <form>
                            <div className='logo center'>
                                <img src={logo} alt='logo'></img>
                            </div>
                            <input className='name' 
                                    type='text' 
                                    placeholder='Please enter your name' 
                                    name='name' 
                                    onChange={event => {
                                        localStorage.setItem('name', event.target.value)
                                    }}/>
                            <br></br>
                            <select className='name' onChange={event => {
                                localStorage.setItem('team', event.target.value)
                            }}>
                                {
                                    getData().map(a => (
                                        <option key={a.id}>{a.name}</option>
                                    ))
                                }
                            </select>
                            <div className='center'>
                                <Link to='/userpage' className='link'>ENTER</Link>
                            </div>
                        </form>
                    </div>
                    <img className='messi' src={messi} alt='Messi' />
                </div>
                <div className='players'>
                </div>
            </div>
        </>
    )
}

