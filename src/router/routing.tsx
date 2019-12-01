import React from 'react';
import App from '../App';
import About from '../components/about';
import Notfound from '../components/notfound';
import {Route, Switch, Redirect } from 'react-router';
import  { Login } from '../components/login';
import Dashboard from '../components/dashboard'
import { connect } from 'react-redux';
import { AuthenticationConstant } from '../constants/index.d';

class Routing extends React.Component<{AuthenticationReducer?:any}>{
    render(){
        return (
                <Switch>
                    <Route exact path="/">
                        <App/>
                    </Route>
                    <Route exact path="/about">
                        <About/>
                    </Route>
                    <Route exact path="/login">
                        <Login/>
                    </Route>
                    {this.props.AuthenticationReducer.type===AuthenticationConstant.AUTHENTICATED 
                        && 
                        <Route path="/dashboard">
                            <Dashboard />
                        </Route> ||
                        <Route path="/dashboard/:?">
                            <Dashboard />
                        </Route>
                    }
                    <Route>
                        <Notfound/>
                    </Route>
                </Switch>
        );
    }

} 

export default connect(state=> state)(Routing);