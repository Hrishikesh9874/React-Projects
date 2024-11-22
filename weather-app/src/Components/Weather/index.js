import { useEffect, useState } from "react"
import Search from "../Search"


export default function Weather(){

    const [search, setSearch] = useState('');
    const [loading, setLoading] = useState(false);
    const [weatherData, setWeatherData] = useState(null);
    const [error, setError] = useState(null);

    async function fetchWeatherData(param){
        setLoading(true);
        setError('');
        try{
            if(param === ""){
                param = "New Delhi";
            }
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${param}&appid=1b3e6cb62d08a069e5a478fb0f578b0a`)
            const data = await response.json();
            if(data){
                if(data.cod !== 200){
                    setError(data.message);
                    setLoading(false);
                    return;
                }
                setWeatherData(data);                
                setLoading(false);
            }
        }catch(e){
            setError('Unable to fetch Weather Data');
            setLoading(false);
        }
    }

    async function handleSearch(){
        fetchWeatherData(search);
    }

    function getCurrentDate(){
        return new Date().toLocaleDateString('en-us', {
            weekday: 'long',
            month: 'long',
            day: 'numeric',
            year: 'numeric'
        })
    }

    useEffect(()=>{
        fetchWeatherData('Motihari');
    }, []);


    return(
        <div>
            <Search
                search={search}
                setSearch={setSearch}
                handleSearch={handleSearch}
            ></Search>
            {
                loading ? (<div className="loading">Loading...</div>)
                : error ? ( <div className="loading">{error}</div> )
                : (<div>
                    <div className="city-name">
                        <h2>{weatherData?.name}, <span>{weatherData?.sys?.country}</span></h2>
                    </div>
                    <div className="date">
                        <span>{getCurrentDate()}</span>
                    </div>
                    <div className="temp">
                        {weatherData?.main?.temp}
                    </div>
                    <p className="description">
                        {weatherData && weatherData.weather && weatherData.weather[0] ? weatherData.weather[0].description : ''}
                    </p>
                    <div className="weather-info">
                        <div className="column">
                            <div>
                                <p className="wind">{weatherData?.wind?.speed}</p>
                                <p>Wind Speed</p>
                            </div>
                        </div>
                        <div className="column">
                            <div>
                                <p className="humidity">{weatherData?.main?.humidity}%</p>
                                <p>Humidity</p>
                            </div>
                        </div>
                    </div>
                </div>)
            }
        </div>
    )
}