import Attractions from './Attractions';
import styles from '../styles/Body.module.css';
import Offers from './Offers';
import Events from './Events';
import Experiences from './Experiences';
import PopularCities from './PopularCities';
import PopularAttractions from './PopularAttractions';

const Body = () => {

    return( 
        <div className={styles.body}>
            <Offers />
            <Attractions />
            <Events />
            <Experiences />
            <PopularCities />
            <PopularAttractions />
        </div>
    )
}

export default Body;