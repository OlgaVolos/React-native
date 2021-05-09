import axios from 'axios';

const axiosInstance = axios.create(
    { baseURL: 'https://jsonplaceholder.typicode.com'}
)




const getAllPosts = async () => {
    const {data} = await axiosInstance('/posts');
    return data;
};

const getPost  = async (id) => {
    const {data} = await axiosInstance(`/posts/${id}`);
    return data;
};

export {getAllPosts, getPost}
