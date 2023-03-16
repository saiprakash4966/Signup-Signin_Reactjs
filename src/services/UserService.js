import axios from 'axios';


export const signup = (obj) => {
    let response = axios.post("http://localhost:8080/api/v1/create",obj)
    return response
}
export const login = (obj) =>
{
    let response = axios.post("http://localhost:8080/home/login",obj)
    return response

}
export const onetimepass = (obj) =>
{
    let response = axios.post("http://localhost:8080/passwordhome/useronetimeotp",obj)
    return response

}

// export const loginApi = (obj) =>
// {
//     let response = axios.post("https://bookstore.incubation.bridgelabz.com/bookstore_user/login",obj)
//     return response

// }