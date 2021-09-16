import React from 'react'
import Post from './Post'
import { makeStyles } from '@material-ui/core/styles';

export default function PostListitems(props) {
    const {
        postItemsIntel
    } = props;
    //console.log(postItemsIntel);
    const useStyles = makeStyles((theme) => ({
        root: {
            width: 'auto',
            display: 'flex',
            alignSelf: 'center',
        },
        lists_root: {
            width: 'auto',
            display: 'flex',
            flexDirection: 'column',
        }
    }));
    const styles = useStyles();

    return (
        <div className={styles.root}>
            <div className={styles.lists_root}>
                {
                    postItemsIntel.map((item , index) => <Post key = {index} value = {item}/>)
                }
            </div>
        </div>
    );
}
