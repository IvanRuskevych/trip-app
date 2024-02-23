export const sortTripsByStartDate = (trips) => {
    const sortedTrips = trips.sort((a, b) => {
        const startDateA = new Date(a.startDate).getTime()
        const starDateB = new Date(b.startDate).getTime()

        return startDateA - starDateB
    })
    return sortedTrips
};
