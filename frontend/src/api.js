import axios from 'axios'

const URL = "http://localhost:3000/api/posts"

export async function getPosts (){
    const res = await axios.get(`${URL}/posts`)
    if (res.status === 200){
        return res.data;
    }else{
        return 
    }
}

export async function getPost (id){
    const res = await axios.get(`${URL}/posts/${id}`)
    if (res.status === 200){
        return res.data;
    }else{
        return 
    }
}

export async function createPost (post){
    const res = await axios.post(`${URL}/posts`, post)
    return res
}

export async function updatePost (id, post){
    const res = await axios.put(`${URL}/posts/${id}`, post)
    return res
}

export async function deletePost (id){
    const res = await axios.delete(`${URL}/posts/${id}`)
    return res
}