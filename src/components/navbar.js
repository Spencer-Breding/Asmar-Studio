import Link from 'next/link'
import Image from 'next/image';
import styles from '../styles/navbar.module.css'

export default function Navbar(props) {
    return (
        <div className={styles.container}>
            <Link href="/" className={styles.logo_link}>
                <Image className={styles.logo} src="/images/AsmarStudioLogoBlackBackground.jpg"
                    alt="title" width={100} height={75} />
            </Link>
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