import React from 'react';
import { UnAuthenticated } from '../../store/authentication/authentication.action';
import { connect } from 'react-redux';


class Logout extends React.Component<{UnAuthenticated?:any}>{
    handleLogout = () => {
        return this.props.UnAuthenticated();
    };
    render(){
        return(
            <span className="dropdown-item" onClick={this.handleLogout}>logout</span>
        )
    }
};

export default connect( state=> state, {UnAuthenticated})(Logout)