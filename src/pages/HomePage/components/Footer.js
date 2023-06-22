import Form from './form';
import styles from '../styles/footer.module.css';

const Footer = () => {

    return (
        <div className={styles.parentDiv}>

            <div className={styles.footerDiv}>
                <div className={styles.listContainer}>
                    <div className={styles.listOne}>
                        <h1>COMPANY</h1>

                        
                            <ul>
                                <li>Help Center</li>
                                <li>About Us</li>
                                <li>News</li>
                                <li>Careers</li>
                                <li>Travel Agents</li>
                                <li>Cookies</li>
                            </ul>
                        
                    </div>
                    <div className={styles.listTwo}>
                        

                        <div className={styles.socialContainer}>
                        <h1>SOCIAL</h1>
                        <div class={styles.masterCover}>
                            <div class={styles.cover}>
                            <img src='/fb.png'/>
                            <img src='/Youtube.png'/>
                            <img src='/Twitter.png'/>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;