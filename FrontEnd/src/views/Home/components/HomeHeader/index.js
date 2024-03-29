import React from 'react'
import { useHistory } from 'react-router-dom';
import HomeHeaderElements from './HomeHeaderElements'

export default function HomeHeader(props) {
    const {authorisedUserDetails} = props;

    let history = useHistory();
    const onClickProfileIconHandler = () =>{
        history.push({
            pathname : '/profile',
            state : {data : authorisedUserDetails}
            
        })
    }

    return <HomeHeaderElements 
                authorisedUserDetails = {authorisedUserDetails}
                onClickProfileIconHandler = {onClickProfileIconHandler}
            />
}
