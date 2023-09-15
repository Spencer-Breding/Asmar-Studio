import React from 'react'
import Image from 'next/image'
import styles from '../styles/home.module.css'
import logo from '/public/images/LogoBlack.webp'

export const metadata = {
    title: 'Asmar Studio',
}
export default function Home() {
    <title>Asmar</title>
    return (
        <React.Fragment>
            <main className={styles.main}>
                <Image className={styles.logo} src={logo} alt="Asmar Studio Logo" priority={true} />
                <div>
                    <text>SET BUILDING</text>
                    <text>PROP MAKING</text>
                    <text>FABRICATION</text>
                    <text>SCULPTURES</text>
                    <text>CUSTOM FURNITURE</text>
                </div>
                <text id={styles.more }>...AND MUCH MORE</text>
            </main></React.Fragment>
    )
}
