import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Button , TextField } from '@material-ui/core';
import './PostBoxForm.css'

export default function PostBoxForm(props) {
    const{
        tempPostDescription,
        authorisedUserDetails,
        onChangePostDescriptionHandler,
        onSubmitPostDescriptionHandler
    } = props;


    const postLabel = "What's on your mind," + authorisedUserDetails.userHandle + " ?";

    return (
        <div className = "root_postBox">
            <form onSubmit = {onSubmitPostDescriptionHandler}>
                <div className = "box" >
                    <TextField
                        className = "textfield_design"
                        id="outlined-helperText"
                        label= {postLabel}
                        defaultValue=""
                        helperText=""
                        variant="outlined"
                        rows = {5}
                        multiline
                        value = {tempPostDescription}
                        onChange = {onChangePostDescriptionHandler}
                    />
                </div>
                <div className = "button_div">
                    <Button
                        type = "submit"
                        className = "button_desgin"
                        onClick ={onSubmitPostDescriptionHandler}
                    >
                        <label className = "button_label">
                            POST
                        </label>
                    </Button>
                </div>
            </form>          
        </div>
    )
}
