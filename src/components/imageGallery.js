"use client";
import { useState, useEffect } from 'react';
import GalleryItem from './galleryItem';
import styles from '../styles/Gallery.module.css';
import Lightbox from './lightbox';

export default function ImageGallery() {
    const [currentIndex, setCurrentIndex] = useState(null);

    const imageList = [
        { source: "./images/gallery/Caterpilla.webp", description: "Absolem Caterpillar Alice in Wonderland", priorityType: true },
        { source: "./images/gallery/Alaska.webp", description: "Alaska Air Tail Section Display", priorityType: true },
        { source: "./images/gallery/Siege.webp", description: "City Under Siege", priorityType: true },
        { source: "./images/gallery/CustomBar.webp", description: "Bar Backdrop", priorityType: true },
        { source: "./images/gallery/CustomDesk.webp", description: "Custom Sculpted Desk", priorityType: true },
        { source: "./images/gallery/Disenchanted.webp", description: "Disenchanted", priorityType: true },
        { source: "./images/gallery/DisplayStand.webp", description: "Custom Display Stand", priorityType: false },
        { source: "./images/gallery/Dora.webp", description: "Ball Pit", priorityType: false },
        { source: "./images/gallery/Dragon.webp", description: "Chinese Dragon", priorityType: false },
        { source: "./images/gallery/DragonHead.webp", description: "Dragon's Face Fireplace", priorityType: false },
        { source: "./images/gallery/Espolon.webp", description: "Epsolon Tequila", priorityType: false },
        { source: "./images/gallery/Frogcats.png", description: "The Frogcats", priorityType: false },
        { source: "./images/gallery/Frogcats2.png", description: "Frogcats Display", priorityType: false },
        { source: "./images/gallery/GiantClam.webp", description: "Giant Clam with Pearl", priorityType: false },
        { source: "./images/gallery/Throne.webp", description: "30ft tall Iron Throne", priorityType: false },
        { source: "./images/gallery/ThroneRockefeller.webp", description: "30ft tall Iron Throne - Rockefeller Center", priorityType: false },
        { source: "./images/gallery/GiantLipstick.webp", description: "6ft Tall Lipstick", priorityType: false },
        { source: "./images/gallery/GoldenGate.webp", description: "Golden Gate Bridge", priorityType: false },
        { source: "./images/gallery/HauntedHouse.webp", description: "Haunted House Entrance", priorityType: false },
        { source: "./images/gallery/HouseWithClocks.webp", description: "The House with a Clock in its Walls", priorityType: false },
        { source: "./images/gallery/IMAXDog.webp", description: "IMAX Dog", priorityType: false },
        { source: "./images/gallery/KongHand.webp", description: "Loading Kong's Hand", priorityType: false },
        { source: "./images/gallery/KongSkull.webp", description: "Skulls at Kong's Island", priorityType: false },
        { source: "./images/gallery/Cart.webp", description: "Kristoff's Cart", priorityType: false },
        { source: "./images/gallery/Mowgli.webp", description: "Mowgli", priorityType: false },
        { source: "./images/gallery/Raven.webp", description: "Raven", priorityType: false },
        { source: "./images/gallery/Turtles.webp", description: "Ninja Turtles", priorityType: false },
        { source: "./images/gallery/Paramount.webp", description: "Paramount Mountain", priorityType: false },
        { source: "./images/gallery/Pinocchio.webp", description: "3D Pinocchio Billboard", priorityType: false },
        { source: "./images/gallery/QueensGambit.png", description: "Giant Chess Pieces", priorityType: false },
        { source: "./images/gallery/Rampage.webp", description: "Destroyed Freeway Ramp", priorityType: false },
        { source: "./images/gallery/Skeleton.jpeg", description: "Skeleton", priorityType: false },
        { source: "./images/gallery/TheMeg.webp", description: "The Meg Tunnel", priorityType: false },
        { source: "./images/gallery/ANWTRex.png", description: "T-Rex", priorityType: false },
        { source: "./images/gallery/TrexHead.webp", description: "Touching Up T-Rex Head", priorityType: false },
        { source: "./images/gallery/TRexHead2.webp", description: "Checking T-Rex Teeth", priorityType: false },
        { source: "./images/gallery/TrexProgress.webp", description: "More T-Rex Work", priorityType: false },
        { source: "./images/gallery/UglyDolls.webp", description: "Another Convention Booth", priorityType: false },
    ]

    const thumbList = [
        { source: "./images/gallery/Caterpilla.webp", description: "Absolem Caterpillar Alice in Wonderland", priorityType: true },
        { source: "./images/gallery/Alaska.webp", description: "Alaska Air Tail Section Display", priorityType: true },
        { source: "./images/gallery/Siege.webp", description: "City Under Siege", priorityType: true },
        { source: "./images/gallery/CustomBar.webp", description: "Bar Backdrop", priorityType: true },
        { source: "./images/gallery/CustomDesk.webp", description: "Custom Sculpted Desk", priorityType: true },
        { source: "./images/gallery/Disenchanted.webp", description: "Disenchanted", priorityType: true },
        { source: "./images/gallery/DisplayStand.webp", description: "Custom Display Stand", priorityType: false },
        { source: "./images/gallery/DoraThumb.webp", description: "Ball Pit", priorityType: false },
        { source: "./images/gallery/Dragon.webp", description: "Chinese Dragon", priorityType: false },
        { source: "./images/gallery/DragonHead.webp", description: "Dragon's Face Fireplace", priorityType: false },
        { source: "./images/gallery/Espolon.webp", description: "Epsolon Tequila", priorityType: false },
        { source: "./images/gallery/Frogcats.png", description: "The Frogcats", priorityType: false },
        { source: "./images/gallery/Frogcats2.png", description: "Frogcats Display", priorityType: false },
        { source: "./images/gallery/GiantClam.webp", description: "Giant Clam with Pearl", priorityType: false },
        { source: "./images/gallery/Throne.webp", description: "30ft tall Iron Throne", priorityType: false },
        { source: "./images/gallery/ThroneRockefeller.webp", description: "30ft tall Iron Throne - Rockefeller Center", priorityType: false },
        { source: "./images/gallery/GiantLipstick.webp", description: "6ft Tall Lipstick", priorityType: false },
        { source: "./images/gallery/GoldenGate.webp", description: "Golden Gate Bridge", priorityType: false },
        { source: "./images/gallery/HauntedHouse.webp", description: "Haunted House Entrance", priorityType: false },
        { source: "./images/gallery/HouseWithClocks.webp", description: "The House with a Clock in its Walls", priorityType: false },
        { source: "./images/gallery/IMAXDog.webp", description: "IMAX Dog", priorityType: false },
        { source: "./images/gallery/KongHand.webp", description: "Loading Kong's Hand", priorityType: false },
        { source: "./images/gallery/KongSkull.webp", description: "Skulls at Kong's Island", priorityType: false },
        { source: "./images/gallery/CartThumb.webp", description: "Kristoff's Cart", priorityType: false },
        { source: "./images/gallery/Mowgli.webp", description: "Mowgli", priorityType: false },
        { source: "./images/gallery/Raven.webp", description: "Raven", priorityType: false },
        { source: "./images/gallery/Turtles.webp", description: "Ninja Turtles", priorityType: false },
        { source: "./images/gallery/Paramount.webp", description: "Paramount Mountain", priorityType: false },
        { source: "./images/gallery/Pinocchio.webp", description: "3D Pinocchio Billboard", priorityType: false },
        { source: "./images/gallery/QueensGambit.png", description: "Giant Chess Pieces", priorityType: false },
        { source: "./images/gallery/Rampage.webp", description: "Destroyed Freeway Ramp", priorityType: false },
        { source: "./images/gallery/Skeleton.jpeg", description: "Skeleton", priorityType: false },
        { source: "./images/gallery/TheMeg.webp", description: "The Meg Tunnel", priorityType: false },
        { source: "./images/gallery/ANWTRex.png", description: "T-Rex", priorityType: false },
        { source: "./images/gallery/TrexHead.webp", description: "Touching Up T-Rex Head", priorityType: false },
        { source: "./images/gallery/TRexHead2.webp", description: "Checking T-Rex Teeth", priorityType: false },
        { source: "./images/gallery/TrexProgress.webp", description: "More T-Rex Work", priorityType: false },
        { source: "./images/gallery/UglyDolls.webp", description: "Another Convention Booth", priorityType: false },
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
            <GalleryItem items={thumbList} setCurrentIndex={(index) => setCurrentIndex(index)} />
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
