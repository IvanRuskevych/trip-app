import {getDayOfWeek} from "./getDayOfWeek.js";
export const weatherData = (data) => {
    return data.map((item) => {
        const {datetime, icon, tempmax, tempmin, temp} = item
        const weekDay = getDayOfWeek(datetime)
        const iconName = icon.replace(/-/g, "");
        return {weekDay, icon: iconName, tempmax, tempmin, temp}
    })
}