"use client";
import React from 'react'
import { CldImage } from 'next-cloudinary';
import styles from '../styles/home.module.css'
import ImageGallery from './imageGallery'
import Testimonials from './testimonials'

let resizeTimeout;

window.addEventListener('resize', function () {
    clearTimeout(resizeTimeout);

    resizeTimeout = setTimeout(function () {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    }, 200);
});


export default function Home() {
    return (
        <div className={styles.main}>
            <CldImage className={styles.logo} src="Asmar Studio/wiqgib8g0gzyhkfmy9pz" alt="Asmar Studio Logo" priority={true} width={2240} height={1713} />
            <div className={styles.textDiv}>
                <p>SET BUILDING</p>
                <p>PROP MAKING</p>
                <p>FABRICATION</p>
                <p>SCULPTURES</p>
                <p>CUSTOM FURNITURE</p>
                <p id={styles.more}>...AND MUCH MORE</p>
            </div>
            <h2 id="AboutUs" className={styles.headerText}>About Us</h2>
            <h2 id="Capabilities" className={styles.headerText}>Capabilities</h2>
            <p className={styles.capabilities}>Asmar Studio, Inc. is a premier fabrication, prop making and set building studio based in
                Gardena, California. We specialize in large scale, highly detailed character and set piece
                fabrication. Asmar Studio, Inc. has become the go-to company for firms in the entertainment
                industry as well as other major brands and their respective agencies.
            </p>
            <h3 className={styles.competenciesHeader}>Core Competencies Include:</h3>
            <ul className={styles.competencies}>
                <li><span id={styles.design }>Design</span></li>
                <li><span id={styles.modeling}>Modeling</span></li>
                <li><span id={styles.sculpting}>Sculpting</span></li>
                <li><span id={styles.prototypes}>Prototypes</span></li>
                <li><span id={styles.metalwork}>Metalwork</span></li>
                <li><span id={styles.woodwork}>Woodwork</span></li>
                <li id={styles.fiberglass}><span>Fiberglass</span></li>
                <li id={styles.carpentry}><span>Carpentry</span></li>
                <li id={styles.welding}><span>Welding</span></li>
                <li id={styles.tradeShows}><span>Trade Shows</span></li>
                <li id={styles.setBuilding}><span>Set Building</span></li>
                <li id={styles.furniture}><span>Custom Furniture</span></li>
                <li id={styles.painting}><span>Painting & Finishing</span></li>
                <li id={styles.management }><span id={styles.management}>Project Management & Logistics</span></li>
            </ul>
            <h2 id="Gallery" className={styles.headerText}>Gallery</h2>
            <ImageGallery />
            <h2 id="Testimonials" className={styles.headerText}>Testimonials</h2>
            <Testimonials/>
            <h2 id="Contact" className={styles.headerText}>Contact Us</h2>
        </div>
    )
}
