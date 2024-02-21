import {useEffect, useState} from 'react';
import styles from "./TripsList.module.scss"

import imgs from "../assets/images/london-min.jpg"
import ModalAddTrip from "../ModalAddTrip/ModalAddTrip.jsx";
import {fetchTodayWeather, fetchWeather} from "../api/apiRequests.js";
import {getWeatherDataForWeek} from "../utils/weatherDataForWeek.js";

const TripsList = () => {

    const [trips, setTrips] = useState([])
    const [selectedTrip, setSelectedTrip] = useState(null)
    const [tripWeather, setTripWeather] = useState(null)
    const [tripWeatherToday, setTripWeatherToday] = useState(null)
    const [showModal, setShowModal] = useState(false)
    // console.log("selectedTrip", selectedTrip)
    console.log("tripWeather", tripWeather)
    // console.log("tripWeatherToday", tripWeatherToday)

    useEffect(() => {
        const storedTrips = JSON.parse(localStorage.getItem('trips'));
        if (storedTrips) setTrips(storedTrips)
    }, []);

    useEffect(() => {
        if (trips?.length) {
            localStorage.setItem('trips', JSON.stringify(trips));
        }
    }, [trips]);

    useEffect(() => {
        if (selectedTrip) {
            const {city, startDate} = selectedTrip

            fetchWeather(city, startDate).then(weatherData => {
                const weatherDataForWeek = getWeatherDataForWeek(weatherData.days)
                setTripWeather(weatherDataForWeek)
            }).catch(error => {
                console.error("Error fetching weather data:", error);
            })

            fetchTodayWeather(city).then(weatherData => {
                setTripWeatherToday(weatherData)
            }).catch(error => {
                console.error("Error fetching weather data:", error);
            })
        }


    }, [selectedTrip]);


    const addTrip = (trip) => {
        setTrips(prevTrips => [...prevTrips, trip]);
    };


    return (

        <>
            <div className={styles.wrapper}>
                <ul className={styles.tripsList}>
                    {trips.map((trip, index) =>
                        (<li key={index} className={styles.trip}>
                            <div onClick={() => setSelectedTrip(trip)}>
                                <img src={imgs} alt="city photo" width={"250px"}/>
                                <div className={styles.textWrapper}>
                                    <p className={styles.TitleCity}>{trip.city}</p>
                                    <p className={styles.textDate}>{trip.startDate} - {trip.endDate}</p>
                                </div>
                            </div>
                        </li>))}
                </ul>
                <button onClick={() => setShowModal(true)}>Add trip</button>
            </div>
            <ModalAddTrip addTrip={addTrip} isOpenModal={showModal} setIsOpenModal={setShowModal}/>
        </>
    );
};

export default TripsList;