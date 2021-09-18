import axios from 'axios';
import React , {useState, useEffect} from 'react'
import HomeElements from './HomeElements'
import { URL } from '../../urls/url';

export default function Home(props) {
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
