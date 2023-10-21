import Image from 'next/image';
import styles from '../styles/Contact.module.css';

export default function Contact() {
    return (
        <div className={styles.container}>
            <div className={styles.address_container}>
                <p className={styles.title }>Asmar Studio, Inc.</p>
                <p className={styles.body_text }>1244 W. 132nd St. Suite E<br />Gardena, CA 90247</p>
            </div>
            <div className={styles.phone_container}>
                <p className={styles.title}>Phone</p>
                <p className={styles.body_text}>(310)-817-4208</p>
            </div>
            <div className={styles.email_container}>
                <p className={styles.title}>Email</p>
                <p className={styles.body_text}>Peter@AsmarStudio.com</p>
            </div>
            <div className={styles.social_container}>
                <p className={styles.title}>Follow Us</p>
                <div className={styles.logo_container}>
                    <a href="https://www.instagram.com/asmarstudio/" target="_blank">
                        <Image className={styles.logo} src="./images/instagram.webp" alt="Instagram Logo" width={600} height={600} />
                    </a>
                    <a href="https://www.facebook.com/asmarstudio/" target="_blank">
                        <Image className={styles.logo} src="./images/facebook.webp" alt="Facebook Logo" width={500} height={500} />
                    </a>
                </div>
            </div>
        </div>
    )
}