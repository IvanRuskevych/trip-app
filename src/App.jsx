import {Title} from './Title/Title';
import styles from "./App.module.scss"
import TripsList from "./TripsList/TripsList.jsx";
import WeekWeather from "./WeekWeather/WeekWeather.jsx";
import {useEffect, useState} from "react";
import getWeatherData from "./utils/getWeatherData.js";
import TodayWeather from "./TodayWeather/TodayWeather.jsx";

const initialSelectedTrip = [
    {city: "London", startDate: new Date().toISOString().slice(0, 10), endDate: new Date().toISOString().slice(0, 10)}]

function App() {
    const [selectedTrip, setSelectedTrip] = useState(null)
    const [weatherWeek, setWeatherWeek] = useState(null)
    const [weatherToday, setWeatherToday] = useState(null)
    const [city, setCity] = useState("")
    // console.log("selectedTrip", selectedTrip)
    // console.log("weatherWeek", weatherWeek)
    // console.log("weatherToday", weatherToday)
    // console.log("city", city)

    const handleTripSelect = (trip) => {
        setSelectedTrip([trip])
        const {city, startDate} = trip
        setCity(city)
        getWeatherData(city, startDate, setWeatherWeek, setWeatherToday)
    }


    useEffect(() => {
        const selectedTrip = JSON.parse(localStorage.getItem("selectedTrip"))
        const weatherWeek = JSON.parse(localStorage.getItem('weatherWeek'));
        const weatherToday = JSON.parse(localStorage.getItem("weatherToday"))
        if (selectedTrip) {
            setSelectedTrip(selectedTrip)
        } else{setSelectedTrip(initialSelectedTrip)}
        if (weatherWeek) setWeatherWeek(weatherWeek)
        if (weatherToday) setWeatherToday(weatherToday)
        // if (!selectedTrip && !weatherWeek && !weatherToday) getWeatherData({...initialSelectedTrip, setWeatherWeek, setWeatherToday})
    }, []);

    useEffect(() => {
        if (selectedTrip?.length) localStorage.setItem('selectedTrip', JSON.stringify(selectedTrip));
        if (weatherWeek?.length) localStorage.setItem('weatherWeek', JSON.stringify(weatherWeek));
        if (weatherToday?.length) localStorage.setItem('weatherToday', JSON.stringify(weatherToday));

    }, [selectedTrip, weatherWeek, weatherToday]);

    return (
        <div className={styles.container2}>
            <div className={styles.container}>
                <Title/>
                <div>
                    <TripsList onTripSelect={handleTripSelect}/>
                    <WeekWeather weatherWeek={weatherWeek}/>
                </div>
            </div>
            <TodayWeather city={city} weatherToday={weatherToday}/>
        </div>
    )
        ;
}

export default App;
