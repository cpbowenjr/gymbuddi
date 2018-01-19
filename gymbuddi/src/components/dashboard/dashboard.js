import React, { Component } from 'react';
import '../../App.css';
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
                <h1>My Profile</h1><hr />
                    {user ? <img className='avatar' src={user.img} /> : null}
                    <p>Username: {user ? user.user_name : null}</p>
                    <p>Email: {user ? user.email : null}</p>
                    <p>ID: {user ? user.auth_id : null}</p>
                    <a href='http://localhost:4000/auth/logout'><button>Log out</button></a>

                <Payments />
                <MyCalendar />
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