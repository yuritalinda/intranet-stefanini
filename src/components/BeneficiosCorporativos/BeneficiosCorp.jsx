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
      src: 'https://i.postimg.cc/6Q1DjsVX/BENEFICIOS-Y-CONVENIOS-Chile-2021-1-page-0001.jpg',
      altText: 'Titulo',
      caption: 'Description'
    },
    {
      src: 'https://i.postimg.cc/9Fts3wP1/BENEFICIOS-Y-CONVENIOS-Chile-2021-2-page-0001.jpg',
      altText: 'Titulo',
      caption: 'Description'
    },
    {
      src: 'https://i.postimg.cc/52sGycRC/BENEFICIOS-Y-CONVENIOS-Chile-2021-3-page-0001.jpg',
      altText: 'Titulo',
      caption: 'Description'
    },
    {
      src: 'https://i.postimg.cc/J7X9q2Gf/BENEFICIOS-Y-CONVENIOS-Chile-2021-4-page-0001.jpg',
      altText: 'Titulo',
      caption: 'Description'
    },
    {
      src: 'https://i.postimg.cc/k40LCxhY/BENEFICIOS-Y-CONVENIOS-Chile-2021-5-page-0001.jpg',
      altText: 'Titulo',
      caption: 'Description'
    }
    ,
    {
      src: 'https://i.postimg.cc/NfwZPkX5/BENEFICIOS-Y-CONVENIOS-Chile-2021-6-page-0001.jpg',
      altText: 'Titulo',
      caption: 'Description'
    },
    {
      src: 'https://i.postimg.cc/6qCgpykW/BENEFICIOS-Y-CONVENIOS-Chile-2021-7-page-0001.jpg',
      altText: 'Titulo',
      caption: 'Description'
    },
    {
      src: 'https://i.postimg.cc/524Tf9nJ/BENEFICIOS-Y-CONVENIOS-Chile-2021-8-page-0001.jpg',
      altText: 'Titulo',
      caption: 'Description'
    },
    {
      src: 'https://i.postimg.cc/nzjNNdTQ/BENEFICIOS-Y-CONVENIOS-Chile-2021-9-page-0001.jpg',
      altText: 'Titulo',
      caption: 'Description'
    },
    {
      src: 'https://i.postimg.cc/DygppkFM/BENEFICIOS-Y-CONVENIOS-Chile-2021-10-page-0001.jpg',
      altText: 'Titulo',
      caption: 'Description'
    },
    {
      src: 'https://i.postimg.cc/wvmbw1TX/BENEFICIOS-Y-CONVENIOS-Chile-2021-11-page-0001.jpg',
      altText: 'Titulo',
      caption: 'Description'
    },
    {
      src: 'https://i.postimg.cc/Bb57GRFt/BENEFICIOS-Y-CONVENIOS-Chile-2021-12-page-0001.jpg',
      altText: 'Titulo',
      caption: 'Description'
    },
    {
      src: 'https://i.postimg.cc/2yN9MCVP/BENEFICIOS-Y-CONVENIOS-Chile-2021-13-page-0001.jpg',
      altText: 'Titulo',
      caption: 'Description'
    },
    {
      src: 'https://i.postimg.cc/ZKZDLKkN/BENEFICIOS-Y-CONVENIOS-Chile-2021-14-page-0001.jpg',
      altText: 'Titulo',
      caption: 'Description'
    },
    {
      src: 'https://i.postimg.cc/598RvQr1/BENEFICIOS-Y-CONVENIOS-Chile-2021-15-page-0001.jpg',
      altText: 'Titulo',
      caption: 'Description'
    },
    {
      src: 'https://i.postimg.cc/fRR262RT/BENEFICIOS-Y-CONVENIOS-Chile-2021-16-page-0001.jpg',
      altText: 'Titulo',
      caption: 'Description'
    },
    {
      src: 'https://i.postimg.cc/vmjN7rM8/BENEFICIOS-Y-CONVENIOS-Chile-2021-17-page-0001.jpg',
      altText: 'Titulo',
      caption: 'Description'
    },
    {
      src: 'https://i.postimg.cc/JzY6mNs3/BENEFICIOS-Y-CONVENIOS-Chile-2021-18-page-0001.jpg',
      altText: 'Titulo',
      caption: 'Description'
    },
    {
      src: 'https://i.postimg.cc/d07W0hCb/BENEFICIOS-Y-CONVENIOS-Chile-2021-19-page-0001.jpg',
      altText: 'Titulo',
      caption: 'Description'
    },
    {
      src: 'https://i.postimg.cc/vmp0xGLc/BENEFICIOS-Y-CONVENIOS-Chile-2021-20-page-0001.jpg',
      altText: 'Titulo',
      caption: 'Description'
    },
    {
      src: 'https://i.postimg.cc/8cGwwwYG/BENEFICIOS-Y-CONVENIOS-Chile-2021-21-page-0001.jpg',
      altText: 'Titulo',
      caption: 'Description'
    },
    {
      src: 'https://i.postimg.cc/hjTp9NpM/BENEFICIOS-Y-CONVENIOS-Chile-2021-22-page-0001.jpg',
      altText: 'Titulo',
      caption: 'Description'
    },
    {
      src: 'https://i.postimg.cc/SQLgjFXx/BENEFICIOS-Y-CONVENIOS-Chile-2021-23-page-0001.jpg',
      altText: 'Titulo',
      caption: 'Description'
    },
    {
      src: 'https://i.postimg.cc/Yqb8f6zc/BENEFICIOS-Y-CONVENIOS-Chile-2021-24-page-0001.jpg',
      altText: 'Titulo',
      caption: 'Description'
    },
    {
      src: 'https://i.postimg.cc/fyvCPm49/BENEFICIOS-Y-CONVENIOS-Chile-2021-25-page-0001.jpg',
      altText: 'Titulo',
      caption: 'Description'
    },
    {
      src: 'https://i.postimg.cc/pX2qFG8Y/BENEFICIOS-Y-CONVENIOS-Chile-2021-26-page-0001.jpg',
      altText: 'Titulo',
      caption: 'Description'
    },
    {
      src: 'https://i.postimg.cc/MpH5sn9n/BENEFICIOS-Y-CONVENIOS-Chile-2021-27-page-0001.jpg',
      altText: 'Titulo',
      caption: 'Description'
    },
    {
      src: 'https://i.postimg.cc/YCP3TtPb/BENEFICIOS-Y-CONVENIOS-Chile-2021-28-page-0001.jpg',
      altText: 'Titulo',
      caption: 'Description'
    },
    {
      src: 'https://i.postimg.cc/bv2ThKc8/BENEFICIOS-Y-CONVENIOS-Chile-2021-29-page-0001.jpg',
      altText: 'Titulo',
      caption: 'Description'
    },
    {
      src: 'https://i.postimg.cc/wv8kT0gN/BENEFICIOS-Y-CONVENIOS-Chile-2021-30-page-0001.jpg',
      altText: 'Titulo',
      caption: 'Description'
    },
    {
      src: 'https://i.postimg.cc/hvM8snx8/BENEFICIOS-Y-CONVENIOS-Chile-2021-31-page-0001.jpg',
      altText: 'Titulo',
      caption: 'Description'
    },
    {
      src: 'https://i.postimg.cc/59mmbBGH/BENEFICIOS-Y-CONVENIOS-Chile-2021-32-page-0001.jpg',
      altText: 'Titulo',
      caption: 'Description'
    },
    {
      src: 'https://i.postimg.cc/PxWQLY5R/BENEFICIOS-Y-CONVENIOS-Chile-2021-33-page-0001.jpg',
      altText: 'Titulo',
      caption: 'Description'
    },
    {
      src: 'https://i.postimg.cc/zvqSTvLX/BENEFICIOS-Y-CONVENIOS-Chile-2021-34-page-0001.jpg',
      altText: 'Titulo',
      caption: 'Description'
    },
    {
      src: 'https://i.postimg.cc/c49M8sd0/BENEFICIOS-Y-CONVENIOS-Chile-2021-35-page-0001.jpg',
      altText: 'Titulo',
      caption: 'Description'
    },
    {
      src: 'https://i.postimg.cc/0220Q6RV/BENEFICIOS-Y-CONVENIOS-Chile-2021-36-page-0001.jpg',
      altText: 'Titulo',
      caption: 'Description'
    },
    {
      src: 'https://i.postimg.cc/sgMPYt2S/BENEFICIOS-Y-CONVENIOS-Chile-2021-37-page-0001.jpg',
      altText: 'Titulo',
      caption: 'Description'
    },
    {
      src: 'https://i.postimg.cc/y82mvvJG/BENEFICIOS-Y-CONVENIOS-Chile-2021-38-page-0001.jpg',
      altText: 'Titulo',
      caption: 'Description'
    },
    {
      src: 'https://i.postimg.cc/GpYkNGGm/BENEFICIOS-Y-CONVENIOS-Chile-2021-39-page-0001.jpg',
      altText: 'Titulo',
      caption: 'Description'
    },
    {
      src: 'https://i.postimg.cc/tTNFRbr0/BENEFICIOS-Y-CONVENIOS-Chile-2021-40-page-0001.jpg',
      altText: 'Titulo',
      caption: 'Description'
    },
    {
      src: 'https://i.postimg.cc/9MhGj0Yt/BENEFICIOS-Y-CONVENIOS-Chile-2021-41-page-0001.jpg',
      altText: 'Titulo',
      caption: 'Description'
    }
    
  ];
  
  const BeneficiosCorp = (props) => {
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
  
  export default BeneficiosCorp;
  