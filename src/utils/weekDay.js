function getDayOfWeek(startDate) {
    const date = new Date(startDate);
    const dayOfWeek = date.getDay();

    const daysOfWeek = [
        { name: "Неділя" },
        { name: "Понеділок" },
        { name: "Вівторок" },
        { name: "Середа" },
        { name: "Четвер" },
        { name: "П'ятниця" },
        { name: "Субота" }
    ];

    return daysOfWeek[dayOfWeek]?.name || "Невідомий день";
}

// Приклад використання функції
const startDate = "2024-02-22";
const dayOfWeek = getDayOfWeek(startDate);
console.log("День тижня:", dayOfWeek);
