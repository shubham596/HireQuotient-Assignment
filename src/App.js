import React, { useState, useEffect } from 'react';

import axios from 'axios';
import CustomizedAccordions from './CustomizedAccordions';


const App = () => {
  const [data, setData] = useState([]);
 
  const [fetchingres, fetching] = useState(true);

  useEffect(() => {
 
    const fetchData = async () => {
      try {
       
        const response = await axios.get('https://canopy-frontend-task.vercel.app/api/holdings');
        
        setData(response.data.payload);
        // console.log(response.data.payload)
       
        fetching(false);
      } catch (error) {
        
        console.error('Error is coming while fetching data:', error);
      
        fetching(false);
      }
    };
    fetchData();
  }, []); 

  
  if (fetchingres) {
    return <div>Please wait...fetching</div>;
  }


  return (
    <div>
      <CustomizedAccordions data={data}/>
    </div>
  );
};

export default App;
