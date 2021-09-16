import axios from 'axios';
import React , {useState, useEffect} from 'react'
import { useHistory } from 'react-router-dom';
import { PostModel } from '../../../../model/PostModel.js';
import PostBoxForm from './PostBoxForm'
import {URL} from '../../../../urls/url';
import { myFormattedTime } from '../../../../functions/utilities.js';
import {useSelector, useDispatch} from 'react-redux';

export default function PostBox(props) {
    
    /////////////////////////////////////////////////////////////   model /////////////////////////////////////////////////////////////

    const login_details = useSelector(state => state.loginStatusReducer)
    const {newPost , setNewPost} = props;
    const [tempPostDescription, setTempPostDescription] = useState("");

    ///////////////////////////////////////////////////////////// controller //////////////////////////////////////////////////////////
    
    const savingToDatabase = async(tempNewPost) =>{
        console.log("inside saving to database");
        try {
            console.log("sldfnjcn");
            const result = await axios.post(URL.POST_NEW_ELEMENT_URL, {tempNewPost})
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
        const tempNewPost = new PostModel(tempPostDescription,login_details.authorisedUser.userHandle,login_details.authorisedUser.userId);
        console.log(tempNewPost);
        savingToDatabase(tempNewPost);
    }

    //////////////////////////////////////////////////////////// view /////////////////////////////////////////////////////////////////
    
    return <PostBoxForm
                tempPostDescription = {tempPostDescription}
                onChangePostDescriptionHandler = {onChangePostDescriptionHandler}
                onSubmitPostDescriptionHandler = {onSubmitPostDescriptionHandler}
            />
}
