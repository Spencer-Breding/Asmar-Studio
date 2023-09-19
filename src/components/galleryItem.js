"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from '../styles/galleryItems.module.css';

export default function GalleryItem({ items, setCurrentIndex, priorityType, loadingType }) {
    const [imageWrapperDimensions, setImageWrapperDimensions] = useState([]);
    const [imageElements, setImageElements] = useState([]);

    const adjustWrapperDimensions = (index) => {
        const img = imageElements[index];
        if (!img) return;

        const adjustDimensions = () => {
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

        if (img.complete) {
            adjustDimensions();
        } else {
            img.addEventListener('load', adjustDimensions);
        }
    };

    useEffect(() => {
        const handleResize = () => {
            for (let index = 0; index < items.length; index++) {
                adjustWrapperDimensions(index);
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [imageWrapperDimensions, imageElements]);

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
                        />
                    </div>
                    <p>{item.description}</p>
                </div>
            ))}
        </div>
    );
}

