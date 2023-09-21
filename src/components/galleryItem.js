"use client";
import { useEffect } from 'react';
import { CldImage } from 'next-cloudinary';
import styles from '../styles/galleryItems.module.css';

export default function GalleryItem({ items, setCurrentIndex, priorityType, loadingType }) {

    const handleClick = (index) => {
        setCurrentIndex(index);
        document.body.style.overflowY = 'hidden';
    };

    return (
        <div className={styles.gallery}>
            {items.map((item, index) => (
                <div key={index} className={styles.gallery_item}>
                    <div className={styles.imageWrapper} onClick={() => handleClick(index)}>
                        <CldImage
                            src={item.source}
                            alt={item.description}
                            loading={loadingType}
                            priority={priorityType}
                            fill
                        />
                    </div>
                    <p>{item.description}</p>
                </div>
            ))}
        </div>
    );
}