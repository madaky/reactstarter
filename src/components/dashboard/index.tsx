import React from 'react';
import Topnav from './nav/topnav/top.nav';
import Sidebar from './sidebar/index.sidebar';
import AuthRouting from '../../router/auth.router';
import { ConnectedRouter } from 'connected-react-router';
import {history} from '../../store/setup';
import { Row, Container } from 'react-bootstrap';
import "../../assets/scss/main.scss";
class Dashboard extends React.Component<{history?:any}>{
    render(){
        return(
            <Container fluid className="no-gutters px-0">
                <Topnav></Topnav>
                <Row className="no-gutters">
                <Sidebar></Sidebar>
                <main>
                    <AuthRouting/>
                </main>
                </Row>
            </Container>
        );
    }
}


export default Dashboard;