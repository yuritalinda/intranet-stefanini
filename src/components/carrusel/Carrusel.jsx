import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import '../carrusel/Carrusel.css';

const items = [
    {
      src: 'https://i.postimg.cc/FHqrFHC8/pexels-andrea-piacquadio-3769021.jpg',
      altText: 'Titulo',
      caption: 'Description'
    },
    {
      src: 'https://i.postimg.cc/BQbf8GF0/pexels-edmond-dante-s-4344860.jpg',
      altText: 'Titulo',
      caption: 'Description'
    },
    {
      src: 'https://i.postimg.cc/cC4yMp5f/pexels-fauxels-3183197.jpg',  
      altText: 'Titulo',
      caption: 'Description'
    },
    {
      src: 'https://i.postimg.cc/q7yTkX36/pexels-fauxels-3184291.jpg',  
      altText: 'Titulo',
      caption: 'Description'
    },
    {
      src: 'https://i.postimg.cc/rwdTHLyJ/pexels-karolina-grabowska-4977479.jpg',  
      altText: 'Titulo',
      caption: 'Description'
    }
  ];
  
  const Carrusel = (props) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);
  
    const next = () => {
      if (animating) return;
      const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
      setActiveIndex(nextIndex);
    }
  
    const previous = () => {
      if (animating) return;
      const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
      setActiveIndex(nextIndex);
    }
  
    const goToIndex = (newIndex) => {
      if (animating) return;
      setActiveIndex(newIndex);
    }
  
    const slides = items.map((item) => {
      return (
        <CarouselItem className="carrusel-item"
          onExiting={() => setAnimating(true)}
          onExited={() => setAnimating(false)}
          key={item.src}
        >
          <img src={item.src} alt={item.altText} />
          <CarouselCaption className="caption" captionText={item.caption} captionHeader={item.caption} />
        </CarouselItem>
      );
    });
  
    return (
      <Carousel
        className="carrusel-container"
        activeIndex={activeIndex}
        next={next}
        previous={previous}
      >
        <CarouselIndicators  items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
        {slides}
        <CarouselControl className="" direction="" directionText="" onClickHandler={previous} />
        <CarouselControl className="" direction="" directionText="" onClickHandler={next} />
      </Carousel>
    );
  }
  
  export default Carrusel;
  