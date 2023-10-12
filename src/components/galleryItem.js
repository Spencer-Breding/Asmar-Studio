import Image from 'next/image';
import styles from '../styles/galleryItems.module.css';

export default function GalleryItem({ item, setCurrentIndex, index }) {
    const handleClick = () => {
        setCurrentIndex(index);
        document.body.style.overflowY = 'hidden';
    };

    if (!item) {
        return <div>No item available</div>;
    }

    return (
        <div className={styles.gallery_item}>
            <div className={styles.imageWrapper} onClick={handleClick}>
                <Image
                    src={item.source}
                    alt={item.description}
                    loading="lazy"
                    priority={false}
                    layout="fill"
                />
            </div>
            <p>{item.description}</p>
        </div>
    );
}