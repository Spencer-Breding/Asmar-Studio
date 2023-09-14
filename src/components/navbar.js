"use client";
import React, { useState, useCallback, useEffect, useRef } from 'react';
import Link from 'next/link'
import Image from 'next/image';
import styles from '../styles/navbar.module.css'

function Burger(props) {
    const ref = useRef(null);
    const [openBurger, setOpenBurger] = useState(false);

    const closeBurger = useCallback((e) => {
        if (ref.current && openBurger && !ref.current.contains(e.target)) {
            setOpenBurger(false);
        }
    }, [openBurger]);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            document.addEventListener('click', closeBurger);
        }
        return () => {
            document.removeEventListener('click', closeBurger);
        };
    }, [closeBurger, openBurger]);

    const handleClick = () => {
        setOpenBurger(!openBurger);
    };

    const animationClass = openBurger ? 'openLine' : 'closeLine';

    return (
        <div className={styles.burger} ref={ref} onClick={handleClick}>
            <span className={`${styles.burger_line1} ${styles[`${animationClass}1`]}`} />
            <span className={`${styles.burger_line2} ${styles[`${animationClass}2`]}`} />
            <span className={`${styles.burger_line3} ${styles[`${animationClass}3`]}`} />
            {openBurger && props.children}
        </div>
    );
}

export default function Navbar(props) {
    return (
        <>
            <div className={styles.nav_container}>
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
            <Burger>
                <div className={styles.burger_dropdown}>

                </div>
            </Burger>
        </>
    )
}