import React, {useState, useEffect} from 'react'
import axios from 'axios'
const App = () => {

  const [data, setData] = useState();

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

  return (
    <div className='app'>
      {JSON.stringify(data)}
    </div>
  )
}

export default App;