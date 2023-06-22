import Form from 'react-bootstrap/Form';
import styles from '../styles/SearchBar.module.css';

const SeachBar = () => {
    return(
        <div className={styles.cover}>
            {/* <img src='Vectornewsearch.svg' className={styles.searchLogo} /> */}
            <div  className={styles.form}>
            <input
              type="search"
              placeholder={' Search...'}
              className={styles.input}
              aria-label="Search"
            />
            </div>
        </div>
    )
}

export default SeachBar;