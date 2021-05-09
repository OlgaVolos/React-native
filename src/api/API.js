import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
});

const getUsers = async () => {
    const {data} = await axiosInstance('/users');
    return data;
}

const getSingleUser = async (id) => {
    const {data} = await axiosInstance(`/users/${id}`);
    return data;
}
const getPosts = async () => {
    const {data} = await axiosInstance('/posts');
    return data;
}

const getSinglePost = async (id) => {
    const {data} = await axiosInstance(`'/posts/${id}`);
    return data;
}

export {getPosts, getUsers, getSingleUser, getSinglePost}
