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
            <p className={styles.capabilities}>Asmar Studio, Inc. is a premier fabrication, prop making and set building studio based in
                Gardena, California. We specialize in large scale, highly detailed character and set piece
                fabrication. Asmar Studio, Inc. has become the go-to company for firms in the entertainment
                industry as well as other major brands and their respective agencies.
            </p>
            <h3 className={styles.competenciesHeader}>Core Competencies Include:</h3>
            <div className={styles.competencies}>
                <p>• <span>Design</span></p>
                <p>• <span>Modeling</span></p>
                <p>• <span>Sculpting</span></p>
                <p>• <span>Prototypes</span></p>
                <p>• <span>Metalwork</span></p>
                <p>• <span>Woodwork</span></p>
                <p>• <span>Fiberglass</span></p>
                <p>• <span>Trade Shows</span></p>
                <p>• <span>Set Building</span></p>
                <p>• <span>Painting & Finishing</span></p>
                <p>• <span>Project Management & Logistics</span></p>
            </div>
            <h2 id="Gallery" className={styles.headerText}>Gallery</h2>
            <ImageGallery />
            <h2 id="Testimonials" className={styles.headerText}>Testimonials</h2>
            <h2 id="Contact" className={styles.headerText}>Contact Us</h2>
        </main>
    )
}
