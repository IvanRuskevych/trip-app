import {Title} from './Title/Title';
import styles from "./App.module.scss"
import TripsList from "./TripsList/TripsList.jsx";

function App() {
    return (
        <div className={styles.container}>
            <Title/>
            <TripsList/>
        </div>
    );
}

export default App;
