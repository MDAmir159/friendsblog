import axios from 'axios';
import React , {useState, useEffect} from 'react'
import { useHistory } from 'react-router-dom';
import { PostModel } from '../../../../model/PostModel.js';
import PostBoxForm from './PostBoxForm'
import {PORT} from '../../../../backEndPort'
import { myFormattedTime } from '../../../../functions/utilities.js';

export default function PostBox(props) {
    
    /////////////////////////////////////////////////////////////   model /////////////////////////////////////////////////////////////

    const {newPost , authorisedUserDetails , setNewPost} = props;
    const [tempPostDescription, setTempPostDescription] = useState("");

    ///////////////////////////////////////////////////////////// controller //////////////////////////////////////////////////////////
    
    const savingToDatabase = async(tempNewPost) =>{
        console.log("inside saving to database");
        try {
            console.log("sldfnjcn");
            const result = await axios.post(`http://localhost:${PORT}/homeElements/postNewElements`, {tempNewPost})
            console.log("jasdnasb");
            console.log(result);
        } catch (error) {
            console.log(error);
        }
        setTempPostDescription("");
    }

    // post description changing handler
    const onChangePostDescriptionHandler = (e) =>{
        setTempPostDescription(e.target.value);
    }

    // post publishing conformation
    const onSubmitPostDescriptionHandler = (e) =>{
        e.preventDefault();
        const tempNewPost = new PostModel(tempPostDescription,authorisedUserDetails.userHandle,authorisedUserDetails.userId);
        console.log(tempNewPost);
        savingToDatabase(tempNewPost);
    }

    //////////////////////////////////////////////////////////// view /////////////////////////////////////////////////////////////////
    
    return <PostBoxForm
                tempPostDescription = {tempPostDescription}
                authorisedUserDetails = {authorisedUserDetails}
                onChangePostDescriptionHandler = {onChangePostDescriptionHandler}
                onSubmitPostDescriptionHandler = {onSubmitPostDescriptionHandler}
            />
}
