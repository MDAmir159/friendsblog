import axios from 'axios';
import React , {useState, useEffect} from 'react'
import { useLocation } from 'react-router-dom';
import PostBox from './components/PostBox'
import HomeElements from './HomeElements'
import { URL } from '../../urls/url';
import { getloggedInUsersInfo } from '../../Utility';
import {useSelector, useDispatch} from 'react-redux';

export default function Home(props) {
    
    const login_details = useSelector(state => state.loginStatusReducer)

    ////////////////////////////////////////////     model portion     ///////////////////////////////////////
    const [newPost, setNewPost] = useState();
    const [postItemsIntel, setPostItemsIntel] = useState([]);    
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
                postItemsIntel = {postItemsIntel}
                setNewPost = {setNewPost}
            />
}
