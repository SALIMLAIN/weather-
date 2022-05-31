import './App.css';
import axios from "axios";
import styled from "styled-components"
import CityComponent from './modules/CityComponent';
import WeatherInfoComponent from './modules/WeatherInfoComponent';
import { useState } from 'react';

const Container = styled.div`
 display: flex;
 flex-direction : column;
 margin:auto;
 align-items:center;
 box-shadow: 0 3px 6px 0 #555;
 padding:20px 10px;
 boder-radius:4px;
 width:380px;
 background:white;
 font-family: Montserrat;
`

const AppLabel = styled.span`
 color:black;
 font-size:18px;
 font-weight:bold:
`


function App() {

  const [city, updateCity] = useState();
  const [weather, updateWeather] = useState();

  const fetchWeather = async(e) =>{
    e.preventDefault();
     const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=747998a47a028eba06cd47417b435031`);
    //  console.log(response);
    updateWeather(response.data);
  }

  return (
   <Container>
     <AppLabel>Weather App</AppLabel>
      {weather ? (
           <WeatherInfoComponent weather={weather}/>
           ) : ( 
           <CityComponent updateCity={updateCity} fetchWeather={fetchWeather}/>
           ) }
   </Container>
  );
}

export default App;
