import {useEffect, useState} from 'react';
import PropTypes from "prop-types";
import ModalAddTrip from "../ModalAddTrip/ModalAddTrip.jsx";
import styles from "./TripsList.module.scss"

import imgs from "../assets/images/london-min.jpg"

const initialSelectedTrip = [
    {city: "London", startDate: new Date().toISOString().slice(0, 10), endDate: new Date().toISOString().slice(0, 10)}]

const TripsList = ({onTripSelect}) => {

    const [trips, setTrips] = useState([])
    const [showModal, setShowModal] = useState(false)
    const [searchText, setSearchText] = useState('');
    const [filteredTrips, setFilteredTrips] = useState([]);

    useEffect(() => {
        const storedTrips = JSON.parse(localStorage.getItem('trips'));
        if (storedTrips) {
            setTrips(storedTrips)
        } else {
            setTrips(initialSelectedTrip)
        }
    }, []);

    useEffect(() => {
        if (trips?.length) {
            localStorage.setItem('trips', JSON.stringify(trips));
        }
    }, [trips]);


    useEffect(() => {
        if (!searchText.trim()) {
            setFilteredTrips(trips);
        } else {
            const filteredResult = trips.filter((trip) => trip.city.toLowerCase().includes(searchText.toLowerCase()));
            setFilteredTrips(filteredResult);
        }
    }, [searchText, trips]);

    const addTrip = (trip) => {
        setTrips(prevTrips => [...prevTrips, trip]);
    };


    return (
        <>
            <div className={styles.searchWrapper}>
                <input
                    type="text"
                    placeholder="Search your trip"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    className={styles.search}
                />
                <img src="../assets/search.svg" alt="x" className={styles.icon}/>
            </div>

            <div className={styles.wrapper}>

                <ul className={styles.tripsList}>
                    {filteredTrips?.map((trip, index) =>
                        (<li key={index} className={styles.trip}>
                            <div onClick={() => onTripSelect(trip)}>
                                <img src={imgs} alt="city photo" width={"200px"}/>
                                <div className={styles.textWrapper}>
                                    <p className={styles.TitleCity}>{trip.city}</p>
                                    <p className={styles.textDate}>{trip.startDate} - {trip.endDate}</p>
                                </div>
                            </div>
                        </li>))}
                </ul>
                <button onClick={() => setShowModal(true)} className={styles.btn}>+ <br/> Add trip</button>
            </div>

            <ModalAddTrip addTrip={addTrip} isOpenModal={showModal} setIsOpenModal={setShowModal}/>
        </>
    );
};


TripsList.propTypes = {
    onTripSelect: PropTypes.func.isRequired
}
export default TripsList;