import React from 'react';
import App from '../App';
import About from '../components/about';
import Notfound from '../components/notfound';
import {Route, Switch, Redirect } from 'react-router';
import { connect } from 'react-redux';
import Main from '../components/dashboard/pages/main.dashboard';
class AuthRouting extends React.Component<{AuthenticationReducer?:any}>{
    render(){
        return (
                <Switch>
                    <Route exact path="/dashboard">
                        <Main/>
                    </Route>
                    <Route exact path="/dashboard/user/profile">
                        <Main/>
                    </Route>
                    <Route>
                        <Notfound/>
                    </Route>
                </Switch>
        );
    }

} 

export default connect(state=> state)(AuthRouting);