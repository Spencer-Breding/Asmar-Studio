"use client";
import { useState, useEffect } from 'react';
import GalleryItem from './galleryItem';
import styles from '../styles/Gallery.module.css';
import Lightbox from './lightbox';

export default function ImageGallery() {
    const [currentIndex, setCurrentIndex] = useState(null);
    const [windowWidth, setWindowWidth] = useState(0);

    const imageList = [
        { source: "./images/gallery/Caterpilla.webp", description: "Absolem Caterpillar Alice in Wonderland" },
        { source: "./images/gallery/Alaska.webp", description: "Alaska Air Tail Section Display" },
        { source: "./images/gallery/Siege.webp", description: "City Under Siege" },
        { source: "./images/gallery/CustomBar.webp", description: "Bar Backdrop" },
        { source: "./images/gallery/CustomDesk.webp", description: "Custom Sculpted Desk" },
        { source: "./images/gallery/Disenchanted.webp", description: "Disenchanted" },
        { source: "./images/gallery/DisplayStand.webp", description: "Custom Display Stand" },
        { source: "./images/gallery/Dora.webp", description: "Ball Pit" },
        { source: "./images/gallery/Dragon.webp", description: "Chinese Dragon" },
        { source: "./images/gallery/DragonHead.webp", description: "Dragon's Face Fireplace" },
        { source: "./images/gallery/Espolon.webp", description: "Espolón Tequila" },
        { source: "./images/gallery/Frogcats.webp", description: "The Frogcats" },
        { source: "./images/gallery/Frogcats2.webp", description: "Frogcats Display" },
        { source: "./images/gallery/GiantClam.webp", description: "Giant Clam with Pearl" },
        { source: "./images/gallery/Throne.webp", description: "30ft tall Iron Throne" },
        { source: "./images/gallery/GiantIronThroneRockefellerCenter.webp", description: "30ft tall Iron Throne - Rockefeller Center" },
        { source: "./images/gallery/GiantLipstick.webp", description: "6ft Tall Lipstick" },
        { source: "./images/gallery/GoldenGate.webp", description: "Golden Gate Bridge" },
        { source: "./images/gallery/HauntedHouse.webp", description: "Haunted House Entrance" },
        { source: "./images/gallery/HouseWithClocks.webp", description: "The House with a Clock in its Walls" },
        { source: "./images/gallery/IMAXDog.webp", description: "IMAX Dog" },
        { source: "./images/gallery/KongHand.webp", description: "Loading Kong's Hand" },
        { source: "./images/gallery/KongSkull.webp", description: "Skulls at Kong's Island" },
        { source: "./images/gallery/Cart.webp", description: "Kristoff's Cart" },
        { source: "./images/gallery/MedievalEntrance.webp", description: "Medieval Entrance" },
        { source: "./images/gallery/Mowgli.webp", description: "Mowgli" },
        { source: "./images/gallery/Raven.webp", description: "Raven" },
        { source: "./images/gallery/Turtles.webp", description: "Ninja Turtles" },
        { source: "./images/gallery/Paramount.webp", description: "Paramount Mountain" },
        { source: "./images/gallery/Pinocchio.webp", description: "3D Pinocchio Billboard" },
        { source: "./images/gallery/QueensGambit.webp", description: "Giant Chess Pieces" },
        { source: "./images/gallery/Rampage.webp", description: "Destroyed Freeway Ramp" },
        { source: "./images/gallery/Skeleton.webp", description: "Skeleton" },
        { source: "./images/gallery/SuicideSquad.webp", description: "Suicide Squad" },
        { source: "./images/gallery/SupermanComicCon.webp", description: "Superman at Comic-Con" },
        { source: "./images/gallery/GreatWall.webp", description: "The Great Wall" },
        { source: "./images/gallery/TheMeg.webp", description: "The Meg Tunnel" },
        { source: "./images/gallery/ANWTRex.webp", description: "T-Rex" },
        { source: "./images/gallery/TrexHead.webp", description: "Touching Up T-Rex Head" },
        { source: "./images/gallery/TRexHead2.webp", description: "Checking T-Rex Teeth" },
        { source: "./images/gallery/TrexProgress.webp", description: "More T-Rex Work" },
        { source: "./images/gallery/UglyDolls.webp", description: "Another Convention Booth" },
    ]

    const [isExpanded, setIsExpanded] = useState(false);

    const toggleGalleryView = () => {
        const newExpandedState = !isExpanded;
        setIsExpanded(newExpandedState);

        sessionStorage.setItem('galleryIsExpanded', newExpandedState);
    }

    useEffect(() => {
        const savedState = sessionStorage.getItem('galleryIsExpanded');

        if (savedState !== null) {
            setIsExpanded(savedState === 'true');
        }
    }, []);

    const displayedImages = isExpanded ? imageList : imageList.slice(0, 6);

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

    useEffect(() => {
        const updateWidth = () => {
            setWindowWidth(window.innerWidth);
        };
        window.addEventListener('resize', updateWidth);
        updateWidth();
        return () => window.removeEventListener('resize', updateWidth);
    }, []);

    const isMobile = windowWidth <= 1088;

    return (
        <div className={styles.container} id="galleryContainer">
            {isMobile ? (
                // Mobile View: Wrap every two items in a two-row container
                imageList.map((item, index) => (
                    index % 2 === 0 ? (
                        <div className={styles.twoRowContainer} key={index}>
                            <GalleryItem item={imageList[index]} setCurrentIndex={() => setCurrentIndex(index)} />
                            {imageList[index + 1] && <GalleryItem item={imageList[index + 1]} setCurrentIndex={() => setCurrentIndex(index + 1)} />}
                        </div>
                    ) : null
                ))
            ) : (
                // Desktop View: Display items individually
                displayedImages.map((item, index) => (
                    <GalleryItem item={item} setCurrentIndex={() => setCurrentIndex(index)} key={index} />
                ))
            )}
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
                    {isExpanded ? 'View Less' : 'View All'}
                </button>
            </div>
        </div>
    )
}
