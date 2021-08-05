import React from 'react'
import { Navbar,Nav , Container } from 'react-bootstrap'
import { BrowserRouter as Router , Link, Route, Switch, useRouteMatch } from 'react-router-dom'
import Profile from '.'
export default function ProfileView() {

    const {path,url} = useRouteMatch();
    console.log(path,url);

    const Status = () =>{
        return(
            <div>
                Status
            </div>
        )
    }

    const ASD = () =>{
        return(
            <div>
                ASD
            </div>
        )
    }

    return (
        <Router>
            <div>
                <Navbar bg="light" expand="lg">
                    <Container>
                        <Navbar.Brand href = "#">React-Bootstrap</Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link as = {Link} to={`${url}`}> 
                                    Status
                                </Nav.Link>
                                <Nav.Link as = {Link} to={`${url}/asd`}>
                                     ASD
                                </Nav.Link>
                            </Nav>
                            </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
            <div>
                <Switch>

                    <Route exact path={`${path}`}>
                        <Status />
                    </Route>
                    <Route path={`${path}/asd`}>
                        <ASD />
                    </Route>
                </Switch>
            </div> 
            
        </Router>
    )
            
}
