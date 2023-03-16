import axios from 'axios';

// const headerConfig = {
//     headers : {
//         Authorization : localStorage.getItem("token")

//     }
// }

export const getUsers = () =>
{
    let response = axios.get('http://localhost:8080/api/v1/users',headerConfig)
    return response
}