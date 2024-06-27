import { useState} from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import Card from './components/Card';
import './App.css';


function App() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  

  
    const fetchWeatherData = async (city) => {
      const key = process.env.REACT_APP_KEY_API;     
    
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`
        );
        console.log("cevap", response);
    
        if (response.status === 200) {
          console.log(response.data);
          setWeatherData(response.data);
        }
      } catch (error) {
        if (error.response && error.response.status === 404) {
          alert("Böyle Bir Şehir Yok");
          setWeatherData(null);
        } else {
          console.error("Bir hata oluştu:", error);
        } 
      } 
    };
    
    const handleSearch = (e) => {
      e.preventDefault();
      if (city) {
        fetchWeatherData(city);
      }
    };

  
  return (

    <div className="App">
      <h1 className='title'>Hava Durumu Uygulaması</h1>
      <SearchBar city={city} setCity={setCity} onSearch={handleSearch} />
      <p>{error}</p>
      <Card weatherData={weatherData}  />
    </div>
  );
};

export default App;

