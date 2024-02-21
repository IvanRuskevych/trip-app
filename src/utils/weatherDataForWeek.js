import {getDayOfWeek} from "./getDayOfWeek.js";

export const getWeatherDataForWeek = (data) => {
    return data.map((item) => {
        const {datetime, icon, tempmax, tempmin} = item
        const weekDay = getDayOfWeek(datetime)
        return {weekDay, icon, tempmax, tempmin}
    })
}