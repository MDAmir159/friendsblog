import React from 'react'
import StatusView from './StatusView'

export default function Status(props) {
    console.log("INSIDE STATUS");
    console.log(props);
    return <StatusView 
                authorisedUserDetails = {props.authorisedUserDetails}
            />
}
