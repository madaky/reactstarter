import React from 'react';
import { Dropdown, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle} from '@fortawesome/free-solid-svg-icons';
import {faBell} from '@fortawesome/free-regular-svg-icons';
import { title } from 'process';

export const NotificationBell =()=>{
    let arr = new Array(5).fill('a');
    return(
    <Dropdown className="dropdown-menu-right">
        <Dropdown.Toggle id="notificationButton" 
            className="header-icon notificationButton"
            color="empty">
            <FontAwesomeIcon icon={faBell} className="simple-icon-bell fa-2x"/>
                <span className="count">{arr.length}</span>
        </Dropdown.Toggle>
        <Dropdown.Menu id="notificationDropdown">
            <div className="dropdownContent">
            {
             arr.map((v,i) => {
                 return(
                <div  key={i}>
                 <Dropdown.Item href="/about">
                 <Row noGutters>
                     <Col md={4} className="no-gutter">
                         <img
                             src="https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?cs=srgb&dl=nature-red-love-romantic-67636.jpg&fm=jpg"
                             alt="image"
                             className="img-thumbnail list-thumbnail xsmall border-0 rounded-circle"
                         /> 
                     </Col>
                     <Col md={8}>
                         <p className="font-weight-medium mb-1">New Message</p>
                         <p className="text-muted mb-0 text-small">a hour ago</p>
                     </Col>
                 </Row>
             </Dropdown.Item>
             <Dropdown.Divider />
             </div>)
             
            })
        }
            </div>
        </Dropdown.Menu>
    </Dropdown>
    );
}

