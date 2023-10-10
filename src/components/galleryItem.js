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
                    <div className={styles.imageWrapper} onClick={() => handleClick(index)}>
                        <CldImage
                            src={item.source}
                            alt={item.description}
                            loading="lazy"
                            priority={false}
                            height={2000}
                            width={2000 }
                        />
                    </div>
                    <p>{item.description}</p>
                </div>
            ))
    );
}