export const searchTripsByCity = (city, trips, setTrips) => {
    const filteredTrips = trips.filter(trip => trip.city.toLowerCase().includes(city.toLowerCase()));
    setTrips(filteredTrips);
};