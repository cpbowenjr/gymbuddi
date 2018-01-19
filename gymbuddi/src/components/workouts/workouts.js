import React, { Component } from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';

export default class Workouts extends Component {
    render() {
        return (
            <div className="app">
                <div className='main-logo'>
                    <div className='header'>
                        <img className='logo-image' src='/images/logo.png' />
                        <h1 className='title'>GYMBUDDI</h1>
                        <div className='nav-bar'>
                            <div className='button-box'>
                                <Link to='/'><button className='hvr-grow'>HOME</button></Link>
                                <Link to='/workouts'><button className='hvr-grow'>WORKOUTS</button></Link>
                                <Link to='/nutrition'><button className='hvr-grow'>NUTRITION</button></Link>
                                <Link to='/trainers'><button className='hvr-grow'>TRAINERS</button></Link>
                                <Link to='/login'><button className='hvr-grow'>LOGIN</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <h1 className='main-content'>workouts</h1>
            </div>
        );
    }
}