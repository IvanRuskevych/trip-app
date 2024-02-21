export const getWeatherDataForWeek = (data) => {
    return data.map((item) => {
        const {datetime, icon, tempmax, tempmin} = item
        return {datetime, icon, tempmax, tempmin}
    })
}