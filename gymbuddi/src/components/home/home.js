import React, { Component } from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';

export default class Home extends Component {
    render() {
        return (
            <div className="app">
                <div className='main-logo'>
                    <div className='header'>
                        <h1 className='title'>
                            {/* <span className='char1'>G</span>
                            <span className='char2'>Y</span>
                            <span className='char3'>M</span>
                            <span className='char4'>B</span>
                            <span className='char5'>U</span>
                            <span className='char6'>D</span>
                            <span className='char7'>D</span>
                            <span className='char8'>I</span> */}
                        </h1>
                        <img className='logo-image' src='/images/logo.png' />
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
                <h2 className='main-content'>
                    <ol>Welcome to Gymbuddi!</ol>
                    <ol>Track your workouts</ol>
                    <ol>Find a Trainer</ol>
                    <ol>Great meal ideas</ol>

                </h2>
            </div>
        );
    }
}