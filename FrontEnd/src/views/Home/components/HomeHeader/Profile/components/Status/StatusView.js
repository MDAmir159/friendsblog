import React from 'react'
import PostLists from '../../../../PostLists'

export default function StatusView(props) {

    const {authorisedUserDetails} = props;
    
    ///// value will come from backEnd
    //// query to find out the filtered posts ... those are posted by the user
    const [postItemsIntel, setPostItemsIntel] = React.useState()

    return <PostLists 
                authorisedUserDetails = {authorisedUserDetails}
                postItemsIntel = {postItemsIntel}
            />
}
