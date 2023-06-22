import styles from '../styles/Attractions.module.css';

const Events = () => {

    const Attractions = [
        {
            id: 1,
            imageSrc: '/The-Four-Best-Cities-in-America-for-Events.png',
            price: 'from $1.314',
            title: 'Attractions passes',
            text: "2011 Super Junior SM Town Live '10 World Tour New York City",
        },
        {
            id: 2,
            imageSrc: 'wnkhtwo4n0dhe6zmrbcs.png',
            price: 'from $1.314',
            title: 'Attractions passes',
            text: "2011 Super Junior SM Town Live '10 World Tour New York City",
        },
        {
            id: 3,
            imageSrc: '/The-Four-Best-Cities-in-America-for-Events.png',
            price: 'from $1.314',
            title: 'Attractions passes',
            text: "2011 Super Junior SM Town Live '10 World Tour New York City",
        },
        {
            id: 4,
            imageSrc: 'wnkhtwo4n0dhe6zmrbcs.png',
            price: 'from $1.314',
            title: 'Attractions passes',
            text: "2011 Super Junior SM Town Live '10 World Tour New York City",
        }
    ]

    return (

        <div className={styles.masterAttracDv}>

            <div className={styles.attractDiv}>
                <h1><b>Events</b></h1>
                <div className={styles.anContainer}>
                    <div className={styles.gridContainer}>
                        {Attractions.map(attraction => {
                            return (
                                <div className={styles.card}>
                                    <div className={styles.imgContent}>
                                        <img src={attraction.imageSrc} />
                                        <span>{attraction.price}</span>
                                    </div>

                                    <div className={styles.textContentCont}>
                                        <div className={styles.content}>
                                            <h3>{attraction.title}</h3>

                                            <span>{attraction.text}</span>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Events;