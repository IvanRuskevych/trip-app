import PropTypes from "prop-types";

import styles from "../WeekWeather/WeekWeather.module.scss";
import icon from "../assets/weatherIcons/rain.svg";

const TodayWeather = ({selectedTrip, weatherToday}) => {
    const city = selectedTrip && selectedTrip[0].city
    // console.log("selectedTrip", selectedTrip && selectedTrip[0].city)
    // console.log("TodayWeather weatherToday", weatherToday)

    return (
        <ul className={styles.weatherList}>
            {weatherToday?.map((item, index) => (
                <li key={index} className={styles.day}>
                    <p className={styles.text}>{city}</p>
                    <img src={icon} alt={item.icon} className={styles.dayIcon}/>
                    <p className={styles.text}>{`${item.temp}°`}</p>
                </li>))}
        </ul>
    );
};

TodayWeather.propTypes = {
    weatherToday: PropTypes.array,
    selectedTrip: PropTypes.array,
}

export default TodayWeather;