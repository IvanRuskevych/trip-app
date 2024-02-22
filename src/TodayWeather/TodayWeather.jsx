import PropTypes from "prop-types";
import styles from "./TodayWeather.module.scss";
import icon from "../assets/weatherIcons/rain.svg";

const TodayWeather = ({city, weatherToday}) => {
    const weather = weatherToday && weatherToday[0];

    if (!weather) {
        return null;
    }

    return (
        <div className={styles.weatherContainer}>
            <p className={styles.text}>{weather.weekDay}</p>
            <div className={styles.wrapper}>
                <img src={icon} alt={weather.icon} className={styles.icon}/>
                <p className={styles.textWeather}>{`${weather.temp}`}<sup>°C</sup></p>
            </div>
            <p className={styles.text}>{city}</p>

        </div>
    );
};

TodayWeather.propTypes = {
    weatherToday: PropTypes.array,
    city:PropTypes.string
};

export default TodayWeather;
