import { ADDRESS } from '../BackendAddress';

export const URL = {
    LOGIN_URL : `${ADDRESS}/logIn/login`,
    SIGNUP_URL : `${ADDRESS}/signUp/signup`,
    POST_LIST_ITEMS_URL : `${ADDRESS}/homeElements/postListItems`,
    LIKEPOST_URL : `${ADDRESS}/post/likePost`,
    UNLIKEPOST_URL : `${ADDRESS}/post/unlikePost`,
    CHECK_LIKED_URL : `${ADDRESS}/post/checkLiked`,
    POST_NEW_ELEMENT_URL : `${ADDRESS}/homeElements/postNewElements`,
    UPDATE_USER_INFO_URL : `${ADDRESS}/profile/settings/updateUserInfo`,
    USERINFO_SETTINGS_URL : `${ADDRESS}/profile/settings/userInfo`,
    USERS_POST_URL : `${ADDRESS}/profile/Status/userPosts`,
    SUBMIT_COMMENT_URL : `${ADDRESS}/post/postComment`,
    FETCH_COMMENT_URL : `${ADDRESS}/post/fetchComments`
}