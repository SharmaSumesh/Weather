import { useEffect, useState } from 'react';
import './App.css';
function App() {
  const [city,setcity] = useState(null);
  const [search,setsearch] = useState("mumbai");
  useEffect(()=>{
    const fetchApi = async()=>{
      const url = `https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}`;
      const response = await fetch();
    }
    fetchApi();
  })
  return (
    <>
    <div className="App">
       <input type = "text" placeholder='Enter the city'/>

        </div>
        <div className='info'>
          <h3>{city}</h3>
          <h1 className='temp'>temp</h1>
          <h5>23.4|50.c</h5>


        </div>
        <div className='wave-one'>another data</div>
        </>
  );
}

export default App;
