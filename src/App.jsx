import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TopSpots from './TopSpots';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  const [topspots, setTopspots] = useState([]);

  console.log(topspots);
  useEffect(() => {
    axios
      .get('https://ccc.helloworldbox.com/items/top_spots')
      .then(response => response.data.data)
      .then(data => setTopspots(data));
  }, []);

  return (
   
    <div className="table-responsive container">
      <h1>San Diego Top Spots</h1>
      <p>A list of the top 30 places to see in San Diego, California.</p>
      <TopSpots spots={topspots}/>
    </div>
    
  );
};

export default App;