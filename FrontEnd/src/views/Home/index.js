import axios from 'axios';
import React , {useState, useEffect} from 'react'
import { useLocation } from 'react-router-dom';
import PostBox from './components/PostBox'
import HomeElements from './HomeElements'
import { URL } from '../../urls/url';
import { getloggedInUsersInfo } from '../../Utility';

export default function Home(props) {
    
    let location = useLocation()

    ////////////////////////////////////////////     model portion     ///////////////////////////////////////
    const [newPost, setNewPost] = useState();
    const [postItemsIntel, setPostItemsIntel] = useState([]);
    const [authorisedUserDetails, setAuthorisedUserDetails] = useState(getloggedInUsersInfo());
    
    ///////////////////////////////////////////        controller     ///////////////////////////////////////////

    useEffect(() => {
        axios.get(URL.POST_LIST_ITEMS_URL)
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
