import React, { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
  const [fruits, setFruits] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3005/')
      .then(res => setFruits(res.data.fruits))
      .catch(e => console.warn(e))
  }, [])

  return (
    <div className="App">
      <h1>Hello :)</h1>
      <h2>Is my CD working ? :o</h2>
      { fruits?.length > 0 ? (
        <>
          <h3>Here are some fruits: </h3>
          { fruits.map(fruit => <div key={fruit}>{fruit}</div>) }
        </>
      ) : (
        <>
          <h3>No fruits :(</h3>
        </>
      )}
    </div>
  );
}

export default App;
