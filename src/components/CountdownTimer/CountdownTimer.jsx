import styles from "./CountdownTimer.module.scss"
import PropTypes from "prop-types";
import {useCountdown} from "../../hooks/useCountdown.js";

const CountdownTimer = ({startDate}) => {

    const [days, hours, minutes, seconds] = useCountdown((startDate))

    const isValid = days + hours + minutes + seconds > 0

    return (
        <div className={styles.timer}>
            <div className={styles.field}>
                <span className={styles.value}>{isValid ? days : "00"}</span>
                <span className={styles.label}>Days</span>
            </div>
            <div className={styles.field}>
                <span className={styles.value}>{isValid ? hours : "00"}</span>
                <span className={styles.label}>Hours</span>
            </div>
            <div className={styles.field}>
                <span className={styles.value}>{isValid ? minutes : "00"}</span>
                <span className={styles.label}>Minutes</span>
            </div>
            <div className={styles.field}>
                <span className={styles.value}>{isValid ? seconds : "00"}</span>
                <span className={styles.label}>Seconds</span>
            </div>
        </div>
    );
};


CountdownTimer.propTypes = {
    startDate: PropTypes.string
}
export default CountdownTimer;