"use client";
import React from 'react'
import { CldImage } from 'next-cloudinary';
import styles from '../styles/home.module.css'
import ImageGallery from './imageGallery'

export default function Home() {
    return (
            <main className={styles.main}>
                <CldImage className={styles.logo} src="Asmar Studio/jgjzkdxemit8ke2ikowe" alt="Asmar Studio Logo" priority={true} width={1000} height={1000} />
                <div className={styles.textDiv}>
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
                <ImageGallery />
                <h2 id="Testimonials" className={styles.headerText}>Testimonials</h2>
                <h2 id="Contact" className={styles.headerText}>Contact Us</h2>
            </main>
    )
}
