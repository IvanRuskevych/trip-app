import styles from "./ModalAddTrip.module.scss"
import {useState} from "react";
import icon from '../assets/icone-close.svg';


const ModalAddTrip = () => {

    const [city, setCity] = useState("")
    const [startDate, setStartDate] = useState("")
    const [endDate, setEndDate] = useState("")
    const [isOpenModal, setIsOpenModal] = useState(false)

    const handleSubmitForm = () => {
        setIsOpenModal(false)
    }

    const handleClearForm = (event) => {
        event.preventDefault()
        setCity("")
        setStartDate("")
        setEndDate("")
    }


    return (
        <div className={`${styles.modal} ${isOpenModal ? styles.open : ""}`}>
            <div className={styles.modalTitle}><h1>Create trip</h1>
                <button type={"button"} className={styles.btnClose} onClick={() => setIsOpenModal(false)}>
                    <img src={icon} alt="icon close"/>
                </button>
            </div>

            <form action="" id="tripForm" className={styles.modalForm}>
                <label htmlFor="city" className={styles.label}>City</label>
                <select id="city" value={city} onChange={(event) => setCity(event.target.value)}
                        required className={styles.input}>

                    <option value={""}>Please select a city</option>
                    <option value={"New York"}>New York</option>
                    <option value={"London"}>London</option>
                </select>

                <label htmlFor="startDate" className={styles.label}>Start date</label>
                <input type="date" id="startDate" value={startDate}
                       onChange={(event) => setStartDate(event.target.value)} required className={styles.input}/>

                <label htmlFor="endDate" className={styles.label}>End date</label>
                <input type="date" id="endDate" value={endDate} onChange={(event) => setEndDate(event.target.value)}
                       required className={styles.inputEndDate}/>
            </form>

            <div className={styles.btnWrapper}>
                <button type={"button"} onClick={handleClearForm} className={styles.btn}>Cancel</button>
                <button type={"submit"} onSubmit={ handleSubmitForm} form="tripForm"
                        className={styles.btnSave}>Save
                </button>
            </div>
        </div>
    );
};

export default ModalAddTrip;