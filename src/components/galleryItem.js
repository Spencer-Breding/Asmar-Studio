"use client";
import Image from 'next/image'
import styles from '../styles/galleryItems.module.css'

export default function GalleryItem({ items, setCurrentIndex }) {
    return (
        <div className={styles.gallery}>
            {items.map((item, index) => (
                <div key={index} className={styles.gallery_item}>
                    <Image
                        src={item.source}
                        alt={item.description}
                        width={640}
                        height={480}
                        style={{ width: '100%', height: 'auto' }}
                        loading="lazy"
                        onClick={() => {
                            setCurrentIndex(index)
                            document.body.style.overflowY = 'hidden'
                        }}
                    />
                    <p>{item.description}</p>
                </div>
            ))}
        </div>
    );
}