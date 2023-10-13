"use client";
import React, { useEffect } from 'react'
import Image from 'next/image';
import styles from '../styles/home.module.css'
import ImageGallery from './imageGallery'
import Testimonials from './testimonials'
import Contact from './contact';

export default function Home() {
    let resizeTimeout;
    useEffect(() => {
        window.addEventListener('resize', function () {
            clearTimeout(resizeTimeout);

            resizeTimeout = setTimeout(function () {
                let vh = window.innerHeight * 0.01;
                document.documentElement.style.setProperty('--vh', `${vh}px`);
            }, 200);
        });
    })
    return (
        <div className={styles.main}>
            <picture>
                <source srcSet="./images/AsmarStudioLogo.webp" media="(min-width:241em)" />
                <source srcSet="./images/AsmarStudioLogo4k.webp" media="(min-width:240em)" />
                <source srcSet="./images/AsmarStudioLogoLarge.webp" media="(min-width:160em)" />
                <source srcSet="./images/AsmarStudioLogoMedium.webp" media="(min-width:124em)" />
                <source srcSet="./images/AsmarStudioLogoSmall.webp" media="(min-width:80em)" />
                <source srcSet="./images/AsmarStudioLogoMobile.webp" media="(min-width:52em)" />
                <Image className={styles.logo} src="./images/AsmarStudioLogoMobileSmall.webp" alt="Asmar Studio Logo" priority={true} width={1} height={1} />
            </picture>
            <div className={styles.textDiv}>
                <p>SET BUILDING</p>
                <p>PROP MAKING</p>
                <p>FABRICATION</p>
                <p>SCULPTURES</p>
                <p>CUSTOM FURNITURE</p>
                <p id={styles.more}>...AND MUCH MORE</p>
            </div>
            <h2 id="AboutUs" className={styles.headerText}>About Us</h2>
            <p className={styles.about}>Asmar Studio is a premier fabrication, prop making and set
                building studio based in Gardena, California. Starting over 30 years
                ago, Peter Asmar has made a name for himself in the industry.<br /><br />
                Starting out with mostly carpentry, visual art, composition and painting,
                he has manifested and refined his craft to a full-fledged studio.<br /><br />
                Asmar Studio specializes in large scale, highly detailed character
                and set piece fabrications and has become the go-to company for firms
                in the entertainment industry as well as other major brands and their
                respective agencies.<br /><br />
                Working with clients’ imaginations and visions, Asmar Studio has brought
                Hollywood, art and entertainment industry masterpieces to life for red
                carpet premiers, trade shows, corporate events and more!
            </p>
            <Image className={styles.peter} src="./images/PeterAsmar.webp" alt="Peter Asmar" width={1} height={1} />
            <h2 id="Capabilities" className={styles.headerText}>Capabilities</h2>
            <h3 className={styles.competenciesHeader}>Core Competencies Include:</h3>
            <ul className={styles.competencies}>
                <li><span id={styles.design}>Design</span></li>
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
                <li id={styles.management}><span id={styles.management}>Project Management & Logistics</span></li>
            </ul>
            <h2 id="Gallery" className={styles.headerText}>Gallery</h2>
            <ImageGallery />
            <h2 id="Testimonials" className={styles.headerText}>Testimonials</h2>
            <Testimonials />
            <h2 id="Contact" className={styles.headerText}>Contact Us</h2>
            <Contact />
        </div>
    )
}
