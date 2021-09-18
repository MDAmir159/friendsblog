import { type } from "../actionType";

export const LogInAction = (userData) => {
    return {
        type: type.USERLOGIN,
        payload: userData,
    };
};

export const LogoutAction = () => {
    return {
        type: type.USERLOGOUT,
    };
};