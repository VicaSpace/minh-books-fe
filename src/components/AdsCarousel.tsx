import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

interface AdsCarouselProps {}

const AdsCarousel: React.FC<AdsCarouselProps> = () => {
  return (
    <Carousel swipeable showStatus={false} showThumbs={false} autoPlay>
      <div>
        <img alt="premium" src="https://i.imgur.com/bVeY796.png" />
      </div>
      <div>
        <img alt="premium" src="https://i.imgur.com/bVeY796.png" />
      </div>
      <div>
        <img alt="premium" src="https://i.imgur.com/bVeY796.png" />
      </div>
      <div>
        <img alt="premium" src="https://i.imgur.com/bVeY796.png" />
      </div>
    </Carousel>
  );
};

export default AdsCarousel;
