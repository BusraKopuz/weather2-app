import React from 'react';
import './Card.css'

const Card = ({ weatherData}) => {

    if (!weatherData) {
        return null; // Veri yokken hiçbir şey gösterme
    }

    if (!weatherData.main) {
        return <p>Yükleniyor..</p>; // Sadece veri yüklenirken göster
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
