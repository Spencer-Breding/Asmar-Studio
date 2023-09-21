"use client";
import React, { useState, useCallback, useEffect } from 'react';
import { CldImage } from 'next-cloudinary';
import styles from '../styles/navbar.module.css'

export default function Navbar(props) {
    const [openBurger, setOpenBurger] = useState(false);
    const [firstClick, setFirstClick] = useState(false);
    const [isFirstRender, setIsFirstRender] = useState(true);
    const animationClass = openBurger && firstClick ? 'openLine' : firstClick ? 'closeLine' : '';

    const closeBurger = () => {
        setOpenBurger(false);
    };

    const toggleBurger = () => {
        setOpenBurger(!openBurger);
        setFirstClick(true);
    };

    const handleScroll = useCallback((sectionId) => {
        const element = document.getElementById(sectionId);
        const navbar = document.getElementById('navbar');
        const burgerMenu = document.getElementById('burger');

        if (element) {
            let offsetHeightInPx = 0;

            if (navbar && window.getComputedStyle(navbar).display !== 'none') {
                offsetHeightInPx = parseFloat(window.getComputedStyle(navbar).height);
                offsetHeightInPx -= 12;
            } else if (burgerMenu && window.getComputedStyle(burgerMenu).display !== 'none') {
                offsetHeightInPx = parseFloat(window.getComputedStyle(burgerMenu).height);
                offsetHeightInPx += 8;
            }

            const rect = element.getBoundingClientRect();
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementPosition = rect.top - bodyRect;
            const offsetPosition = elementPosition - offsetHeightInPx;

            const adjustScroll = () => {
                const rect = element.getBoundingClientRect();
                const bodyRect = document.body.getBoundingClientRect().top;
                const elementPosition = rect.top - bodyRect;
                const offsetPosition = elementPosition - offsetHeightInPx;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }

            adjustScroll();

            const gallery = document.getElementById("galleryContainer");
            if (gallery) {
                gallery.querySelectorAll('img').forEach(img => {
                    img.addEventListener('load', adjustScroll);
                });
            }
        }
    }, []);

    useEffect(() => {
        let isInitialRender = true;

        const sectionIds = ["AboutUs", "Capabilities", "Gallery", "Testimonials", "Contact"];

        const resizeObserver = new ResizeObserver((entries) => {
            if (isInitialRender) {
                isInitialRender = false;
                return;
            }

            for (let entry of entries) {
                if (sectionIds.includes(entry.target.id)) {
                    console.log("Resize observed for:", entry.target.id);
                    scrollToSection(entry.target.id);
                }
            }
        });

        sectionIds.forEach(id => {
            const element = document.getElementById(id);
            if (element) {
                resizeObserver.observe(element);
            }
        });

        return () => {
            sectionIds.forEach(id => {
                const element = document.getElementById(id);
                if (element) {
                    resizeObserver.unobserve(element);
                }
            });
        };
    }, []);

    const handleItemClick = (section) => {
        handleScroll(section);
        closeBurger();
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
    return (
        <>
            <div id="navbar" className={styles.nav_container}>
                <CldImage className={styles.logo} src="Asmar Studio/zzaoiklmfooi7cv1uqk3" priority={true}
                    alt="Asmar Studio Logo" width={100} height={75} onClick={() => scrollToTop()} />
                <div className={styles.navbar_item} onClick={() => handleItemClick("AboutUs")}>
                    <p>ABOUT US</p>
                </div>
                <div className={styles.navbar_item} onClick={() => handleItemClick("Capabilities")}>
                    <p>CAPABILITIES</p>
                </div>
                <div className={styles.navbar_item} onClick={() => handleItemClick("Gallery")}>
                    <p>GALLERY</p>
                </div>
                <div className={styles.navbar_item} onClick={() => handleItemClick("Testimonials")}>
                    <p>TESTIMONIALS</p>
                </div>
                <div className={styles.navbar_item} onClick={() => handleItemClick("Contact")}>
                    <p>CONTACT US</p>
                </div>
            </div>
            <div id="burger" className={styles.burger}>
                <div className={styles.burgerButton} onClick={toggleBurger}>
                    <span className={`${styles.burger_line1} ${styles[`${animationClass}1`]}`} />
                    <span className={`${styles.burger_line2} ${styles[`${animationClass}2`]}`} />
                    <span className={`${styles.burger_line3} ${styles[`${animationClass}3`]}`} />
                </div>
                {openBurger &&
                    <div  className={`${styles.burger_dropdown} ${openBurger ? styles.burger_dropdown_slide_in : styles.burger_dropdown_slide_out}`}>
                        <CldImage className={styles.burger_logo} src="Asmar Studio/zzaoiklmfooi7cv1uqk3" priority={true}
                            alt="Asmar Studio Logo" width={100} height={75} onClick={() => { scrollToTop(), closeBurger() }} />
                        <div className={styles.burger_item} onClick={() => handleItemClick("AboutUs")}>
                            <p>ABOUT US</p>
                        </div>
                        <div className={styles.burger_item} onClick={() => handleItemClick("Capabilities")}>
                            <p>CAPABILITIES</p>
                        </div>
                        <div className={styles.burger_item} onClick={() => handleItemClick("Gallery")}>
                            <p>GALLERY</p>
                        </div>
                        <div className={styles.burger_item} onClick={() => handleItemClick("Testimonials")}>
                            <p>TESTIMONIALS</p>
                        </div>
                        <div className={styles.burger_item} onClick={() => handleItemClick("Contact")}>
                            <p>CONTACT US</p>
                        </div>
                    </div>
                }
            </div>
        </>
    )
}