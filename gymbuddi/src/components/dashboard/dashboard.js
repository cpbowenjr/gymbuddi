import React, { Component } from 'react';
import '../../App.css';
import './dashboard.css';
import { Link } from 'react-router-dom';
import { getUserInfo } from '../../ducks/users';
import { connect } from 'react-redux';
import MyCalendar from './calendar/calendar';
import Payments from '../stripe/stripe';

class Dashboard extends Component {

    componentDidMount() {
        this.props.getUserInfo()
    }

    render() {
        const user = this.props.user;
        return (
            <div className="app">
                <div className='main-logo'>
                    <div className='header'>
                        <h1 className='title'>
                            <span className='char1'>G</span>
                            <span className='char2'>Y</span>
                            <span className='char3'>M</span>
                            <span className='char4'>B</span>
                            <span className='char5'>U</span>
                            <span className='char6'>D</span>
                            <span className='char7'>D</span>
                            <span className='char8'>I</span>
                        </h1>
                        <div className='nav-bar'>
                            <img className='logo-image' src='/images/logo.png' />
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
                <div className='dashboard-page'>
                    <div className='profile-info'>
                        <p className='profile-pic'>{user ? <img className='avatar' src={user.img} /> : null}</p>
                        <p className='username'>Username: {user ? user.user_name : null}</p>
                        <p className='user-email'>Email: {user ? user.email : null}</p>
                        <p className='user-id'>ID: {user ? user.auth_id : null}</p>
                        <a href='http://localhost:4000/auth/logout'><button className='hvr-grow'>Log out</button></a>
                    </div>
                    <div className='payments'><Payments /></div>
                    <div className='calendar'><MyCalendar /></div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.user
    }
}


export default connect(mapStateToProps, { getUserInfo })(Dashboard)