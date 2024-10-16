import React, {useState, useEffect} from 'react'
import axios from 'axios'
const App = () => {

  const [data, setData] = useState();

  async function createPost(){
    let postObject = {
      title:'aaa',
      description:'aaa',
      content:'aaa',
      author:'aaa',
      dateCreated: new Date()
    }
    axios.post("http://localhost:3000/api/posts", postObject)
  }

  /*
  useEffect(() => {
    async function grabData() {
      try {
        const response = await axios.get("http://localhost:3000/api/posts");
        console.log(response);
        if (response.status === 200) {
          setData(response.data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    grabData();
  }, []);
  */


  return (
    <div className='app'>
      <button onClick={createPost}>Click</button>
    </div>
  )
}

export default App;