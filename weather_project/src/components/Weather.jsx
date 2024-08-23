import "../css/weather.css"
import searchlogo from '../assets/search.png'

import windlogo from '../assets/wind.png'
import snowlogo from '../assets/snow.png'
import rainlogo from '../assets/rain.png'
import mistlogo from '../assets/mist.png'
import humiditylogo from '../assets/humidity.png'
import drizzlelogo from '../assets/drizzle.png'
import cloudslogo from '../assets/clouds.png'
import clearlogo from '../assets/clear.png'
import React, { useState } from 'react'


const Weathercontent = (props) => {
  return (
    <>
      <div className="weathercontent">
        <h3 className="degree">{props.degree}°C</h3>
        <div className="city">{props.city}</div>
        <div className="country">{props.country}</div>
      </div>
      <div className="lat_log_container">
        <div className="latitude_container">
            <div className="text">Latitude</div>
            <div className="value">{props.lat}</div>
        </div>
        <div className="longitude_container">
            <div className="text">Longitude</div>
            <div className="value">{props.log}</div>
        </div>
      </div>
      <div className="humidity_windspeed_container">
        <div className="humidity_container">
            <img src={humiditylogo} alt="humidity" />
            <div className="value">{props.humidity}%</div>
            <div className="text">Humidity</div>
        </div>
        <div className="wind_container">
            <img src={windlogo} alt="wind" />
            <div className="value">{props.wind} km/h</div>
            <div className="text">Wind Speed</div>
        </div>
      </div>

    </>
  )
}




const Weather = () => {
    const [search,setSearch] = useState("");
    const [degree,setDegree] = useState();
    const [city,setCity] = useState("");
    const [country,setCountry] = useState("");
    const [lat,setLat] = useState();
    const [log,setLog] = useState();
    const [humidity,setHumidity] = useState();
    const [wind,setWind] = useState();
    const [loading,setLoading] = useState(false)

    const weathersearch = async () => {
         setLoading(true);
         const key="142d478af65bc06ddc53ad26b9b7fe0c";
         const url=`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${key}&units=metric`
         try{
             const res=await fetch(url);
             const data=await res.json();
              setCity(data.name);
              setDegree(data.main.temp);
              setCountry(data.sys.country);
              setLat(data.coord.lat);
              setLog(data.coord.lon);
              setHumidity(data.main.humidity);
              setWind(data.wind.speed);

         }catch(error){
            console.error(error);
         }finally{
          setLoading(false);
         }
    }
    const handleKeyDown = (e) =>{
        if(e.key === 'Enter'){
          weathersearch();
        }
    }
  return (
    <>
       <div className="container">
            <div className="search-container">
                <input type="text" className="search" onChange={(e)=>setSearch(e.target.value)} onKeyDown={handleKeyDown} />
                <img src={searchlogo} alt="search" />
            </div>

            <img src={cloudslogo} alt="" className="climate-img" onClick={weathersearch} />
             
            {!loading && <Weathercontent 
                degree={degree} 
                city={city}
                country={country}
                lat={lat}
                log={log}
                humidity={humidity}
                wind={wind}
            />}
       </div>
    </>
  )
}

export default Weather
