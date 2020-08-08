import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

const items = [
  {
    
    id: 1,
    src: 'static/images/banner/main.png',
    altText: 'RADIOLOGIA ODONTOLÓGICA',
    caption: 'PORTAL',    
  },
  {
    id: 2,
    src: 'static/images/2.png',
    altText: 'Slide 2',
    caption: 'Slide 2'
  },
  {
    id: 3,
    src: 'static/images/3.png',
    altText: 'Slide 3',
    caption: 'Slide 3'
  }
];

const Banner = (props) => {
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
    if (item.id === 1) {
      
      return (
    
      <CarouselItem
        className="customtag"
        tag="div"
        key={item.id}
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
      >
        <CarouselCaption className="caption fadeIn fadeInLeft" captionTitle={item.title}
        captionText={item.altText} captionHeader={item.caption} />
        <p className="text fadeIn fadeInLeft"> 
        Bem vindos à <strong>DENTAL04</strong>  - Um portal de serviços, informações e classificados <br/> para radiologia odontológica
        </p>
        <button type="button" className="button btn btn-success fadeInLeft">Confira</button>
        <img className="img" src={item.src} alt={item.altText} />
        </CarouselItem>
    )}

    else if (item.id === 2) {
      return (
    
        <CarouselItem
          className="customtag"
          tag="div"
          key={item.id}
          onExiting={() => setAnimating(true)}
          onExited={() => setAnimating(false)}
        >
          <CarouselCaption className="caption fadeIn fadeInLeft" captionTitle={item.title}
          captionText={item.altText} captionHeader={item.caption} />
          <p className="text fadeIn fadeInLeft"> Title2</p>
          <img className="img" src={item.src} alt={item.altText} />
        </CarouselItem>
      )}

        else {
          return (
            <CarouselItem
              className="customtag"
              tag="div"
              key={item.id}
              onExiting={() => setAnimating(true)}
              onExited={() => setAnimating(false)}
            >
              <CarouselCaption className="caption fadeIn fadeInLeft" captionTitle={item.title}
              captionText={item.altText} captionHeader={item.caption} />
              <p className="text fadeIn fadeInLeft"> Title3</p>
              <img className="img" src={item.src} alt={item.altText} />
            </CarouselItem>
          )}
    
  });

  return (
    <div>
      <style>
        {
          `.customtag {
              max-width: 100%;
              height: 500px;
              background-color: transparent;
            }
            
            .img {
              height: 100%;
              width: 100%;
            }
            
            .button {
              position: absolute;
              background-color:#001f24;
              margin-top: 25%;
              margin-left: 15.3%;
            }

            .caption {
              font-size:40px; 
              font-weight: 700; 
              position: absolute; 
              color:#001f24;
              margin-bottom: 180px;
              text-align: left;
            }

            
            .text {
              position:absolute;
              color:#001f24;
              font-weight: 500; 
              margin-top: 19%;
              padding-left: 15.3%;
              z-index:1;
            }

            .fadeIn {-webkit-animation-name: fadeIn; animation-name: fadeIn; -webkit-animation-duration: 1s; animation-duration: 8s;
              -webkit-animation-fill-mode: both; animation-fill-mode: both;}
              
              @-webkit-keyframes fadeIn {0% {opacity: 0;}100% {opacity: 1;}}
              
              @keyframes fadeIn {0% {opacity: 0;}100% {opacity: 1;}} 

          .fadeInLeft {-webkit-animation-name: fadeInLeft; animation-name: fadeInLeft; -webkit-animation-duration: 1s; animation-duration: 1.5s;
              -webkit-animation-fill-mode: both; animation-fill-mode: both;}
          
              @-webkit-keyframes fadeInLeft {0% {opacity: 0; -webkit-transform: translate3d(-100%, 0, 0); transform: translate3d(-100%, 0, 0);}
              100% {opacity: 1; -webkit-transform: none; transform: none;}}
          
              @keyframes fadeInLeft {0% { opacity: 0; -webkit-transform: translate3d(-100%, 0, 0); transform: translate3d(-100%, 0, 0);}100% {
              opacity: 1; -webkit-transform: none; transform: none;
              }} 

            `
        }
      </style>
      <Carousel
        interval={20000000}
        activeIndex={activeIndex}
        next={next}
        previous={previous}
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
      </Carousel>
    </div>
  );
}

export default Banner;