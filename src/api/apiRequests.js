import axios from "axios";
import {calculatedDate} from "../utils";

const API_KEY = "2XAN9M4H2B4ER5BFFHXXH557K"
const mainInstance = axios.create({
    baseURL: "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline"
})

export const fetchWeekWeather = async (city, startDate) => {
    // const endDate = new Date(new Date(startDate).getTime() + 6 * 24 * 60 * 60 * 1000).toISOString().slice(0, 10);
    const endDate = calculatedDate(startDate, 6);
    // console.log("week", startDate, endDate)
    try {
        const response = await mainInstance.get(`/${city}/${startDate}/${endDate}?unitGroup=metric&include=days&key=${API_KEY}&contentType=json`)
        // console.log("data", response.data)
        return response.data;
    } catch (error) {
        console.log("Error fetching weather data:", error)
        throw error

    }
}

export const fetchTodayWeather = async (city) => {
    try {
        const response = await mainInstance.get(`/${city}/today?unitGroup=metric&include=days&key=${API_KEY}&contentType=json`)
        // console.log("data", response.data)
        return response.data;
    } catch (error) {
        console.log("Error fetching weather data:", error)
        throw error

    }
}