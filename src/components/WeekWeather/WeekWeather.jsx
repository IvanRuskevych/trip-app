import PropTypes from "prop-types";
import icons from "../../../public/assets/weatherIcons/index.js";
import styles from "./WeekWeather.module.scss"

const WeekWeather = ({weatherWeek}) => {
    return (
        <>
            {weatherWeek && <h2 className={styles.title}>Week</h2>}
            <ul className={styles.weatherList}>
                {weatherWeek && weatherWeek.map((item, index) => (
                    <li key={index} className={styles.day}>
                        <p className={styles.weekDay}>{item.weekDay}</p>
                        <img src={icons[item.icon]} alt={item.icon} className={styles.dayIcon}/>
                        <p className={styles.text}>{`${item.tempmax}°/${item.tempmin}°`}</p>
                    </li>))}
            </ul>
        </>
    );
};


WeekWeather.propTypes = {
    weatherWeek: PropTypes.array
}
export default WeekWeather;