import React from 'react';
import { Container, Row, NavItem, Col, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMeteor } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import "../../../assets/scss/sidebar.scss"

class Sidebar extends React.Component{
    constructor(props:any){
        super(props);
    }

    render(){
        return(
            <div className="sidebar fixed">
                <div className="main-menu">
                    <div className="scroll">
                        <Nav>
                        <NavItem >
                        <Link to="/dashboard">
                            <FontAwesomeIcon icon={faMeteor}  />
                            <span>DashBoard</span>
                          </Link>
                        </NavItem>
                        <NavItem >
                        <Link to="/dashboard/user/profile">
                            <FontAwesomeIcon icon={faMeteor}  />
                            <span>DashBoard</span>
                          </Link>
                        </NavItem>
                        </Nav>
                    </div>
                </div>
            </div>
        );
    }
}

export default Sidebar;