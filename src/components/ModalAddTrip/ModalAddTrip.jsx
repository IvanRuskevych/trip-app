import styles from "./ModalAddTrip.module.scss";
import {useState, useEffect} from "react";
import icon from '../../../public/assets/icone-close.svg';
import PropTypes from "prop-types";

const ModalAddTrip = ({addTrip, isOpenModal, setIsOpenModal}) => {
    const [city, setCity] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");

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

    const handleSubmitForm = (e) => {
        e?.preventDefault();
        addTrip({city, startDate, endDate});
        setIsOpenModal(false);
    };

    const handleClearForm = (event) => {
        event.preventDefault();
        setCity("");
        setStartDate("");
        setEndDate("");
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
                    <option value={"New York"}>New York</option>
                    <option value={"London"}>London</option>
                    <option value={"Washington"}>Washington</option>
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
                <button type="button" form="tripForm" className={styles.btnSave} onClick={handleSubmitForm}>
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
