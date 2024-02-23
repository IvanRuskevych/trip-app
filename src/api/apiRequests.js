import axios from "axios";
import {calculatedDate} from "../utils";

const API_KEY = "2XAN9M4H2B4ER5BFFHXXH557K"
const mainInstance = axios.create({
    baseURL: "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline"
})

export const fetchWeekWeather = async (city, startDate) => {
    const endDate = calculatedDate(startDate, 6);
    try {
        const response = await mainInstance.get(`/${city}/${startDate}/${endDate}?unitGroup=metric&include=days&key=${API_KEY}&contentType=json`)
        return response.data;
    } catch (error) {
        console.log("Error fetching weather data:", error)
        throw error
    }
}

export const fetchTodayWeather = async (city) => {
    try {
        const response = await mainInstance.get(`/${city}/today?unitGroup=metric&include=days&key=${API_KEY}&contentType=json`)
        return response.data;
    } catch (error) {
        console.log("Error fetching weather data:", error)
        throw error

    }
}
