import axios from 'axios'

export const signUpApi = async (obj) => {
    let response;
    if(obj.userRole === "Admin"){
        response = await axios.posy("https://localhost:44353/api/Admin/register", obj);
    }
    else{
         response = await axios.post("https://localhost:44353/api/User/register", obj);
    }
    return response;
}

export const signInApi = async (obj) => {
    let response = await axios.post("https://localhost:44353/api/User/login", obj);
    return response;
}