
import Link from "next/link";
import styles from "../styles/popularCities.module.css";

export default function PopularCities() {

    const citiesContent = [
        {
            text: 'Things to do in Chicago'
        },
        {
            text: 'Things to do in California '
        },
        {
            text: 'Things to do in Paris'
        },
        {
            text: 'Things to do in Austrailia'
        },
        {
            text: 'Things to do in America'
        },
        {
            text: 'Things to do in UK'
        },
        {
            text: 'Things to do in Dubai'
        },
        {
            text: 'Things to do in China'
        }
    ]

    return (

        <>
            <div className={styles.txt1}>
                <h2>Popular Cities</h2>
            </div>
            <div className={styles.city}>
                <div className={styles.f_help}>
                    <ul>
                        {
                            citiesContent.splice(0, 4).map(city => {
                                return (
                                    <li className={styles.links_half}>
                                        <Link href="#" className={styles.actualLinks}>{city.text}</Link>
                                        <span>|</span>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>

                <div className={styles.f_about}>
                    <ul>
                        {
                            citiesContent.splice(0, 4).map(city => {
                                return (
                            <li className={styles.links_half}>
                                        <Link href="#" className={styles.actualLinks}>{city.text}</Link>
                                        <span>|</span>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>

            </div>
        </>
    );
}