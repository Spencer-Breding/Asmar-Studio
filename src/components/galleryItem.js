import Image from 'next/image';
import styles from '../styles/galleryItems.module.css'

export default function ImageGallery({ items, setCurrentIndex }) {
    return (
        <div className={styles.gallery}>
            {items.map((item, index) => (
                <div key={index} className={styles.gallery_item}>
                    <div className={styles.imageWrapper}>
                        <Image
                            src={item.source}
                            alt={item.description}
                            width={1}  // The actual value doesn't matter when layout="responsive"
                            height={1} // The actual value doesn't matter when layout="responsive"
                            objectFit="contain"
                            loading="lazy"
                            onClick={() => {
                                setCurrentIndex(index)
                                document.body.style.overflowY = 'hidden'
                            }}
                        />
                    </div>
                    <p>{item.description}</p>
                </div>
            ))}
        </div>
    );
}