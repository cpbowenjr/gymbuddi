import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Route, Switch} from 'react-router-dom';
import './index.css';
import Home from './components/home/home';
import Workouts from './components/workouts/workouts';
import Nutrition from './components/nutrition/nutrition';
import Trainers from './components/trainers/trainers';
import Login from './components/login/login';
import Dashboard from './components/dashboard/dashboard';
import {Provider} from 'react-redux';
import createStore from './store';
import Payments from './components/stripe/stripe';

ReactDOM.render(
    <HashRouter>
       <Provider store={createStore}>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/workouts' component={Workouts} />
                <Route path='/nutrition' component={Nutrition} />
                <Route path='/trainers' component={Trainers} />
                <Route path='/login' component={Login} />
                <Route path='/dashboard' component={Dashboard} />        
            </Switch>
        </Provider>
    </HashRouter>
    , document.getElementById('root'));