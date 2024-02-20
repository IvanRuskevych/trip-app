import axios from "axios";

const API_KEY="3G8UQ7LAJ2F78S9TF9P97DVZB"
const mainInstance = axios.create({
    baseURL: "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline"
})


export const fetchWeather = async (city, startDate, endDate) => {
    try {
        const response = await mainInstance.get(`/${city}/${startDate}/${endDate}?unitGroup=metric&include=days&key=${API_KEY}&contentType=json`)
       console.log("data", response.data)
        return response.data;
    } catch (error) {
        console.log("Error fetching weather data:", error)
        throw error

    }
}

export const fetchTodayWeather  = async (city) => {
    try {
        const response = await mainInstance.get(`/${city}/today?unitGroup=metric&include=days&key=${API_KEY}&contentType=json`)
        console.log("data", response.data)
        return response.data;
    } catch (error) {
        console.log("Error fetching weather data:", error)
        throw error

    }
}
