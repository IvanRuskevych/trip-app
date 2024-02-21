import {Title} from './Title/Title';
import styles from "./App.module.scss"
import TripsList from "./TripsList/TripsList.jsx";
import WeekWeather from "./WeekWeather/WeekWeather.jsx";
import {useEffect, useState} from "react";
import getWeatherData from "./utils/getWeatherData.js";

function App() {
    const [selectedTrip, setSelectedTrip] = useState(null)
    const [tripWeather, setTripWeather] = useState(null)
    const [tripWeatherToday, setTripWeatherToday] = useState(null)
    // console.log("selectedTrip", selectedTrip)
    console.log("tripWeather", tripWeather)
    // console.log("tripWeatherToday", tripWeatherToday)

    const handleTripSelect = (trip) => {
        setSelectedTrip(trip)
        const {city, startDate} = trip
        getWeatherData(city, startDate, setTripWeather, setTripWeatherToday)
    }


    useEffect(() => {
        const weather = JSON.parse(localStorage.getItem('weather'));
        if (weather) setTripWeather(weather)
    }, []);

    useEffect(() => {
        if (tripWeather?.length) {
            localStorage.setItem('weather', JSON.stringify(tripWeather));
        }
    }, [tripWeather]);

    return (
        <div className={styles.container}>
            <Title/>
            <TripsList onTripSelect={handleTripSelect}/>
            <WeekWeather tripWeather={tripWeather}/>
        </div>
    );
}

export default App;
