"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from '../styles/galleryItems.module.css';

export default function GalleryItem({ items, setCurrentIndex, priorityType, loadingType }) {
    const [imageWrapperDimensions, setImageWrapperDimensions] = useState([]);

    const adjustWrapperDimensions = (event, index) => {
        const img = event.target;
        if (img.complete) {
            const imgWidth = img.naturalWidth;
            const imgHeight = img.naturalHeight;

            const aspectRatio = imgWidth / imgHeight;

            const wrapper = img.parentNode;
            const wrapperWidth = wrapper.clientWidth;
            const wrapperHeight = wrapper.clientHeight;

            let newWidth = wrapperHeight * aspectRatio;
            let newHeight = wrapperHeight;

            if (newWidth > wrapperWidth) {
                newWidth = wrapperWidth;
                newHeight = wrapperWidth / aspectRatio;
            }

            const newDimensions = [...imageWrapperDimensions];
            newDimensions[index] = { width: newWidth, height: newHeight };
            console.log('Setting new dimensions:', newDimensions);
            setImageWrapperDimensions(newDimensions);
        }
    };

    return (
        <div className={styles.gallery}>
            {items.map((item, index) => (
                <div key={index} className={styles.gallery_item}>
                    <div
                        className={styles.imageWrapper}
                        style={{
                            height: imageWrapperDimensions[index]?.height,
                            width: imageWrapperDimensions[index]?.width
                        }}
                    >
                        <Image
                            src={item.source}
                            alt={item.description}
                            loading={loadingType}
                            priority={priorityType}
                            onClick={() => {
                                setCurrentIndex(index);
                                document.body.style.overflowY = 'hidden';
                            }}
                            onLoad={(event) => adjustWrapperDimensions(event, index)}
                            fill="true"
                        />
                    </div>
                    <p>{item.description}</p>
                </div>
            ))}
        </div>
    );
}