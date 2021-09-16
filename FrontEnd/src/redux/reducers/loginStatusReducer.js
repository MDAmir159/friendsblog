import { type } from "../actionType";

const initialState = {
    loggedin: false,
    authorisedUser: null,
}

const loginStatusReducer = (state = initialState, action) => {
    switch(action.type){
        case type.USERLOGIN:
            return {
                ...state,
                loggedin: true,
                authorisedUser: action.payload,
            }
        case 'USERLOGOUT':
            return {
                ...state,
                loggedin: false,
                authorisedUser: null,
            };
        default:
            return state;
    }
}

export default loginStatusReducer;