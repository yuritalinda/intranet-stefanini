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
      src: 'https://i.postimg.cc/CKyLbXcr/Folleto-Seguro-Complementario-1-page-0001.jpg',
      altText: 'Titulo',
      caption: 'Description'
    },
    {
      src: 'https://i.postimg.cc/RFSmRBKd/Folleto-Seguro-Complementario-2-page-0001.jpg',
      altText: 'Titulo',
      caption: 'Description'
    },
    {
      src: 'https://i.postimg.cc/tgHpsPgL/Folleto-Seguro-Complementario-3-page-0001.jpg',
      altText: 'Titulo',
      caption: 'Description'
    },
    {
      src: 'https://i.postimg.cc/bNszWpMF/Folleto-Seguro-Complementario-4-page-0001.jpg',
      altText: 'Titulo',
      caption: 'Description'
    },
    {
      src: 'https://i.postimg.cc/HsRpCF1W/Folleto-Seguro-Complementario-5-page-0001.jpg',
      altText: 'Titulo',
      caption: 'Description'
    },
    {
      src: 'https://i.postimg.cc/cL3d1TdR/Folleto-Seguro-Complementario-6-page-0001.jpg',
      altText: 'Titulo',
      caption: 'Description'
    },
    {
      src: 'https://i.postimg.cc/ZYfbwCfd/Folleto-Seguro-Complementario-7-page-0001.jpg',
      altText: 'Titulo',
      caption: 'Description'
    },
    {
      src: 'https://i.postimg.cc/9ftVZMRz/Folleto-Seguro-Complementario-8-page-0001.jpg',
      altText: 'Titulo',
      caption: 'Description'
    },
    {
      src: 'https://i.postimg.cc/Pxw7YVFy/Disen-o-sin-ti-tulo-7.png',
      altText: 'Titulo',
      caption: 'Description'
    },
    {
      src: 'https://i.postimg.cc/1X4ZkrWN/INFOGRAFIA-APP-WEB-v2020-1-page-0001.jpg',
      altText: 'Titulo',
      caption: 'Description'
    },
    {
      src: 'https://i.postimg.cc/Rh8z4J8p/INFOGRAFIA-APP-WEB-v2020-2-page-0001.jpg',
      altText: 'Titulo',
      caption: 'Description'
    },
    {
      src: 'https://i.postimg.cc/pTcsK696/IMG-5152.jpg',
      altText: 'Titulo',
      caption: 'Description'
    },
    {
      src: 'https://i.postimg.cc/8cqw0fmd/IMG-5153.jpg',
      altText: 'Titulo',
      caption: 'Description'
    }
];
  
const SeguroComp = (props) => {
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
        <img className="carr-img" src={item.src} alt={item.altText} />
        <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      interval={false}
    >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
  );
}

export default SeguroComp;
