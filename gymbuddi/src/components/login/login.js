import React, {Component} from 'react';
import './login.css';
import logo from '../../images/logo.png';
import {Link} from 'react-router-dom';

export default class Login extends Component {
    render() {
        return (
        <div className="App">
            <img className='logo-image' src={logo} />
                <h1 className='title'>GYMBUDDI</h1>
            <div className='nav-bar'>
                <Link to='/login'><button className='login-button'>LOGIN</button></Link>
                <Link to='/'><button className='nav-button'>HOME</button></Link>
                <Link to='/workouts'><button className='nav-button'>WORKOUTS</button></Link>
                <Link to='/nutrition'><button className='nav-button'>NUTRITION</button></Link>
                <Link to='/trainers'><button className='nav-button'>TRAINERS</button></Link>
            </div>

            <a href={process.env.REACT_APP_LOGIN}>
                <button>LOGIN</button>
            </a>
        </div>
    );
  }
}