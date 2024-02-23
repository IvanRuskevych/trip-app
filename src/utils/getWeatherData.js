import {fetchTodayWeather, fetchWeekWeather} from "../api/apiRequests.js";
import {weatherData} from "./weatherData.js";

export const getWeatherData = (city, startDate, setTripWeather, setTripWeatherToday) => {
    fetchWeekWeather(city, startDate).then(data => {
        const weatherDataForWeek = weatherData(data.days)
        setTripWeather(weatherDataForWeek)
    }).catch(error => {
        console.error("Error fetching weather data:", error);
    })

    fetchTodayWeather(city).then(data => {
        const weatherDataForToday = weatherData(data.days)
        setTripWeatherToday(weatherDataForToday)
    }).catch(error => {
        console.error("Error fetching weather data:", error);
    })
};
