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
      src: 'https://i.postimg.cc/qBXXGsxJ/Folleto-Seguro-Complementario-1-page-0001.jpg',
      altText: 'Titulo',
      caption: 'Description'
    },
    {
      src: 'https://i.postimg.cc/nr0mf13q/Folleto-Seguro-Complementario-2-page-0001.jpg',
      altText: 'Titulo',
      caption: 'Description'
    },
    {
      src: 'https://i.postimg.cc/WpngZ2st/Folleto-Seguro-Complementario-3-page-0001.jpg',
      altText: 'Titulo',
      caption: 'Description'
    },
    {
      src: 'https://i.postimg.cc/TwvgV1y5/Folleto-Seguro-Complementario-4-page-0001.jpg',
      altText: 'Titulo',
      caption: 'Description'
    },
    {
      src: 'https://i.postimg.cc/FRbcDvcW/Folleto-Seguro-Complementario-5-page-0001.jpg',
      altText: 'Titulo',
      caption: 'Description'
    },
    {
      src: 'https://i.postimg.cc/vTQnKKtQ/Folleto-Seguro-Complementario-6-page-0001.jpg',
      altText: 'Titulo',
      caption: 'Description'
    },
    {
      src: 'https://i.postimg.cc/nLDq9BLt/Folleto-Seguro-Complementario-7-page-0001.jpg',
      altText: 'Titulo',
      caption: 'Description'
    },
    {
      src: 'https://i.postimg.cc/CLxDHWK7/Folleto-Seguro-Complementario-8-page-0001.jpg',
      altText: 'Titulo',
      caption: 'Description'
    }
    ,
    {
      src: 'https://i.postimg.cc/P509GgVz/INFOGRAFIA-APP-WEB-v2020-1-page-0001.jpg',
      altText: 'Titulo',
      caption: 'Description'
    },
    {
      src: 'https://i.postimg.cc/Qt3zCp3F/INFOGRAFIA-APP-WEB-v2020-2-page-0001.jpg',
      altText: 'Titulo',
      caption: 'Description'
    },
    {
      src: 'https://i.postimg.cc/JhWx5Mdg/afiche-reembolso-page-0001.jpg',
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
