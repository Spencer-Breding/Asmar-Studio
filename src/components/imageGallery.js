"use client";
import { useState, useEffect } from 'react';
import GalleryItem from './galleryItem';
import styles from '../styles/Gallery.module.css';
import Lightbox from './lightbox';

export default function ImageGallery() {
    const [currentIndex, setCurrentIndex] = useState(null);

    const imageList = [
        { source: "/images/gallery/AbsolemCaterpillaHookah.jpg", description: "Absolem Caterpillar Alice in Wonderland" },
        { source: "/images/gallery/AlaskaAir.jpg", description: "Alaska Air Tail Section Display" },
        { source: "/images/gallery/CityUnderSiege.jpg", description: "City Under Siege" },
        { source: "/images/gallery/CustomBar.jpg", description: "Bar Backdrop" },
        { source: "/images/gallery/CustomDesk.jpg", description: "Custom Sculpted Desk" },
        { source: "/images/gallery/Disenchanted.jpg", description: "Disenchanted" },
        { source: "/images/gallery/DisplayStand.jpg", description: "Custom Display Stand" },
        { source: "/images/gallery/DoraBallPit.jpg", description: "Ball Pit" },
        { source: "/images/gallery/Dragon.jpg", description: "Chinese Dragon" },
        { source: "/images/gallery/DragonHeadFireplace.jpg", description: "Dragon's Face Fireplace" },
        { source: "/images/gallery/EspolonTequila.jpg", description: "Epsolon Tequila" },
        { source: "/images/gallery/Frogcats.png", description: "The Frogcats" },
        { source: "/images/gallery/FrogCats2.PNG", description: "Frogcats Display" },
        { source: "/images/gallery/GiantClamWithPearl.JPG", description: "Giant Clam with Pearl" },
        { source: "/images/gallery/GiantIronThrone.jpg", description: "30ft tall Iron Throne" },
        { source: "/images/gallery/GiantIronThroneRockefellerCenter.jpg", description: "30ft tall Iron Throne - Rockefeller Center" },
        { source: "/images/gallery/GiantLipstick.JPG", description: "6ft Tall Lipstick" },
        { source: "/images/gallery/GoldenGateBridge.JPG", description: "Golden Gate Bridge" },
        { source: "/images/gallery/HauntedHouse.jpg", description: "Haunted House Entrance" },
        { source: "/images/gallery/HouseWithClocks.jpg", description: "The House with a Clock in its Walls" },
        { source: "/images/gallery/IMAX_GiantDog.jpg", description: "IMAX Dog" },
        { source: "/images/gallery/Kong'sHand.jpg", description: "Loading Kong's Hand" },
        { source: "/images/gallery/KongSkull.jpg", description: "Skulls at Kong's Island" },
        { source: "/images/gallery/Kristoff'sCart.jpg", description: "Kristoff's Cart" },
        { source: "/images/gallery/Mowgli.jpg", description: "Mowgli" },
        { source: "/images/gallery/MythicQuestRaven.jpg", description: "Raven" },
        { source: "/images/gallery/NinjaTurtles.JPG", description: "Ninja Turtles" },
        { source: "/images/gallery/Paramount.jpg", description: "Paramount Mountain" },
        { source: "/images/gallery/Pinocchio Billboard.jpg", description: "3D Pinocchio Billboard" },
        { source: "/images/gallery/QueensGambit.png", description: "Giant Chess Pieces" },
        { source: "/images/gallery/RampageFreewayRamp.JPG", description: "Destroyed Freeway Ramp" },
        { source: "/images/gallery/Skeleton.jpeg", description: "Skeleton" },
        { source: "/images/gallery/TheMeg.jpg", description: "The Meg Tunnel" },
        { source: "/images/gallery/ANW_TRex.PNG", description: "T-Rex" },
        { source: "/images/gallery/TrexHead.jpg", description: "Touching Up T-Rex Head" },
        { source: "/images/gallery/TRexHead2.jpg", description: "Checking T-Rex Teeth" },
        { source: "/images/gallery/TrexInProgress.jpg", description: "More T-Rex Work" },
        { source: "/images/gallery/UglyDollsBooth.jpg", description: "Another Convention Booth" },
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
