"use client";
import { useEffect, useRef } from 'react';
import Image from 'next/image'
import styles from '../styles/galleryItems.module.css'

export default function GalleryItem({ items, setCurrentIndex, priorityType, loadingType }) {
    const imgRef = useRef(null);

    // Define adjustBorder outside of useEffect
    function adjustBorder() {
        if (imgRef.current) {
            const img = imgRef.current;
            const wrapper = img.parentElement;

            // Reset border style first
            wrapper.style.border = "none";

            // Calculate available width and height in wrapper
            const availableWidth = wrapper.clientWidth;
            const availableHeight = wrapper.clientHeight;

            // Calculate aspect ratio for both the wrapper and the image
            const wrapperAspectRatio = availableWidth / availableHeight;
            const imgAspectRatio = img.naturalWidth / img.naturalHeight;

            // Add the border only to the dimension where the image fits exactly
            if (imgAspectRatio > wrapperAspectRatio) {
                wrapper.style.borderLeft = wrapper.style.borderRight = "2px solid #b27734";
            } else {
                wrapper.style.borderTop = wrapper.style.borderBottom = "2px solid #b27734";
            }
        }
    }

    useEffect(() => {
        // Initial adjustment
        adjustBorder();

        // Re-adjust whenever the window is resized
        window.addEventListener('resize', adjustBorder);

        return () => {
            window.removeEventListener('resize', adjustBorder);
        };
    }, []);

    return (
        <div className={styles.gallery}>
            {items.map((item, index) => (
                <div key={index} className={styles.gallery_item}>
                    <div className={styles.imageWrapper}>
                        <img
                            ref={imgRef}
                            src={item.source}
                            alt={item.description}
                            loading={loadingType}
                            onLoad={adjustBorder}
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