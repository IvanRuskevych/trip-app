import PropTypes from "prop-types";
import styles from "./WeekWeather.module.scss"

import icon from "../assets/weatherIcons/rain.svg"

// const path=path(__dirname, )
const WeekWeather = ({tripWeather}) => {
    return (
        <ul className={styles.weatherList}>
            {tripWeather && tripWeather.map((item, index) => (
                <li key={index} className={styles.day}>
                    <p className={styles.text}>{item.weekDay}</p>
                    <img src={icon} alt={item.icon} className={styles.dayIcon}/>
                    <p className={styles.text}>{`${item.tempmax}°/${item.tempmin}°`}</p>
                </li>))}
        </ul>
    );
};


WeekWeather.propTypes = {
    tripWeather: PropTypes.array
}
export default WeekWeather;