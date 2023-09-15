import React, { useEffect, useState } from 'react';
import { CarouselContainer, CarouselItem, CarouselHeadingText, CarouselImage, ImageContainer, CarouselDescriptionText, TextContainer } from './CarouselStyles';

const Carousel = ({ items, repeat, repeatInterval }) => {
    const [$currentIndex, setCurrentIndex] = useState(0);
    const [isAutomatic, setIsAutomatic] = useState(true);
    const [$showHeadingText, setShowHeadingText] = useState(false);
    const [$showDescriptionText, setShowDescriptionText] = useState(false);
    const [$showImage, setShowImage] = useState(false);

    const goToNextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
        setShowHeadingText(false);
        setShowDescriptionText(false);
        setShowImage(false);
        setIsAutomatic(false);
    };

    useEffect(() => {
        const timeout = setTimeout(() => {
            setShowHeadingText(true);
            setTimeout(() => {
                setShowDescriptionText(true);
                setTimeout(() => {
                    setShowImage(true);
                    setIsAutomatic(true);
                }, 300);
            }, 300);
        }, 300);

        return () => clearTimeout(timeout);
    }, [$currentIndex]);

    useEffect(() => {
        if (repeat && isAutomatic) {
            const interval = setInterval(goToNextSlide, repeatInterval);
            return () => clearInterval(interval);
        }
    }, [repeat, isAutomatic]);

    const handleMouseEnter = () => {
        if (repeat) {
            setIsAutomatic(false);
        }
    };

    const handleMouseLeave = () => {
        if (repeat) {
            setIsAutomatic(true);
        }
    };

    return (
        <>
            <CarouselContainer onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                {items.map((item, index) => (
                    <CarouselItem key={index} $currentIndex={$currentIndex}>
                        <TextContainer>
                            <CarouselHeadingText $showHeadingText={$showHeadingText && index === $currentIndex}>
                                {item.text}
                            </CarouselHeadingText>
                            <CarouselDescriptionText $showDescriptionText={$showDescriptionText && index === $currentIndex}>
                                {item.description}
                            </CarouselDescriptionText>
                        </TextContainer>
                        <ImageContainer>
                            <CarouselImage src={item.imageUrl} alt='' $showImage={$showImage && index === $currentIndex} />
                        </ImageContainer>
                    </CarouselItem>
                ))}
            </CarouselContainer>
        </>
    );
};

export default Carousel;
