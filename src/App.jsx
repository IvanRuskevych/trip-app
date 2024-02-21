import {Title} from './Title/Title';
import styles from "./App.module.scss"
import TripsList from "./TripsList/TripsList.jsx";
import WeekWeather from "./WeekWeather/WeekWeather.jsx";

function App() {
    return (
        <div className={styles.container}>
            <Title/>
            <TripsList/>
            <WeekWeather />
        </div>
    );
}

export default App;
