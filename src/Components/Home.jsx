import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="box">
      <div className="container-home">
        <Slider {...settings}>
          <div className="slider-item">
            <div className="slider-content">
              <img src="images/ham.png" alt="not found" />
              <p>Get our meals at affordable prices  <div className='buttons'>
              <button>Order Now</button>
              </div></p>
             
            </div>
           
          </div>
          <div className="slider-item">
            <div className="slider-content">
              <img src="images/recipe3.jpeg" alt="" />
              <p>Get our meals at affordable prices  <div className='buttons'>
              <button>Order Now</button>
              </div></p>
            </div>
          </div>
          <div className="slider-item">
            <div className="slider-content">
              <img src="images/recipe4.jpeg" alt="" />
              <p>Get our meals at affordable prices  <div className='buttons'>
              <button>Order Now</button>
              </div></p>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Home;
