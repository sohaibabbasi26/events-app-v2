
import styles from '../styles/NavbarHome.module.css';
import style from '../styles/HeadTwoCont.module.css';
import SeachBar from './SearchBar';

const NavbarHome = () => {

    const features = [
        {
            id: 1,
            text: 'Activities',
            src: '/shopping-mall.svg'
        },
        {
            id: 2,
            text: 'Attractions',
            src: '/eiffel-tower.svg'
        },
        {
            id: 3,
            text: 'Events',
            src: '/destination.svg'
        },
        {
            id: 4,
            text: 'Sports',
            src: '/parachute.svg'
        },
        {
            id: 5,
            text: 'Wifi/sim',
            src: '/skiing.svg'
        }
    ]

    return (
        <div className={styles.containerTwo}>
            <div className={style.headTwo}>
                <div className={styles.navbar}>
                    <div className={styles.container}>
                        <h1><b>Logo</b></h1>
                        <img src="/Vectormenuicon.svg" className={styles.menuIcon} />
                    </div>
                </div>

                <SeachBar />

                <div className={styles.masterContainer}>
                    <div className={styles.featuresDiv}>
                        {
                            features.map(feature => {
                                return (
                                    <div className={styles.feature}>
                                        <div className={styles.circleContainer}>
                                            <img src={feature.src} />
                                        </div>

                                        <h2>{feature.text}</h2>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className={styles.headerFooter}>

                </div>
            </div>
        </div>
    )
}

export default NavbarHome;