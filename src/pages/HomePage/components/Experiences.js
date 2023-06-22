import styles from '../styles/Experiences.module.css';


const Experiences = () => {
    return (
        <div className={styles.ExperienceDiv}>
            <div className={styles.masterExpDiv}>
                <h1><b>Amazing Experiences</b></h1>
            </div>

            <div className={styles.masterBannerCont}>
                <div className={styles.bannerContainer}>


                    <div className={styles.bannerDiv}>
                        <div className={styles.textContent}>

                            <h1>Best Attractions deals</h1>
                            <span>Enjoy these cool Attractions deals</span>
                            <div>
                                <button>Click to see more details</button>
                            </div>

                        </div>
                        <img src='/Rectangle 22new.png' />
                        

                    </div>

                    <div className={styles.bannerDiv}>
                        <div className={styles.textContent}>

                            <h1>Best Events deals</h1>
                            <span>Enjoy these cool Events deals</span>
                            <div>
                                <button>Click to see more details</button>
                            </div>

                        </div>
                        <img src='/Banner(Events).png' />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Experiences;