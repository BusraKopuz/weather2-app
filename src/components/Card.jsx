import React from 'react';
import './Card.css'

const Card = ({ weatherData}) => {

    if (!weatherData) {
        return null; 
    }

    if (!weatherData.main) {
        return <p>Yükleniyor..</p>; 
    }
   
    const tempInCelsius = Math.round(weatherData.main.temp - 273.15);

    return (
        <div className="card">
            <h2>{weatherData.name}</h2>
            <p>Sıcaklık: {tempInCelsius} °C </p>
            <p>Hava Durumu: {weatherData.weather[0].description}</p>
        </div>
    );
};

export default Card;
