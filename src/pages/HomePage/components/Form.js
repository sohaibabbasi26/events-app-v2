import styles from '../styles/form.module.css';

const Form = () => {
    return (
        <div className={styles.formDiv}>
            <div className={styles.form}>
                <input
                    type="email"
                    placeholder={"Enter your email"}
                    className={styles.input}
                    aria-label="Search"
                />
                <button>Subscribe</button>
            </div>
        </div>
    )
}

export default Form;