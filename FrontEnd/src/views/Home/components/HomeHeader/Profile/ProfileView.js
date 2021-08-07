import React from 'react'
import { Navbar,Nav , Container } from 'react-bootstrap'
import { BrowserRouter as Router , Link, Route, Switch, useRouteMatch } from 'react-router-dom'
import Profile from '.'
import { ImHome } from 'react-icons/im';
import Status from './components/Status';
import Settings from './components/Settings';


export default function ProfileView(props) {

    const {authorisedUserDetails} = props;

    const {path,url} = useRouteMatch();
    console.log(path,url);

    return (
        <Router>
            <div>
                <Navbar bg="light" expand="lg">
                    <Container>
                        <Navbar.Brand as = {Link} to={'/home'}>
                            <ImHome size = "35"/>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link as = {Link} to={`${url}`}> 
                                    Status
                                </Nav.Link>
                                <Nav.Link as = {Link} to={`${url}/asd`}>
                                    Settngs
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
            <div>
                <Switch>

                    <Route exact path={`${path}`}>
                        <Status authorisedUserDetails = {authorisedUserDetails}/>
                    </Route>
                    <Route path={`${path}/asd`}>
                        <Settings />
                    </Route>
                </Switch>
            </div> 
            
        </Router>
    )
            
}
