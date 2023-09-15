"use client";
import { useState, useEffect } from 'react';
import GalleryItem from './galleryItem';
import styles from '../styles/Gallery.module.css';
import Lightbox from './lightbox';

export default function ImageGallery() {
    const [currentIndex, setCurrentIndex] = useState(null);

    const imageList = [
        { source: "./images/gallery/Caterpilla.webp", description: "Absolem Caterpillar Alice in Wonderland"  },
        { source: "./images/gallery/Alaska.webp", description: "Alaska Air Tail Section Display"  },
        { source: "./images/gallery/Siege.webp", description: "City Under Siege"  },
        { source: "./images/gallery/CustomBar.webp", description: "Bar Backdrop"  },
        { source: "./images/gallery/CustomDesk.webp", description: "Custom Sculpted Desk"  },
        { source: "./images/gallery/Disenchanted.webp", description: "Disenchanted"  },
        { source: "./images/gallery/DisplayStand.webp", description: "Custom Display Stand" },
        { source: "./images/gallery/Dora.webp", description: "Ball Pit"},
        { source: "./images/gallery/Dragon.webp", description: "Chinese Dragon"  },
        { source: "./images/gallery/DragonHead.webp", description: "Dragon's Face Fireplace"},
        { source: "./images/gallery/Espolon.webp", description: "Epsolon Tequila"},
        { source: "./images/gallery/Frogcats.png", description: "The Frogcats"},
        { source: "./images/gallery/Frogcats2.png", description: "Frogcats Display"},
        { source: "./images/gallery/GiantClam.webp", description: "Giant Clam with Pearl"},
        { source: "./images/gallery/Throne.webp", description: "30ft tall Iron Throne"},
        { source: "./images/gallery/ThroneRockefeller.webp", description: "30ft tall Iron Throne - Rockefeller Center"},
        { source: "./images/gallery/GiantLipstick.webp", description: "6ft Tall Lipstick"},
        { source: "./images/gallery/GoldenGate.webp", description: "Golden Gate Bridge"},
        { source: "./images/gallery/HauntedHouse.webp", description: "Haunted House Entrance"},
        { source: "./images/gallery/HouseWithClocks.webp", description: "The House with a Clock in its Walls"},
        { source: "./images/gallery/IMAXDog.webp", description: "IMAX Dog"},
        { source: "./images/gallery/KongHand.webp", description: "Loading Kong's Hand"},
        { source: "./images/gallery/KongSkull.webp", description: "Skulls at Kong's Island"},
        { source: "./images/gallery/Cart.webp", description: "Kristoff's Cart"},
        { source: "./images/gallery/Mowgli.webp", description: "Mowgli"},
        { source: "./images/gallery/Raven.webp", description: "Raven"},
        { source: "./images/gallery/Turtles.webp", description: "Ninja Turtles"},
        { source: "./images/gallery/Paramount.webp", description: "Paramount Mountain"},
        { source: "./images/gallery/Pinocchio.webp", description: "3D Pinocchio Billboard"},
        { source: "./images/gallery/QueensGambit.png", description: "Giant Chess Pieces"},
        { source: "./images/gallery/Rampage.webp", description: "Destroyed Freeway Ramp"},
        { source: "./images/gallery/Skeleton.jpeg", description: "Skeleton"},
        { source: "./images/gallery/TheMeg.webp", description: "The Meg Tunnel"},
        { source: "./images/gallery/ANWTRex.png", description: "T-Rex"},
        { source: "./images/gallery/TrexHead.webp", description: "Touching Up T-Rex Head"},
        { source: "./images/gallery/TRexHead2.webp", description: "Checking T-Rex Teeth"},
        { source: "./images/gallery/TrexProgress.webp", description: "More T-Rex Work"},
        { source: "./images/gallery/UglyDolls.webp", description: "Another Convention Booth"},
    ]

    const thumbList = [
        { source: "./images/gallery/Caterpilla.webp", description: "Absolem Caterpillar Alice in Wonderland", priorityType: true, loadingType: "eager" },
        { source: "./images/gallery/Alaska.webp", description: "Alaska Air Tail Section Display", priorityType: true, loadingType: "eager" },
        { source: "./images/gallery/Siege.webp", description: "City Under Siege", priorityType: true, loadingType: "eager" },
        { source: "./images/gallery/CustomBar.webp", description: "Bar Backdrop", priorityType: true, loadingType: "eager" },
        { source: "./images/gallery/CustomDesk.webp", description: "Custom Sculpted Desk", priorityType: true, loadingType: "eager" },
        { source: "./images/gallery/Disenchanted.webp", description: "Disenchanted", priorityType: true, loadingType: "eager" },
        { source: "./images/gallery/DisplayStand.webp", description: "Custom Display Stand", priorityType: false, loadingType: "lazy" },
        { source: "./images/gallery/DoraThumb.webp", description: "Ball Pit", priorityType: false, loadingType: "lazy" },
        { source: "./images/gallery/Dragon.webp", description: "Chinese Dragon", priorityType: false, loadingType: "lazy" },
        { source: "./images/gallery/DragonHead.webp", description: "Dragon's Face Fireplace", priorityType: false, loadingType: "lazy" },
        { source: "./images/gallery/Espolon.webp", description: "Epsolon Tequila", priorityType: false, loadingType: "lazy" },
        { source: "./images/gallery/Frogcats.png", description: "The Frogcats", priorityType: false, loadingType: "lazy" },
        { source: "./images/gallery/Frogcats2.png", description: "Frogcats Display", priorityType: false, loadingType: "lazy" },
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
        { source: "./images/gallery/CartThumb.webp", description: "Kristoff's Cart", priorityType: false, loadingType: "lazy" },
        { source: "./images/gallery/Mowgli.webp", description: "Mowgli", priorityType: false, loadingType: "lazy" },
        { source: "./images/gallery/Raven.webp", description: "Raven", priorityType: false, loadingType: "lazy" },
        { source: "./images/gallery/Turtles.webp", description: "Ninja Turtles", priorityType: false, loadingType: "lazy" },
        { source: "./images/gallery/Paramount.webp", description: "Paramount Mountain", priorityType: false, loadingType: "lazy" },
        { source: "./images/gallery/Pinocchio.webp", description: "3D Pinocchio Billboard", priorityType: false, loadingType: "lazy" },
        { source: "./images/gallery/QueensGambit.png", description: "Giant Chess Pieces", priorityType: false, loadingType: "lazy" },
        { source: "./images/gallery/Rampage.webp", description: "Destroyed Freeway Ramp", priorityType: false, loadingType: "lazy" },
        { source: "./images/gallery/Skeleton.jpeg", description: "Skeleton", priorityType: false, loadingType: "lazy" },
        { source: "./images/gallery/TheMeg.webp", description: "The Meg Tunnel", priorityType: false, loadingType: "lazy" },
        { source: "./images/gallery/ANWTRex.png", description: "T-Rex", priorityType: false, loadingType: "lazy" },
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
