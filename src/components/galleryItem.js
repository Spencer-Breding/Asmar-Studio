"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from '../styles/galleryItems.module.css';

export default function GalleryItem({ items, setCurrentIndex, priorityType, loadingType }) {
    const [imageWrapperDimensions, setImageWrapperDimensions] = useState([]);
    const [imageElements, setImageElements] = useState([]);
    const [key, setKey] = useState(0);

    const adjustWrapperDimensions = (index) => {
        const img = imageElements[index];
        if (!img) return;

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
        setImageWrapperDimensions(newDimensions);
    };

    // Window resize handler
    const handleResize = () => {
        for (let index = 0; index < items.length; index++) {
            adjustWrapperDimensions(index);
        }
    };

    useEffect(() => {
        // Attach the event listener
        window.addEventListener('resize', handleResize);

        // Cleanup
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [items, imageElements]);

    useEffect(() => {
        for (let index = 0; index < items.length; index++) {
            adjustWrapperDimensions(index);
        }
    }, [items]);

    return (
        <div className={styles.gallery}>
            {items.map((item, index) => (
                <div key={index} className={styles.gallery_item}>
                    <div
                        className={styles.imageWrapper}
                        style={{
                            height: imageWrapperDimensions[index]?.height,
                            width: imageWrapperDimensions[index]?.width,
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
                            onLoad={(event) => {
                                const newImageElements = [...imageElements];
                                newImageElements[index] = event.target;
                                setImageElements(newImageElements);
                                adjustWrapperDimensions(index);
                            }}
                            width={1}
                            height={1}
                        />
                    </div>
                    <p>{item.description}</p>
                </div>
            ))}
        </div>
    );
}
