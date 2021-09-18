export const getloggedInUsersInfo = () =>{
    let value = localStorage.getItem('DLGT_PROJECT2_postGivingAppRemastered');
    const obj = JSON.parse(value);
    console.log(obj.userDetails);
    return obj.userDetails;
}

export const getLoggedIn = (key , value) =>{
    localStorage.setItem(key,value);
}

export const getLoggedOut = (key,value) =>{
    localStorage.setItem(key,value);
}