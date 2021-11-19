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
      src: 'https://i.postimg.cc/HL6NSPcX/pexels-fauxels-3184291-min-opt.jpg',
      altText: 'Titulo',
      caption: 'Bienvenidos al Intranet de Stefanini'
    },
    {
      src: 'https://i.postimg.cc/1zBBmnyQ/pexels-andrea-piacquadio-3769021-min-opt.jpg',
      altText: 'Titulo',
      caption: 'Conoce los beneficios que tenemos para ti'
    },
    {
      src: 'https://i.postimg.cc/2SFMW5CH/pexels-fauxels-3183197-min-opt.jpg',  
      altText: 'Titulo',
      caption: 'Te ayudamos a desarrollar tus habilidades'
    },
    {
      src: 'https://i.postimg.cc/zBPkhsL2/mentoring-min-opt.jpg',  
      altText: 'Titulo',
      caption: 'Te acompañamos en todo tu proceso'
    },
    {
      src: 'https://i.postimg.cc/85s0xBM3/cumple-min.jpg',  
      altText: 'Titulo',
      caption: 'Podras ver los cumpleañeros del mes'
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
          <CarouselCaption className="caption"  captionHeader={item.caption} />
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
  