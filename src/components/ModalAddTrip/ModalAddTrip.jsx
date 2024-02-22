import PropTypes from "prop-types";
import {useState, useEffect} from "react";

import icon from '../../../public/assets/svg/close.svg';
import styles from "./ModalAddTrip.module.scss";

import {cities} from "../../data/index.js";

const ModalAddTrip = ({addTrip, isOpenModal, setIsOpenModal}) => {
    const [city, setCity] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [isFormValid, setIsFormValid] = useState(false)


    useEffect(() => {
        const handleEscKey = (event) => {
            if (event.keyCode === 27) {
                setIsOpenModal(false);
            }
        };

        if (isOpenModal) {
            document.addEventListener("keydown", handleEscKey);
        }
        return () => {
            document.removeEventListener("keydown", handleEscKey);
        };
    }, [isOpenModal, setIsOpenModal]);


    useEffect(() => {
        checkFormValidity()
    }, [city, startDate, endDate])
    const handleSubmitForm = (e) => {
        e?.preventDefault();
        addTrip({city, startDate, endDate});
        setIsOpenModal(false);
        handleClearForm(e)
    };

    const handleClearForm = (event) => {
        event.preventDefault();
        setCity("");
        setStartDate("");
        setEndDate("");
    };

    const checkFormValidity = () => {
        const isValid = city !== '' && startDate !== '' && endDate !== '';
        setIsFormValid(isValid);
    };

    return (
        <div className={`${styles.modal} ${isOpenModal ? styles.open : ""}`}>
            <div className={styles.modalTitle}>
                <h1>Create trip</h1>
                <button type="button" className={styles.btnClose} onClick={() => setIsOpenModal(false)}>
                    <img src={icon} alt="icon close"/>
                </button>
            </div>

            <form action="" id="tripForm" className={styles.modalForm} aria-required={"true"}>
                <label htmlFor="city" className={styles.label}>
                    City
                </label>
                <select
                    id="city"
                    value={city}
                    onChange={(event) => setCity(event.target.value)}
                    required
                    className={styles.input}
                >
                    <option value="">Please select a city</option>
                    {cities.map((item, index) => (<option key={index} value={item}>{item}</option>))}
                </select>

                <label htmlFor="startDate" className={styles.label}>
                    Start date
                </label>
                <input
                    type="date"
                    id="startDate"
                    value={startDate}
                    onChange={(event) => setStartDate(event.target.value)}
                    required
                    className={styles.input}
                />

                <label htmlFor="endDate" className={styles.label}>
                    End date
                </label>
                <input
                    type="date"
                    id="endDate"
                    value={endDate}
                    onChange={(event) => setEndDate(event.target.value)}
                    required
                    className={styles.inputEndDate}
                />
            </form>

            <div className={styles.btnWrapper}>
                <button type="button" onClick={handleClearForm} className={styles.btn}>
                    Cancel
                </button>
                <button type="button" form="tripForm" className={styles.btnSave} onClick={handleSubmitForm}
                        disabled={!isFormValid}>
                    Save
                </button>
            </div>
        </div>
    );
};

ModalAddTrip.propTypes = {
    addTrip: PropTypes.func,
    isOpenModal: PropTypes.bool,
    setIsOpenModal: PropTypes.func
};

export default ModalAddTrip;
