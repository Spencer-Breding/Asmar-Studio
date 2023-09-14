"use client";
import { useState, useEffect, useCallback } from 'react';
import styles from '../styles/Lightbox.module.css';

const getPreviewItems = (currentIndex, items) => {
    var startIdx
    if (window.matchMedia("(max-width: 37.5em)").matches) {
        startIdx = currentIndex - 2
    } else {
        startIdx = currentIndex - 3
    }
    var endIdx
    if (window.matchMedia("(max-width: 37.5em)").matches) {
        endIdx = startIdx + 5
    } else {
        endIdx = startIdx + 7
    }
    const placeholder = { source: "", description: "" };
    let placeholdersBefore = 0;
    let placeholdersAfter = 0;
    if (startIdx < 0) {
        placeholdersBefore = -startIdx;
        startIdx = 0;
    }

    if (endIdx > items.length) {
        placeholdersAfter = endIdx - items.length;
        endIdx = items.length;
    }

    return [
        ...Array(placeholdersBefore).fill(placeholder),
        ...items.slice(startIdx, endIdx),
        ...Array(placeholdersAfter).fill(placeholder)
    ];
};

export default function Lightbox({ item, items, currentIndex, onClose, onPrev, onNext, onThumbnailClick }) {
    const [isVisible, setIsVisible] = useState(false);
    const [imageAnimation, setImageAnimation] = useState('');
    const [transitioning, setTransitioning] = useState(false);
    const [touchStartX, setTouchStartX] = useState(0);
    const [touchEndX, setTouchEndX] = useState(0);
    const handleTouchStart = (e) => {
        setTouchStartX(e.changedTouches[0].screenX);
    };

    const handleTouchEnd = (e) => {
        setTouchEndX(e.changedTouches[0].screenX);
    };

    var previewIdx
    if (window.matchMedia("(max-width: 37.5em)").matches) {
        previewIdx = 2
    } else {
        previewIdx = 3
    }
    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 50);
        return () => clearTimeout(timer);
    }, []);

    const handleAnimation = useCallback((nextIndex, callback) => {
        const direction = nextIndex > currentIndex ? 'left' : 'right';
        const exitAnimation = direction === 'left' ? styles.animateOutToLeft : styles.animateOutToRight;
        const enterAnimation = styles[`animateInFrom${direction === 'left' ? 'Right' : 'Left'}`];

        setImageAnimation(exitAnimation);
        setTransitioning(true);

        setTimeout(() => {
            callback();
            setImageAnimation(enterAnimation);

            setTimeout(() => {
                setImageAnimation('');
                setTransitioning(false);
            }, 400);
        }, 400);
    }, [currentIndex]);

    useEffect(() => {
        if (touchStartX - touchEndX > 75) {
            // Swipe left (go to next)
            if (currentIndex < items.length - 1 && !transitioning) {
                handleAnimation(currentIndex + 1, onNext);
            }
        }

        if (touchEndX - touchStartX > 75) {
            // Swipe right (go to previous)
            if (currentIndex > 0 && !transitioning) {
                handleAnimation(currentIndex - 1, onPrev);
            }
        }
    }, [currentIndex, handleAnimation, items.length, onNext, onPrev, touchEndX, touchStartX, transitioning]);

    const previewItems = getPreviewItems(currentIndex, items);

    const handleClose = useCallback(() => {
        setIsVisible(false);
        document.body.style.overflowY = 'auto';
        setTimeout(() => {
            onClose()
        }, 300);
    }, [onClose]);

    const handleKeyPress = useCallback((event) => {
        if (event.key === 'Escape') {
            handleClose();
        } else if (event.key === 'ArrowRight') {
            if (currentIndex < items.length - 1 && !transitioning) {
                handleAnimation(currentIndex + 1, onNext);
            }
        }
        else if (event.key === 'ArrowLeft') {
            if (currentIndex !== 0 && !transitioning) {
                handleAnimation(currentIndex - 1, onPrev);
            }
        }
    }, [handleClose, currentIndex, items.length, transitioning, handleAnimation, onNext, onPrev]);

    useEffect(() => {
        // Adding the event listener when the component mounts
        document.addEventListener('keydown', handleKeyPress);
        document.addEventListener('touchstart', handleTouchStart);
        document.addEventListener('touchend', handleTouchEnd);

        // Removing the event listener when the component unmounts
        return () => {
            document.removeEventListener('keydown', handleKeyPress);
            document.removeEventListener('touchstart', handleTouchStart);
            document.removeEventListener('touchend', handleTouchEnd);
        };
    }, [handleKeyPress]);

    return (
        <div className={`${styles.lightbox} ${isVisible ? styles.fadeIn : styles.fadeOut}`}>
            <button className={styles.closeButton} onClick={handleClose}>X</button>
            {currentIndex !== 0 && (
                <button
                    className={`${styles.arrowButton} ${styles.left}`}
                    disabled={transitioning}
                    onClick={() => handleAnimation(currentIndex - 1, onPrev)}
                >
                    &#10094;
                </button>
            )}
            {currentIndex !== (items.length - 1) && (
                <button
                    className={`${styles.arrowButton} ${styles.right}`}
                    disabled={transitioning}
                    onClick={() => handleAnimation(currentIndex + 1, onNext)}
                >
                    &#10095;
                </button>
            )}
            <div className={styles.imageContainer}>
                <div className={`${styles.mainImageContainer} ${imageAnimation}`}>
                    <div className={styles.mainImageWrapper}>
                        <img className={styles.mainImage} src={item.source} alt={item.description} />
                    </div>
                    <p className={styles.imageDescription}>{item.description}</p>
                </div>
                <div className={styles.previewContainer}>
                    {previewItems.map((previewItem, index) => {
                        const actualIndex = currentIndex + index - previewIdx;
                        const isPlaceholder = previewItem.source === "";

                        if (isPlaceholder) {
                            return (
                                <div
                                    className={styles.placeholder}
                                    key={index}

                                />
                            );
                        }

                        return (
                            <img
                                key={index}
                                src={previewItem.source}
                                alt={previewItem.description}
                                className={`${styles.previewImage} ${index === previewIdx ? styles.selectedPreview : ''}`}
                                onClick={() => {
                                    if (actualIndex === currentIndex) {
                                        return;
                                    }
                                    if (!transitioning) {
                                        handleAnimation(actualIndex, () => onThumbnailClick(actualIndex));
                                    }
                                }}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
}