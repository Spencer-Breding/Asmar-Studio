"use client";
import { useState, useEffect } from 'react';
import GalleryItem from './galleryItem';
import styles from '../styles/Gallery.module.css';
import Lightbox from './lightbox';

export default function ImageGallery() {
    const [currentIndex, setCurrentIndex] = useState(null);

    const imageList = [
        { source: "Asmar Studio/Gallery/etqgfsesxzejbxowitrz", description: "Absolem Caterpillar Alice in Wonderland", width: false, loadingType: "lazy"  },
        { source: "Asmar Studio/Gallery/vodomo7yhygksbliqjjk", description: "Alaska Air Tail Section Display", priorityType: false, loadingType: "lazy"  },
        { source: "Asmar Studio/Gallery/ni6ibdjnzmvtnielm82r", description: "City Under Siege", priorityType: false, loadingType: "lazy"  },
        { source: "Asmar Studio/Gallery/qusr50scjhfkbp1qneos", description: "Bar Backdrop", priorityType: false, loadingType: "lazy"  },
        { source: "Asmar Studio/Gallery/ser19egsyrgtmwlxfiwo", description: "Custom Sculpted Desk", priorityType: false, loadingType: "lazy"  },
        { source: "Asmar Studio/Gallery/d1yvwj1bpojgnglpffew", description: "Disenchanted", priorityType: false, loadingType: "lazy"  },
        { source: "Asmar Studio/Gallery/t1djanvstxotzeuukbm6", description: "Custom Display Stand", priorityType: false, loadingType: "lazy" },
        { source: "Asmar Studio/Gallery/i4wepf7xpkqawfi3rhvq", description: "Ball Pit", priorityType: false, loadingType: "lazy" },
        { source: "Asmar Studio/Gallery/q4erbdyzmrtjzbruax7a", description: "Chinese Dragon", priorityType: false, loadingType: "lazy"  },
        { source: "Asmar Studio/Gallery/o3a0sl7gioliwmpbve1r", description: "Dragon's Face Fireplace", priorityType: false, loadingType: "lazy" },
        { source: "Asmar Studio/Gallery/rotrpzjtgtr5tepp6xad", description: "Epsolon Tequila", priorityType: false, loadingType: "lazy" },
        { source: "Asmar Studio/Gallery/ap78sgf8zt0dmtjvbig7", description: "The Frogcats", priorityType: false, loadingType: "lazy" },
        { source: "Asmar Studio/Gallery/ch3vra8lucg84qhykqkv", description: "Frogcats Display", priorityType: false, loadingType: "lazy" },
        { source: "Asmar Studio/Gallery/nusbpovdbmhryvmvu8n9", description: "Giant Clam with Pearl", priorityType: false, loadingType: "lazy" },
        { source: "Asmar Studio/Gallery/jwdzba42hlzg9oet9wb4", description: "30ft tall Iron Throne", priorityType: false, loadingType: "lazy" },
        { source: "Asmar Studio/Gallery/hkcm2xcmradayua0a9ll", description: "30ft tall Iron Throne - Rockefeller Center", priorityType: false, loadingType: "lazy" },
        { source: "Asmar Studio/Gallery/jjfqelfgmqkdryylk14s", description: "6ft Tall Lipstick", priorityType: false, loadingType: "lazy" },
        { source: "Asmar Studio/Gallery/omiwds9vpqcyvltdf3zq", description: "Golden Gate Bridge", priorityType: false, loadingType: "lazy" },
        { source: "Asmar Studio/Gallery/bkzbcw2vi2zxvzw5i8e1", description: "Haunted House Entrance", priorityType: false, loadingType: "lazy" },
        { source: "Asmar Studio/Gallery/e4tfsqohayvg27f0mduc", description: "The House with a Clock in its Walls", priorityType: false, loadingType: "lazy" },
        { source: "Asmar Studio/Gallery/sz5xkzeffpd6fmp3ffiw", description: "IMAX Dog", priorityType: false, loadingType: "lazy" },
        { source: "Asmar Studio/Gallery/tgzvlgz89masadpml2a4", description: "Loading Kong's Hand", priorityType: false, loadingType: "lazy" },
        { source: "Asmar Studio/Gallery/rpb4kq8sdejjqdokxean", description: "Skulls at Kong's Island", priorityType: false, loadingType: "lazy" },
        { source: "Asmar Studio/Gallery/y3hknawqqorcaf8sfb4e", description: "Kristoff's Cart", priorityType: false, loadingType: "lazy" },
        { source: "Asmar Studio/Gallery/qzumt9xgnv7veohefsav", description: "Mowgli", priorityType: false, loadingType: "lazy" },
        { source: "Asmar Studio/Gallery/yg556zz9jw78jalaz7qj", description: "Raven", priorityType: false, loadingType: "lazy" },
        { source: "Asmar Studio/Gallery/sfzejonjayappr76gumx", description: "Ninja Turtles", priorityType: false, loadingType: "lazy" },
        { source: "Asmar Studio/Gallery/d8phwapdojxde9ij2bh4", description: "Paramount Mountain", priorityType: false, loadingType: "lazy" },
        { source: "Asmar Studio/Gallery/bohutqekepleij8uhhzv", description: "3D Pinocchio Billboard", priorityType: false, loadingType: "lazy" },
        { source: "Asmar Studio/Gallery/evtlfioysige9d1t32bn", description: "Giant Chess Pieces", priorityType: false, loadingType: "lazy" },
        { source: "Asmar Studio/Gallery/z51zestoxzjqkfktopkv", description: "Destroyed Freeway Ramp", priorityType: false, loadingType: "lazy" },
        { source: "Asmar Studio/Gallery/g6gyalwx3dqd3ijdh4yn", description: "Skeleton", priorityType: false, loadingType: "lazy" },
        { source: "Asmar Studio/Gallery/dvxgk53vkt53rzyfndqd", description: "The Meg Tunnel", priorityType: false, loadingType: "lazy" },
        { source: "Asmar Studio/Gallery/xabls8ezqqqqt8xd4nqh", description: "T-Rex", priorityType: false, loadingType: "lazy" },
        { source: "Asmar Studio/Gallery/tjirqa1q7gvgtzuts7ew", description: "Touching Up T-Rex Head", priorityType: false, loadingType: "lazy" },
        { source: "Asmar Studio/Gallery/s8th62axqvr0ugk8zw83", description: "Checking T-Rex Teeth", priorityType: false, loadingType: "lazy" },
        { source: "Asmar Studio/Gallery/p1hqv3wsxjumdqsyifxa", description: "More T-Rex Work", priorityType: false, loadingType: "lazy" },
        { source: "Asmar Studio/Gallery/o4cvzmvphlek2fehxunu", description: "Another Convention Booth", priorityType: false, loadingType: "lazy" },
    ]

    const closeLightbox = () => {
        setCurrentIndex(null);
    }

    const showPrev = () => setCurrentIndex((prevIndex) => (prevIndex - 1 + imageList.length) % imageList.length);

    const showNext = () => setCurrentIndex((prevIndex) => (prevIndex + 1) % imageList.length);

    const onThumbnailClick = (index) => {
        if (currentIndex === index) {
            return;
        }
        setCurrentIndex(index);
    }

    return (
        <div className={styles.container} id="galleryContainer">
            <GalleryItem items={imageList} setCurrentIndex={(index) => setCurrentIndex(index)} />
            {currentIndex !== null && (
                <Lightbox
                    item={imageList[currentIndex]}
                    items={imageList}
                    currentIndex={currentIndex}
                    onClose={closeLightbox}
                    onPrev={showPrev}
                    onNext={showNext}
                    onThumbnailClick={onThumbnailClick}
                />
            )}
        </div>
    )
}
