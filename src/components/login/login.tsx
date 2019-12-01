import React from 'react';
import  LoginForm  from './loginform';
import { connect } from 'react-redux';
import {loginRequest} from '../../store/login/login.action';

class Login extends React.Component<{loginRequest:any}>{
    handleLogin = (values:any) => {
        return this.props.loginRequest(values);
    };
    render(){
        return(
            <LoginForm onSubmit={this.handleLogin} />
        )
    }
};

export default connect(state=> state, {loginRequest})(Login);
