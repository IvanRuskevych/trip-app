import PropTypes from "prop-types";
import styles from "./WeekWeather.module.scss"

import icon from "../../../public/assets/weatherIcons/rain.svg"

// const path=path(__dirname, )
const WeekWeather = ({weatherWeek}) => {

    return (
        <>
            {weatherWeek && <h2 className={styles.title}>Week</h2>}
            <ul className={styles.weatherList}>
                {weatherWeek && weatherWeek.map((item, index) => (
                    <li key={index} className={styles.day}>
                        <p className={styles.text}>{item.weekDay}</p>
                        <img src={`../../../public/assets/weatherIcons/${item.icon}.svg`} alt={item.icon} className={styles.dayIcon}/>
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