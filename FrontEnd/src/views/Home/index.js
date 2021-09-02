import axios from 'axios';
import React , {useState, useEffect} from 'react'
import { useLocation } from 'react-router-dom';
import PostBox from './components/PostBox'
import HomeElements from './HomeElements'
import {PORT} from '../../backEndPort'
import { getloggedInUsersInfo } from '../../Utility';

export default function Home(props) {
    
    let location = useLocation()

    ////////////////////////////////////////////     model portion     ///////////////////////////////////////
    const [newPost, setNewPost] = useState();
    const [postItemsIntel, setPostItemsIntel] = useState([]);
    const [authorisedUserDetails, setAuthorisedUserDetails] = useState(getloggedInUsersInfo());
    
    ///////////////////////////////////////////        controller     ///////////////////////////////////////////

    useEffect(() => {
        axios.get(`http://localhost:${PORT}/homeElements/postListItems`)
        .then((res)=>{
            setPostItemsIntel(res.data);
        })
    }, [])
    ///////////////////////////////////////   view   /////////////////////////////////////////////////////
    return <HomeElements 
                newPost = {newPost}
                authorisedUserDetails = {authorisedUserDetails}
                setAuthorisedUserDetails = {setAuthorisedUserDetails}
                postItemsIntel = {postItemsIntel}
                setNewPost = {setNewPost}
            />
}
