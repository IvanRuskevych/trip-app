export function getDayOfWeek(date) {
    // const date = new Date(date);
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

// const startDate = "2024-02-22";
// const dayOfWeek = getDayOfWeek(startDate);
// console.log("dayOfWeek", dayOfWeek);
