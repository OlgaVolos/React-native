import axios from 'axios'
const axiosInstance = axios.create(
    {baseURL: 'https://jsonplaceholder.typicode.com',
    // headers: {
    //     Autorization: 'Bearer yourToken'
    // }
    }); // те ж саме, що й фетч

const getUsers = async () =>{
    const {data} = await axiosInstance('/users');
    return data

} // get all users

const getUser = async (id) => {
    const {data} = await axiosInstance(`/users/${id}`);
    return data
}; // get single user by id

export {getUser, getUsers}
