import styles from "./AddMovieForm.module.css";

function AddMovieForm() {
    return (
        <div className={styles.container}>
        <section className={styles.form}>
        <div className="form__left">
          <img
            className={styles.form__image}
            src="https://picsum.photos/536/354"
            alt="placeholder"
          />
        </div>
        <div className={styles.form__right}>
        <h2 className={styles.form__title}>Login</h2>
        <form action="/handlelogin">
        <p className={styles.form__group}>
        <label className={styles.form__label} for="username">Username</label><br />
        <input className={styles.form__input} type="text" id="username" name="username" value="username" /><br />
        <label className={styles.form__label} for="password">Password</label><br />
        <input className={styles.form__input} type="password" id="password" name="password" value="Password" /><br /><br />
        </p>
        <button className={styles.form__button}>submit</button>
        </form>
        </div>
        </section>
        </div>
    );
}

export default AddMovieForm;