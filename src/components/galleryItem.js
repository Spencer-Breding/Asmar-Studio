"use client";
import Image from 'next/image'
import styles from '../styles/galleryItems.module.css'

export default function GalleryItem({ items, setCurrentIndex, priorityType, loadingType }) {
    return (
        <div className={styles.gallery}>
            {items.map((item, index) => (
                <div key={index} className={styles.gallery_item}>

                        <Image
                            src={item.source}
                            alt={item.description}
                            loading={loadingType}
                            priority={priorityType}
                            onClick={() => {
                                setCurrentIndex(index)
                                document.body.style.overflowY = 'hidden'
                            }}
                            fill="true"
                        />
                    <p>{item.description}</p>
                </div>
            ))}
        </div>
    );
}