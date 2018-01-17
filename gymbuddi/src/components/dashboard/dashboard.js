import React, {Component} from 'react';
import './dashboard.css';
import logo from '../../images/logo.png';
import {Link} from 'react-router-dom';
import {getUserInfo} from '../../ducks/users';
import {connect} from 'react-redux';
import MyCalendar from './calendar/calendar';

class Dashboard extends Component {
   
    componentDidMount() {
        this.props.getUserInfo()
    }

    render() {
        const user = this.props.user;
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

                <h1>My Profile</h1><hr />
                {user ? <img className='avatar' src={user.img} /> : null}
                    <p>Username: {user ? user.user_name : null}</p>
                    <p>Email: {user ? user.email : null}</p>
                    <p>ID: {user ? user.auth_id : null}</p>
                <a href='http://localhost:4000/auth/logout'><button>Log out</button></a>

            <MyCalendar />
        
        </div>
    )
  }
}
 
function mapStateToProps(state) {
    return {
        user: state.user
    }
}


export default connect(mapStateToProps, {getUserInfo})(Dashboard)