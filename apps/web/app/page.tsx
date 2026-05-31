import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.birthdayMain}>
        <div className={styles.balloons}>
          <div className={`${styles.balloon} ${styles.balloon1}`}></div>
          <div className={`${styles.balloon} ${styles.balloon2}`}></div>
          <div className={`${styles.balloon} ${styles.balloon3}`}></div>
          <div className={`${styles.balloon} ${styles.balloon4}`}></div>
          <div className={`${styles.balloon} ${styles.balloon5}`}></div>
        </div>

        <div className={styles.content}>
          <h1 className={styles.mainTitle}>🎉 Happy Birthday! 🎉</h1>
          <h2 className={styles.nameTitle}>Saksham</h2>
          
          <div className={styles.messageContainer}>
            <p className={styles.message}>
              Wishing you the most amazing birthday filled with joy, laughter, and wonderful memories!
            </p>
            <p className={styles.message}>
              May this year bring you endless happiness, success, and all the things your heart desires.
            </p>
            <p className={styles.message}>
              Celebrate today like it's meant to be celebrated – surrounded by love and good vibes!
            </p>
          </div>

          <div className={styles.emojis}>
            <span className={styles.emoji}>🎂</span>
            <span className={styles.emoji}>🎈</span>
            <span className={styles.emoji}>🎁</span>
            <span className={styles.emoji}>🌟</span>
            <span className={styles.emoji}>🎊</span>
          </div>

          <p className={styles.footer}>
            Have an extraordinary day! 🥳
          </p>
        </div>
      </main>
    </div>
  );
}
