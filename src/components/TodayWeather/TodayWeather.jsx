import PropTypes from "prop-types";
import CountdownTimer from "../CountdownTimer/CountdownTimer.jsx";
import icons from "../../../public/assets/weatherIcons/index.js";
import ping from "../../../public/assets/images/ping-icon.png"
import styles from "./TodayWeather.module.scss";

const TodayWeather = ({city, weatherToday, startDate}) => {
    const weather = weatherToday && weatherToday[0];

    return (
        <div className={styles.weatherContainer}>
            <img src={ping} alt={"ping"} className={styles.iconPing}/>

            <p className={styles.text}>{weather?.weekDay}</p>
            <div className={styles.wrapper}>
                <img src={icons[weather?.icon]} alt={weather?.icon} className={styles.iconWeather}/>
                <p className={styles.textWeather}>{`${weather?.temp}`}<sup>°C</sup></p>
            </div>
            <p className={styles.textCity}>{city}</p>

            <CountdownTimer startDate={startDate}/>
        </div>
    );
};

TodayWeather.propTypes = {
    weatherToday: PropTypes.array,
    city: PropTypes.string,
    startDate: PropTypes.string

};

export default TodayWeather;
