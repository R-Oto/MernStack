import React, {useState, useEffect} from 'react'
import {getPosts, getPost, createPost, updatePost, deletePost} from './api'
const App = () => {

  const [posts, setPosts] = useState();

  async function makePost(){
    let postObject = {
      title:'aaa1',
      description:'aaa1',
      content:'aaa1',
      author:'aaa1',
      dateCreated: new Date()
    }
    createPost(postObject)
  }

  
  /*useEffect(() => {
    async function loadAllPosts() {
      let data = await getPosts()
        if(data){
          setPosts(data)
        }
    }
    loadAllPosts()
  }, []);*/

  return (
    <div className='app'>
      <button onClick={makePost}>Click</button>
    </div>
  )
}

export default App;