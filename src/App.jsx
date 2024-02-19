import {Title} from './Title/Title';
import ModalAddTrip from "./ModalAddTrip/ModalAddTrip.jsx";
import styles from "./App.module.scss"
function App() {
    return (
        <div className={styles.container}>
            <Title/>
            <ModalAddTrip/>
        </div>
    );
}

export default App;
