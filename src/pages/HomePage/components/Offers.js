
import styles from '../styles/offers.module.css';
const Offers = () => {

    return (

        <div className={styles.mainDiv}>
            <div className={styles.offersDiv}>

                <h1><b>Offers to inspire you</b></h1>
                <div className={styles.offersContainer}>
                    <div className={styles.subContainer}>

                        <div className={styles.offerOne}>
                            <img src='/Rectangle 10.svg' />
                        </div>

                        <div className={styles.offerTwo}>
                            <img src='/Rectangle 11 (1).svg' />
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Offers;