import {useEffect, useState} from 'react';
import styles from "./TripsList.module.scss"

import imgs from "../assets/images/london-min.jpg"
import ModalAddTrip from "../ModalAddTrip/ModalAddTrip.jsx";
import PropTypes from "prop-types";


const TripsList = ({onTripSelect}) => {

    const [trips, setTrips] = useState([])
    const [showModal, setShowModal] = useState(false)


    useEffect(() => {
        const storedTrips = JSON.parse(localStorage.getItem('trips'));
        if (storedTrips) setTrips(storedTrips)
    }, []);

    useEffect(() => {
        if (trips?.length) {
            localStorage.setItem('trips', JSON.stringify(trips));
        }
    }, [trips]);


    const addTrip = (trip) => {
        setTrips(prevTrips => [...prevTrips, trip]);
    };


    return (

        <>
            <div className={styles.wrapper}>
                <ul className={styles.tripsList}>
                    {trips.map((trip, index) =>
                        (<li key={index} className={styles.trip}>
                            <div onClick={() => onTripSelect(trip)}>
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


TripsList.propTypes = {
    onTripSelect: PropTypes.func.isRequired
}
export default TripsList;