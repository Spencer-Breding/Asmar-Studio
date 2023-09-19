"use client";
import { useEffect, useRef } from 'react';
import Image from 'next/image'
import styles from '../styles/galleryItems.module.css'

export default function GalleryItem({ items, setCurrentIndex, priorityType, loadingType }) {
    const imageWrapperRef = useRef(null);

    useEffect(() => {
        const wrapper = imageWrapperRef.current;
        if (wrapper) {
            const img = wrapper.querySelector('img');
            img.onload = function () {
                // Maintain the aspect ratio of the image
                const aspectRatio = this.width / this.height;
                // Calculate new height based on the container width
                const newHeight = wrapper.clientWidth / aspectRatio;
                wrapper.style.height = `${newHeight}px`;
            };
        }
    }, [items]);
    return (
        <div className={styles.gallery}>
            {items.map((item, index) => (
                <div key={index} className={styles.gallery_item}>
                    <div ref={imageWrapperRef} className={styles.imageWrapper}>
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
                    </div>
                    <p>{item.description}</p>
                </div>
            ))}
        </div>
    );
}