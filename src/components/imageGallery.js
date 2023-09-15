"use client";
import { useState, useEffect } from 'react';
import GalleryItem from './galleryItem';
import styles from '../styles/Gallery.module.css';
import Lightbox from './lightbox';

export default function ImageGallery() {
    const [currentIndex, setCurrentIndex] = useState(null);

    const imageList = [
        { source: "./images/gallery/Caterpilla.webp", description: "Absolem Caterpillar Alice in Wonderland", loadingType:"eager" },
        { source: "./images/gallery/Alaska.webp", description: "Alaska Air Tail Section Display", loadingType:"eager" },
        { source: "./images/gallery/Siege.webp", description: "City Under Siege", loadingType: "eager" },
        { source: "./images/gallery/CustomBar.webp", description: "Bar Backdrop", loadingType: "lazy" },
        { source: "./images/gallery/CustomDesk.webp", description: "Custom Sculpted Desk", loadingType: "lazy" },
        { source: "./images/gallery/Disenchanted.webp", description: "Disenchanted", loadingType: "lazy" },
        { source: "./images/gallery/DisplayStand.webp", description: "Custom Display Stand", loadingType: "lazy" },
        { source: "./images/gallery/Dora.webp", description: "Ball Pit", loadingType: "lazy" },
        { source: "./images/gallery/Dragon.webp", description: "Chinese Dragon", loadingType: "lazy" },
        { source: "./images/gallery/DragonHead.webp", description: "Dragon's Face Fireplace", loadingType: "lazy" },
        { source: "./images/gallery/Espolon.webp", description: "Epsolon Tequila", loadingType: "lazy" },
        { source: "./images/gallery/Frogcats.png", description: "The Frogcats", loadingType: "lazy" },
        { source: "./images/gallery/Frogcats2.png", description: "Frogcats Display", loadingType: "lazy" },
        { source: "./images/gallery/GiantClam.webp", description: "Giant Clam with Pearl", loadingType: "lazy" },
        { source: "./images/gallery/Throne.webp", description: "30ft tall Iron Throne", loadingType: "lazy" },
        { source: "./images/gallery/ThroneRockefeller.webp", description: "30ft tall Iron Throne - Rockefeller Center", loadingType: "lazy" },
        { source: "./images/gallery/GiantLipstick.webp", description: "6ft Tall Lipstick", loadingType: "lazy" },
        { source: "./images/gallery/GoldenGate.webp", description: "Golden Gate Bridge", loadingType: "lazy" },
        { source: "./images/gallery/HauntedHouse.webp", description: "Haunted House Entrance", loadingType: "lazy" },
        { source: "./images/gallery/HouseWithClocks.webp", description: "The House with a Clock in its Walls", loadingType: "lazy" },
        { source: "./images/gallery/IMAXDog.webp", description: "IMAX Dog", loadingType: "lazy" },
        { source: "./images/gallery/KongHand.webp", description: "Loading Kong's Hand", loadingType: "lazy" },
        { source: "./images/gallery/KongSkull.webp", description: "Skulls at Kong's Island", loadingType: "lazy" },
        { source: "./images/gallery/Cart.webp", description: "Kristoff's Cart", loadingType: "lazy" },
        { source: "./images/gallery/Mowgli.webp", description: "Mowgli", loadingType: "lazy" },
        { source: "./images/gallery/Raven.webp", description: "Raven", loadingType: "lazy" },
        { source: "./images/gallery/Turtles.webp", description: "Ninja Turtles", loadingType: "lazy" },
        { source: "./images/gallery/Paramount.webp", description: "Paramount Mountain", loadingType: "lazy" },
        { source: "./images/gallery/Pinocchio.webp", description: "3D Pinocchio Billboard", loadingType: "lazy" },
        { source: "./images/gallery/QueensGambit.png", description: "Giant Chess Pieces", loadingType: "lazy" },
        { source: "./images/gallery/Rampage.webp", description: "Destroyed Freeway Ramp", loadingType: "lazy" },
        { source: "./images/gallery/Skeleton.jpeg", description: "Skeleton", loadingType: "lazy" },
        { source: "./images/gallery/TheMeg.webp", description: "The Meg Tunnel", loadingType: "lazy" },
        { source: "./images/gallery/ANWTRex.png", description: "T-Rex", loadingType: "lazy" },
        { source: "./images/gallery/TrexHead.webp", description: "Touching Up T-Rex Head", loadingType: "lazy" },
        { source: "./images/gallery/TRexHead2.webp", description: "Checking T-Rex Teeth", loadingType: "lazy" },
        { source: "./images/gallery/TrexProgress.webp", description: "More T-Rex Work", loadingType: "lazy" },
        { source: "./images/gallery/UglyDolls.webp", description: "Another Convention Booth", loadingType: "lazy" },
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
