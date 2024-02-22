export const calculateEndDate = (startDate, days) => {
    return new Date(new Date(startDate).getTime() + days * 24 * 60 * 60 * 1000).toISOString().slice(0, 10);
}