"use client";
import { CldImage } from 'next-cloudinary';
import styles from '../styles/galleryItems.module.css';

export default function GalleryItem({ items, setCurrentIndex }) {

    const handleClick = (index) => {
        setCurrentIndex(index);
        document.body.style.overflowY = 'hidden';
    };

    return (
        items.map((item, index) => (
            <div key={index} className={styles.gallery_item}>
                <CldImage
                    className={styles.gallery_image }
                    src={item.source}
                    alt={item.description}
                    loading="lazy"
                    priority={false}
                    height={2000}
                    width={2000}
                    onClick={() => handleClick(index)}
                />
                <p>{item.description}</p>
            </div>
        ))
    );
}