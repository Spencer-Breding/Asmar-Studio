"use client";
import { useState, useEffect } from 'react';
import GalleryItem from './galleryItem';
import styles from '../styles/Gallery.module.css';
import Lightbox from './lightbox';

export default function ImageGallery() {
    const [currentIndex, setCurrentIndex] = useState(null);

    const imageList = [
        { source: "./images/gallery/Caterpilla.webp", description: "Absolem Caterpillar Alice in Wonderland", priorityType: true, loadingType: "eager"  },
        { source: "./images/gallery/Alaska.webp", description: "Alaska Air Tail Section Display", priorityType: true, loadingType: "eager"  },
        { source: "./images/gallery/Siege.webp", description: "City Under Siege", priorityType: true, loadingType: "eager"  },
        { source: "./images/gallery/CustomBar.webp", description: "Bar Backdrop", priorityType: true, loadingType: "eager"  },
        { source: "./images/gallery/CustomDesk.webp", description: "Custom Sculpted Desk", priorityType: true, loadingType: "eager"  },
        { source: "./images/gallery/Disenchanted.webp", description: "Disenchanted", priorityType: true, loadingType: "eager"  },
        { source: "./images/gallery/DisplayStand.webp", description: "Custom Display Stand", priorityType: false, loadingType: "lazy" },
        { source: "./images/gallery/Dora.webp", description: "Ball Pit", priorityType: false, loadingType: "lazy" },
        { source: "./images/gallery/Dragon.webp", description: "Chinese Dragon", priorityType: false, loadingType: "lazy"  },
        { source: "./images/gallery/DragonHead.webp", description: "Dragon's Face Fireplace", priorityType: false, loadingType: "lazy" },
        { source: "./images/gallery/Espolon.webp", description: "Epsolon Tequila", priorityType: false, loadingType: "lazy" },
        { source: "./images/gallery/Frogcats.webp", description: "The Frogcats", priorityType: false, loadingType: "lazy" },
        { source: "./images/gallery/Frogcats2.webp", description: "Frogcats Display", priorityType: false, loadingType: "lazy" },
        { source: "./images/gallery/GiantClam.webp", description: "Giant Clam with Pearl", priorityType: false, loadingType: "lazy" },
        { source: "./images/gallery/Throne.webp", description: "30ft tall Iron Throne", priorityType: false, loadingType: "lazy" },
        { source: "./images/gallery/ThroneRockefeller.webp", description: "30ft tall Iron Throne - Rockefeller Center", priorityType: false, loadingType: "lazy" },
        { source: "./images/gallery/GiantLipstick.webp", description: "6ft Tall Lipstick", priorityType: false, loadingType: "lazy" },
        { source: "./images/gallery/GoldenGate.webp", description: "Golden Gate Bridge", priorityType: false, loadingType: "lazy" },
        { source: "./images/gallery/HauntedHouse.webp", description: "Haunted House Entrance", priorityType: false, loadingType: "lazy" },
        { source: "./images/gallery/HouseWithClocks.webp", description: "The House with a Clock in its Walls", priorityType: false, loadingType: "lazy" },
        { source: "./images/gallery/IMAXDog.webp", description: "IMAX Dog", priorityType: false, loadingType: "lazy" },
        { source: "./images/gallery/KongHand.webp", description: "Loading Kong's Hand", priorityType: false, loadingType: "lazy" },
        { source: "./images/gallery/KongSkull.webp", description: "Skulls at Kong's Island", priorityType: false, loadingType: "lazy" },
        { source: "./images/gallery/Cart.webp", description: "Kristoff's Cart", priorityType: false, loadingType: "lazy" },
        { source: "./images/gallery/Mowgli.webp", description: "Mowgli", priorityType: false, loadingType: "lazy" },
        { source: "./images/gallery/Raven.webp", description: "Raven", priorityType: false, loadingType: "lazy" },
        { source: "./images/gallery/Turtles.webp", description: "Ninja Turtles", priorityType: false, loadingType: "lazy" },
        { source: "./images/gallery/Paramount.webp", description: "Paramount Mountain", priorityType: false, loadingType: "lazy" },
        { source: "./images/gallery/Pinocchio.webp", description: "3D Pinocchio Billboard", priorityType: false, loadingType: "lazy" },
        { source: "./images/gallery/QueensGambit.webp", description: "Giant Chess Pieces", priorityType: false, loadingType: "lazy" },
        { source: "./images/gallery/Rampage.webp", description: "Destroyed Freeway Ramp", priorityType: false, loadingType: "lazy" },
        { source: "./images/gallery/Skeleton.webp", description: "Skeleton", priorityType: false, loadingType: "lazy" },
        { source: "./images/gallery/TheMeg.webp", description: "The Meg Tunnel", priorityType: false, loadingType: "lazy" },
        { source: "./images/gallery/ANWTRex.webp", description: "T-Rex", priorityType: false, loadingType: "lazy" },
        { source: "./images/gallery/TrexHead.webp", description: "Touching Up T-Rex Head", priorityType: false, loadingType: "lazy" },
        { source: "./images/gallery/TRexHead2.webp", description: "Checking T-Rex Teeth", priorityType: false, loadingType: "lazy" },
        { source: "./images/gallery/TrexProgress.webp", description: "More T-Rex Work", priorityType: false, loadingType: "lazy" },
        { source: "./images/gallery/UglyDolls.webp", description: "Another Convention Booth", priorityType: false, loadingType: "lazy" },
    ]

    const thumbList = [
        { source: "./images/gallery/CaterpillaThumb.webp", description: "Absolem Caterpillar Alice in Wonderland", priorityType: false, loadingType: "lazy" },
        { source: "./images/gallery/AlaskaThumb.webp", description: "Alaska Air Tail Section Display", priorityType: false, loadingType: "lazy" },
        { source: "./images/gallery/Siege.webp", description: "City Under Siege", priorityType: false, loadingType: "lazy" },
        { source: "./images/gallery/CustomBarThumb.webp", description: "Bar Backdrop", priorityType: false, loadingType: "lazy" },
        { source: "./images/gallery/CustomDeskThumb.webp", description: "Custom Sculpted Desk", priorityType: false, loadingType: "lazy" },
        { source: "./images/gallery/Disenchanted.webp", description: "Disenchanted", priorityType: false, loadingType: "lazy" },
        { source: "./images/gallery/DisplayStandThumb.webp", description: "Custom Display Stand", priorityType: false, loadingType: "lazy" },
        { source: "./images/gallery/DoraThumb.webp", description: "Ball Pit", priorityType: false, loadingType: "lazy" },
        { source: "./images/gallery/DragonThumb.webp", description: "Chinese Dragon", priorityType: false, loadingType: "lazy" },
        { source: "./images/gallery/DragonHeadThumb.webp", description: "Dragon's Face Fireplace", priorityType: false, loadingType: "lazy" },
        { source: "./images/gallery/EspolonThumb.webp", description: "Epsolon Tequila", priorityType: false, loadingType: "lazy" },
        { source: "./images/gallery/Frogcats.webp", description: "The Frogcats", priorityType: false, loadingType: "lazy" },
        { source: "./images/gallery/Frogcats2Thumb.webp", description: "Frogcats Display", priorityType: false, loadingType: "lazy" },
        { source: "./images/gallery/GiantClamThumb.webp", description: "Giant Clam with Pearl", priorityType: false, loadingType: "lazy" },
        { source: "./images/gallery/ThroneThumb.webp", description: "30ft tall Iron Throne", priorityType: false, loadingType: "lazy" },
        { source: "./images/gallery/ThroneRockefeller.webp", description: "30ft tall Iron Throne - Rockefeller Center", priorityType: false, loadingType: "lazy" },
        { source: "./images/gallery/GiantLipstick.webp", description: "6ft Tall Lipstick", priorityType: false, loadingType: "lazy" },
        { source: "./images/gallery/GoldenGateThumb.webp", description: "Golden Gate Bridge", priorityType: false, loadingType: "lazy" },
        { source: "./images/gallery/HauntedHouse.webp", description: "Haunted House Entrance", priorityType: false, loadingType: "lazy" },
        { source: "./images/gallery/HouseWithClocksThumb.webp", description: "The House with a Clock in its Walls", priorityType: false, loadingType: "lazy" },
        { source: "./images/gallery/IMAXDogThumb.webp", description: "IMAX Dog", priorityType: false, loadingType: "lazy" },
        { source: "./images/gallery/KongHand.webp", description: "Loading Kong's Hand", priorityType: false, loadingType: "lazy" },
        { source: "./images/gallery/KongSkullThumb.webp", description: "Skulls at Kong's Island", priorityType: false, loadingType: "lazy" },
        { source: "./images/gallery/CartThumb.webp", description: "Kristoff's Cart", priorityType: false, loadingType: "lazy" },
        { source: "./images/gallery/MowgliThumb.webp", description: "Mowgli", priorityType: false, loadingType: "lazy" },
        { source: "./images/gallery/RavenThumb.webp", description: "Raven", priorityType: false, loadingType: "lazy" },
        { source: "./images/gallery/TurtlesThumb.webp", description: "Ninja Turtles", priorityType: false, loadingType: "lazy" },
        { source: "./images/gallery/Paramount.webp", description: "Paramount Mountain", priorityType: false, loadingType: "lazy" },
        { source: "./images/gallery/Pinocchio.webp", description: "3D Pinocchio Billboard", priorityType: false, loadingType: "lazy" },
        { source: "./images/gallery/QueensGambit.webp", description: "Giant Chess Pieces", priorityType: false, loadingType: "lazy" },
        { source: "./images/gallery/Rampage.webp", description: "Destroyed Freeway Ramp", priorityType: false, loadingType: "lazy" },
        { source: "./images/gallery/SkeletonThumb.webp", description: "Skeleton", priorityType: false, loadingType: "lazy" },
        { source: "./images/gallery/TheMegThumb.webp", description: "The Meg Tunnel", priorityType: false, loadingType: "lazy" },
        { source: "./images/gallery/ANWTRexThumb.webp", description: "T-Rex", priorityType: false, loadingType: "lazy" },
        { source: "./images/gallery/TrexHead.webp", description: "Touching Up T-Rex Head", priorityType: false, loadingType: "lazy" },
        { source: "./images/gallery/TRexHead2.webp", description: "Checking T-Rex Teeth", priorityType: false, loadingType: "lazy" },
        { source: "./images/gallery/TrexProgress.webp", description: "More T-Rex Work", priorityType: false, loadingType: "lazy" },
        { source: "./images/gallery/UglyDolls.webp", description: "Another Convention Booth", priorityType: false, loadingType: "lazy" },
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
        <div className={styles.container}>
            <GalleryItem items={imageList} setCurrentIndex={(index) => setCurrentIndex(index)} />
            {currentIndex !== null && (
                <Lightbox
                    item={imageList[currentIndex]}
                    items={thumbList}
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
