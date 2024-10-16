import axios from 'axios';

const URL = "http://localhost:3000/api/posts";

export async function getPosts() {
    try {
        const res = await axios.get(URL);
        if (res.status === 200) {
            return res.data;
        } else {
            throw new Error(`Failed to fetch posts: ${res.status}`);
        }
    } catch (error) {
        console.error(error);
        throw error; // Re-throw the error for handling elsewhere
    }
}

export async function getPost(id) {
    try {
        const res = await axios.get(`${URL}/${id}`);
        if (res.status === 200) {
            return res.data;
        } else {
            throw new Error(`Failed to fetch post ${id}: ${res.status}`);
        }
    } catch (error) {
        console.error(error);
        throw error; // Re-throw the error for handling elsewhere
    }
}

export async function createPost(post) {
    try {
        const res = await axios.post(URL, post);
        if (res.status === 201) { // Typically 201 for created resources
            return res.data;
        } else {
            throw new Error(`Failed to create post: ${res.status}`);
        }
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export async function updatePost(id, post) {
    try {
        const res = await axios.put(`${URL}/${id}`, post);
        if (res.status === 200) {
            return res.data;
        } else {
            throw new Error(`Failed to update post ${id}: ${res.status}`);
        }
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export async function deletePost(id) {
    try {
        const res = await axios.delete(`${URL}/${id}`);
        if (res.status === 204) { // Typically 204 for successful deletion
            return true; // Indicating success
        } else {
            throw new Error(`Failed to delete post ${id}: ${res.status}`);
        }
    } catch (error) {
        console.error(error);
        throw error;
    }
}
