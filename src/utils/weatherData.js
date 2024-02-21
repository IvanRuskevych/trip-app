import {getDayOfWeek} from "./getDayOfWeek.js";

export const weatherData = (data) => {
    return data.map((item) => {
        const {datetime, icon, tempmax, tempmin, temp} = item
        const weekDay = getDayOfWeek(datetime)
        return {weekDay, icon, tempmax, tempmin, temp}
    })
}