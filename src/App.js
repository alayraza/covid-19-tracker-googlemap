import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios";
// import MapContainer from './MapContainer';
import GoogleMapReact from 'google-map-react';

function App() {
  const [latest,setlatest]=useState([]);
  const [result,setResults]=useState([]);

  useEffect(()=>{
    axios
      .all([
        axios.get("https://corona.lmao.ninja/v2/all"),
        axios.get("https://corona.lmao.ninja/v2/countries"),
      ])
      .then((ResponseArr)=>{
        setlatest(ResponseArr[0].data)
        setResults(ResponseArr[1].data)
        console.log(ResponseArr[0].data);
      })
      .catch((err)=>{
        console.log(err);
      });
  },[]);
    const date = new Date(parseInt(latest.updated));
    const lastUpadte =date.toString();

    const countriesLocation =result.map((data,i)=>{
    return (
        <div
          lat={data.countryInfo.lat}
          lng={data.countryInfo.long}
          style={{
            color:"red",
            backgroundColor:"#FFF",
            height:"40px",
            width:"40px",
            textAlign:"center",
            borderRadius:"30%",
          }}
        >
          <img height="20" src={data.countryInfo.flag}/><br/>
          {data.cases}
        </div>
      )

    })
  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyBEijR15QyAg0hAkXtYZ1b3Cul6PuhHfBE"}}
        defaultCenter={{lat: 30.3753,lng: 69.3451}}
        defaultZoom={4}
      >
        {countriesLocation}
      </GoogleMapReact>
    </div>
      // <MapContainer countriesLocation={countriesLocation}/>
  );
}

export default App;
