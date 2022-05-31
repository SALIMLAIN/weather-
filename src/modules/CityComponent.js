import React from 'react'
import styled from 'styled-components'

const WeatherLogo = styled.img`
width:140px;
height:140px;
margin:40px auto;
`

const ChooseCityLabel = styled.span`
  color:black;
  font-size:18px;
  font-weight:bold;
  margin:15px 0;
`
const SearchBox = styled.form`
  display:flex;
  flex-direction:row;
  border;black solid 1px;
  border-radius:2px;
  color:black;
  font-size:18px;
  font-weight:bold;
  margin:10px auto;
 
  & input{  
   padding:10px;
   font-size:14px;
//    border:none;
//    outline:none;
   font-weight:bold;
  }
  
  & button{  
    padding:10px;
    font-size:14px;
    // border:none;
    // outline:none;
    font-weight:bold;
    color:white;
    background:black;
    cursor:pointer;
   }

`

const CityComponent = (props) => {

  const {updateCity,fetchWeather} = props;

  return (
      <>
        <WeatherLogo src="./icons/perfect-day.svg"></WeatherLogo>
      
        <ChooseCityLabel>Find Weather Of Your City</ChooseCityLabel>
       
        <SearchBox onSubmit={fetchWeather}>
               <input placeholder='ENTER CITY' type="text" onChange={(e)=>updateCity(e.target.value)} />
               <button type='submit'>Search</button>
        </SearchBox>
    </>
  )
}

export default CityComponent