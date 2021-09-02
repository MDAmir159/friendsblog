import React, { useState } from 'react'
import { BrowserRouter as Router , Link, Route, Switch, useRouteMatch, useLocation, useHistory } from 'react-router-dom'
import { CgFeed } from "react-icons/cg";
import { FiSettings } from "react-icons/fi";
import { Button  } from '@material-ui/core';
import Settings from './ProfileHeader/Settings';
import Status from './ProfileHeader/Status';
import { makeStyles } from '@material-ui/core/styles';
import { getloggedInUsersInfo } from '../../../../../Utility';
import './ProfileView.css'
import { IoHome } from 'react-icons/io5';

export default function ProfileView() {


    let location = useLocation();
    let history = useHistory();

    const {path,url} = useRouteMatch();

    const [authorisedUserDetails, setAuthorisedUserDetails] = useState(getloggedInUsersInfo());
    
    

    const useStyles = makeStyles(theme => ({
        root:{
            backgroundColor: '#FF000',
        },
        icons : {
            display : 'flex',
            alignItems : 'center',
            color : '#fff',
        },
        logger_name:{
            fontSize : '25px',
            fontFamily : 'arial',
            marginLeft: '20px',
            color : '#fff'
        }
        
    }));

    const styles = useStyles();


    const onClickBackToHome = () =>{
        history.push({
            pathname : '/'
        })
    }

    return (
        <div className="root-profile">
        <Router>
                <nav className="navbar">
                    <div className = "back-home">
                        <Button onClick = {onClickBackToHome}>
                            <IoHome size ="35" color="#fff" />
                        </Button>
                    </div>
                    <p className = {styles.logger_name}>
                        <b>{authorisedUserDetails.userHandle}</b>
                    </p>
                    <div className="links">
                        <Link as = {Link} to={`${url}`}> 
                            <Button>
                                <CgFeed size = "35" color="#fff" />
                            </Button>
                        </Link>
                        <Link as = {Link} to={`${url}/asd`}>
                            <Button>
                                <FiSettings size = "35" color="#fff" />
                            </Button>
                        </Link>
                    </div>
                </nav>
                <div className="body">
                <Switch>
                    <Route exact path={`${path}`}>
                        <Status 
                            authorisedUserDetails = {authorisedUserDetails}
                        />
                    </Route>
                    <Route path={`${path}/asd`}>
                        <Settings 
                            authorisedUserDetails = {authorisedUserDetails}
                            setAuthorisedUserDetails = {setAuthorisedUserDetails}
                        />
                    </Route>
                </Switch>
                </div>
        </Router>
        </div>
    )
            
}