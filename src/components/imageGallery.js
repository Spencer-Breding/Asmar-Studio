"use client";
import { useState, useEffect } from 'react';
import GalleryItem from './galleryItem';
import styles from '../styles/Gallery.module.css';
import Lightbox from './lightbox';

export default function ImageGallery() {
    const [currentIndex, setCurrentIndex] = useState(null);

    const imageList = [
        { source: "./images/gallery/Caterpilla.jpg", description: "Absolem Caterpillar Alice in Wonderland" },
        { source: "./images/gallery/Alaska.jpg", description: "Alaska Air Tail Section Display" },
        { source: "./images/gallery/Siege.jpg", description: "City Under Siege" },
        { source: "./images/gallery/CustomBar.jpg", description: "Bar Backdrop" },
        { source: "./images/gallery/CustomDesk.jpg", description: "Custom Sculpted Desk" },
        { source: "./images/gallery/Disenchanted.jpg", description: "Disenchanted" },
        { source: "./images/gallery/DisplayStand.jpg", description: "Custom Display Stand" },
        { source: "./images/gallery/Dora.jpg", description: "Ball Pit" },
        { source: "./images/gallery/Dragon.jpg", description: "Chinese Dragon" },
        { source: "./images/gallery/DragonHead.jpg", description: "Dragon's Face Fireplace" },
        { source: "./images/gallery/Espolon.jpg", description: "Epsolon Tequila" },
        { source: "./images/gallery/Frogcats.png", description: "The Frogcats" },
        { source: "./images/gallery/FrogCats2.png", description: "Frogcats Display" },
        { source: "./images/gallery/GiantClam.jpg", description: "Giant Clam with Pearl" },
        { source: "./images/gallery/Throne.jpg", description: "30ft tall Iron Throne" },
        { source: "./images/gallery/ThroneRockefeller.jpg", description: "30ft tall Iron Throne - Rockefeller Center" },
        { source: "./images/gallery/GiantLipstick.jpg", description: "6ft Tall Lipstick" },
        { source: "./images/gallery/GoldenGate.jpg", description: "Golden Gate Bridge" },
        { source: "./images/gallery/HauntedHouse.jpg", description: "Haunted House Entrance" },
        { source: "./images/gallery/HouseWithClocks.jpg", description: "The House with a Clock in its Walls" },
        { source: "./images/gallery/IMAXDog.jpg", description: "IMAX Dog" },
        { source: "./images/gallery/KongHand.jpg", description: "Loading Kong's Hand" },
        { source: "./images/gallery/KongSkull.jpg", description: "Skulls at Kong's Island" },
        { source: "./images/gallery/Cart.jpg", description: "Kristoff's Cart" },
        { source: "./images/gallery/Mowgli.jpg", description: "Mowgli" },
        { source: "./images/gallery/Raven.jpg", description: "Raven" },
        { source: "./images/gallery/Turtles.jpg", description: "Ninja Turtles" },
        { source: "./images/gallery/Paramount.jpg", description: "Paramount Mountain" },
        { source: "./images/gallery/Pinocchio.jpg", description: "3D Pinocchio Billboard" },
        { source: "./images/gallery/QueensGambit.png", description: "Giant Chess Pieces" },
        { source: "./images/gallery/Rampage.jpg", description: "Destroyed Freeway Ramp" },
        { source: "./images/gallery/Skeleton.jpeg", description: "Skeleton" },
        { source: "./images/gallery/TheMeg.jpg", description: "The Meg Tunnel" },
        { source: "./images/gallery/ANWTRex.png", description: "T-Rex" },
        { source: "./images/gallery/TrexHead.jpg", description: "Touching Up T-Rex Head" },
        { source: "./images/gallery/TRexHead2.jpg", description: "Checking T-Rex Teeth" },
        { source: "./images/gallery/TrexProgress.jpg", description: "More T-Rex Work" },
        { source: "./images/gallery/UglyDolls.jpg", description: "Another Convention Booth" },
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
