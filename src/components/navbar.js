import Link from 'next/link'
import styles from '../styles/navbar.module.css'

export default function Navbar(props) {
    return (
        <div className={styles.container}>
            <div className={styles.navbar_item}>
                <Link className={styles.content} href="/About">
                    <text>ABOUT US</text>
                </Link>
            </div>
            <div className={styles.navbar_item}>
                <Link className={styles.content} href="/Capabilities">
                    <text>CAPABILITIES</text>
                </Link>
            </div>
            <div className={styles.navbar_item}>
                <Link id={styles.gallery} className={styles.content} href="/Gallery">
                    <text>GALLERY</text>
                </Link>
            </div>
            <div className={styles.navbar_item}>
                <Link className={styles.content} href="/Contact">
                    <text>CONTACT US</text>
                </Link>
            </div>
            <div className={styles.navbar_item}>
                <Link className={styles.content} href="/Testimonials">
                    <text>TESTIMONIALS</text>
                </Link>
            </div>
        </div>
    )
}