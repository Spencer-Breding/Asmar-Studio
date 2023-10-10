"use client";
import { useState, useEffect } from 'react';
import GalleryItem from './galleryItem';
import styles from '../styles/Gallery.module.css';
import Lightbox from './lightbox';

export default function ImageGallery() {
    const [currentIndex, setCurrentIndex] = useState(null);

    const imageList = [
        { source: "Asmar Studio/Gallery/etqgfsesxzejbxowitrz", description: "Absolem Caterpillar Alice in Wonderland" },
        { source: "Asmar Studio/Gallery/vodomo7yhygksbliqjjk", description: "Alaska Air Tail Section Display" },
        { source: "Asmar Studio/Gallery/ni6ibdjnzmvtnielm82r", description: "City Under Siege" },
        { source: "Asmar Studio/Gallery/qusr50scjhfkbp1qneos", description: "Bar Backdrop" },
        { source: "Asmar Studio/Gallery/ser19egsyrgtmwlxfiwo", description: "Custom Sculpted Desk" },
        { source: "Asmar Studio/Gallery/d1yvwj1bpojgnglpffew", description: "Disenchanted" },
        { source: "Asmar Studio/Gallery/t1djanvstxotzeuukbm6", description: "Custom Display Stand" },
        { source: "Asmar Studio/Gallery/i4wepf7xpkqawfi3rhvq", description: "Ball Pit" },
        { source: "Asmar Studio/Gallery/q4erbdyzmrtjzbruax7a", description: "Chinese Dragon" },
        { source: "Asmar Studio/Gallery/o3a0sl7gioliwmpbve1r", description: "Dragon's Face Fireplace" },
        { source: "Asmar Studio/Gallery/rotrpzjtgtr5tepp6xad", description: "Espolón Tequila" },
        { source: "Asmar Studio/Gallery/ap78sgf8zt0dmtjvbig7", description: "The Frogcats" },
        { source: "Asmar Studio/Gallery/ch3vra8lucg84qhykqkv", description: "Frogcats Display" },
        { source: "Asmar Studio/Gallery/nusbpovdbmhryvmvu8n9", description: "Giant Clam with Pearl" },
        { source: "Asmar Studio/Gallery/jwdzba42hlzg9oet9wb4", description: "30ft tall Iron Throne" },
        { source: "Asmar Studio/Gallery/hkcm2xcmradayua0a9ll", description: "30ft tall Iron Throne - Rockefeller Center" },
        { source: "Asmar Studio/Gallery/jjfqelfgmqkdryylk14s", description: "6ft Tall Lipstick" },
        { source: "Asmar Studio/Gallery/omiwds9vpqcyvltdf3zq", description: "Golden Gate Bridge" },
        { source: "Asmar Studio/Gallery/bkzbcw2vi2zxvzw5i8e1", description: "Haunted House Entrance" },
        { source: "Asmar Studio/Gallery/e4tfsqohayvg27f0mduc", description: "The House with a Clock in its Walls" },
        { source: "Asmar Studio/Gallery/sz5xkzeffpd6fmp3ffiw", description: "IMAX Dog" },
        { source: "Asmar Studio/Gallery/tgzvlgz89masadpml2a4", description: "Loading Kong's Hand" },
        { source: "Asmar Studio/Gallery/rpb4kq8sdejjqdokxean", description: "Skulls at Kong's Island" },
        { source: "Asmar Studio/Gallery/y3hknawqqorcaf8sfb4e", description: "Kristoff's Cart" },
        { source: "Asmar Studio/Gallery/pc460e86iadhd59no8um", description: "Medieval Entrance" },
        { source: "Asmar Studio/Gallery/qzumt9xgnv7veohefsav", description: "Mowgli" },
        { source: "Asmar Studio/Gallery/yg556zz9jw78jalaz7qj", description: "Raven" },
        { source: "Asmar Studio/Gallery/sfzejonjayappr76gumx", description: "Ninja Turtles" },
        { source: "Asmar Studio/Gallery/d8phwapdojxde9ij2bh4", description: "Paramount Mountain" },
        { source: "Asmar Studio/Gallery/bohutqekepleij8uhhzv", description: "3D Pinocchio Billboard" },
        { source: "Asmar Studio/Gallery/evtlfioysige9d1t32bn", description: "Giant Chess Pieces" },
        { source: "Asmar Studio/Gallery/z51zestoxzjqkfktopkv", description: "Destroyed Freeway Ramp" },
        { source: "Asmar Studio/Gallery/g6gyalwx3dqd3ijdh4yn", description: "Skeleton" },
        { source: "Asmar Studio/Gallery/ps9vzu85jy3o57dqqrrz", description: "Suicide Squad" },
        { source: "Asmar Studio/Gallery/d6o4rkdvzh9vn1kuzmuz", description: "Superman at Comic-Con" },
        { source: "Asmar Studio/Gallery/jrusk6xgmffxzu67cmrp", description: "The Great Wall" },
        { source: "Asmar Studio/Gallery/dvxgk53vkt53rzyfndqd", description: "The Meg Tunnel" },
        { source: "Asmar Studio/Gallery/xabls8ezqqqqt8xd4nqh", description: "T-Rex" },
        { source: "Asmar Studio/Gallery/tjirqa1q7gvgtzuts7ew", description: "Touching Up T-Rex Head" },
        { source: "Asmar Studio/Gallery/s8th62axqvr0ugk8zw83", description: "Checking T-Rex Teeth" },
        { source: "Asmar Studio/Gallery/p1hqv3wsxjumdqsyifxa", description: "More T-Rex Work" },
        { source: "Asmar Studio/Gallery/o4cvzmvphlek2fehxunu", description: "Another Convention Booth" },
    ]

    const [isExpanded, setIsExpanded] = useState(false);

    const toggleGalleryView = () => {
        setIsExpanded(!isExpanded);
    }

    const displayedImages = isExpanded ? imageList : imageList.slice(0, 9);

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
            <GalleryItem items={displayedImages} setCurrentIndex={(index) => setCurrentIndex(index)} />
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
            <div className={styles.button_div}>
                <button onClick={toggleGalleryView}>
                    {isExpanded ? 'View Less' : 'View More'}
                </button>
            </div>
        </div>
    )
}
