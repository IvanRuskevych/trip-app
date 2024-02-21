import {fetchTodayWeather, fetchWeather} from "../api/apiRequests.js";
import {getWeatherDataForWeek} from "./weatherDataForWeek.js";


export const getWeatherData = (city, startDate, setTripWeather, setTripWeatherToday) => {
    fetchWeather(city, startDate).then(weatherData => {
        const weatherDataForWeek = getWeatherDataForWeek(weatherData.days)
        setTripWeather(weatherDataForWeek)
    }).catch(error => {
        console.error("Error fetching weather data:", error);
    })

    fetchTodayWeather(city).then(weatherData => {
        setTripWeatherToday(weatherData)
    }).catch(error => {
        console.error("Error fetching weather data:", error);
    })
};

export default getWeatherData;