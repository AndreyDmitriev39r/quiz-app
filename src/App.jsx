import axios from "axios";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const fetchData = async () => {
      const data = await axios('https://opentdb.com/api.php?amount=5&encode=url3986')
      console.log(data);
    }
    fetchData();
  }, [])
  return (
    <div className="App">      
      <h1>Quiz app will be here</h1>     
    </div>
  )
}

export default App
