import React from 'react'
import Image from 'next/image'
import styles from '../styles/home.module.css'
import logo from '/public/images/LogoBlack.webp'
import ImageGallery from '../components/imageGallery'

export const metadata = {
    title: 'Asmar Studio',
}
export default function Home() {
    <title>Asmar</title>
    return (
        <React.Fragment>
            <main className={styles.main}>
                <Image className={styles.logo} src={logo} alt="Asmar Studio Logo" priority={true} />
                <div className={styles.textDiv }>
                    <p>SET BUILDING</p>
                    <p>PROP MAKING</p>
                    <p>FABRICATION</p>
                    <p>SCULPTURES</p>
                    <p>CUSTOM FURNITURE</p>
                </div>
                <text id={styles.more}>...AND MUCH MORE</text>
                <h2 id="AboutUs" className={styles.headerText}>About Us</h2>
                <h2 id="Capabilities" className={styles.headerText}>Capabilities</h2>
                <h2 id="Gallery" className={styles.headerText}>Gallery</h2>
                <ImageGallery/>
                <h2 id="Testimonials" className={styles.headerText}>Testimonials</h2>
                <h2 id="Contact" className={styles.headerText}>Contact Us</h2>
            </main></React.Fragment>
    )
}
