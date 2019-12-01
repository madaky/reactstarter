import React from 'react';
import { Nav, Navbar, NavItem, NavDropdown, Dropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars, faSearch, faDatabase} from '@fortawesome/free-solid-svg-icons';
import Logout from '../../../logout/logout';
import { connect } from 'react-redux';
import { UnAuthenticated } from '../../../../store/authentication/authentication.action';

class Topnav extends React.Component<{UnAuthenticated?:any}>{
    render(){
        return(
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand>
                    <a className="navbar-logo" href="/">
                        <FontAwesomeIcon icon={faDatabase} />
                        React Auth Boilerplate
                    </a>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse>
                        <Nav className="align-items-center">
                        <NavItem>
                            <FontAwesomeIcon icon={faDatabase} />
                            <span className="hidden-lg hidden-md"></span>
                        </NavItem>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item >Notification 1</NavDropdown.Item>
                            <NavDropdown.Item >Notification 2</NavDropdown.Item>
                            <NavDropdown.Item >Notification 3</NavDropdown.Item>
                            <NavDropdown.Item >Notification 4</NavDropdown.Item>
                            <NavDropdown.Item >Another notifications</NavDropdown.Item>
                        </NavDropdown>
                        <NavItem >
                            <FontAwesomeIcon icon={faSearch}/>
                            <p className="hidden-lg hidden-md">Search</p>
                        </NavItem>
                        </Nav>
                        <Nav className="justify-content-end">
                        <Nav.Link href="#">
                            Account
                        </Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown-right">
                            <Dropdown.Item>Action</Dropdown.Item>
                            <Dropdown.Item>Another action</Dropdown.Item>
                            <Dropdown.Item>Something</Dropdown.Item>
                            <Dropdown.Item>Another action</Dropdown.Item>
                            <Dropdown.Item>Something</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item>Separated link</Dropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#">
                            <Logout/>
                        </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
        )
    }
}

export default connect(state => state,{UnAuthenticated})(Topnav);