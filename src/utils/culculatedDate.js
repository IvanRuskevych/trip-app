export const calculatedDate = (date, days) => {
    return new Date(new Date(date).getTime() + days * 24 * 60 * 60 * 1000).toISOString().slice(0, 10);
}