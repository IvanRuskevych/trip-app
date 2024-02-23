export function getDayOfWeek(date) {
    const dayOfWeek = new Date(date).getDay();

    const daysOfWeek = [
        {day: "Sunday"},
        {day: "Monday"},
        {day: "Tuesday"},
        {day: "Wednesday"},
        {day: "Thursday"},
        {day: "Friday"},
        {day: "Saturday"}
    ];

    return daysOfWeek[dayOfWeek]?.day;
}
