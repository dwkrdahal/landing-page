import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'animate.css/animate.min.css'; // Ensure you have this package installed

const HeroSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    beforeChange: (current, next) => setSlideIndex(next),
  };

  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const texts = document.querySelectorAll('.hero-text');
    texts.forEach((text) => {
      text.classList.remove('animate__bounceInDown', 'animate__fadeOutUp');
    });

    setTimeout(() => {
      const activeText = texts[slideIndex];
      activeText.classList.add('animate__animated', 'animate__bounceInDown');
    }, 100);

    setTimeout(() => {
      const activeText = texts[slideIndex];
      activeText.classList.add('animate__animated', 'animate__fadeOutUp');
    }, 4500); // Adjust timing as necessary

  }, [slideIndex]);

  const slides = [
    {
      image: 'slide1.jpg',
      title: 'ISO 9001:2015 Certified',
      description: 'Founded in the year 2006 AD. We aim to provide quality health and medical services.'
    },
    {
      image: 'slide2.jpg',
      title: 'Leading Healthcare Provider',
      description: 'We offer advanced medical facilities and top-notch services.'
    },
    {
      image: 'slide3.jpg',
      title: 'Compassionate Care',
      description: 'Our team is dedicated to providing compassionate and personalized care.'
    }
  ];

  return (
    <section className="relative">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="relative">
            <img src={slide.image} alt={slide.title} className="w-full h-screen object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-start px-10">
              <h1 className="text-4xl font-bold text-white hero-text">{slide.title}</h1>
              <p className="mt-4 text-white text-lg hero-text">{slide.description}</p>
              <div className="mt-8 flex space-x-4 hero-text">
                <button className="bg-blue-700 hover:bg-transparent hover:text-blue-700 text-white px-6 py-3 rounded transition duration-300 border border-blue-700">
                  About Us
                </button>
                <button className="bg-transparent hover:bg-blue-700 hover:text-white text-blue-700 px-6 py-3 rounded transition duration-300 border border-blue-700">
                  Our Services
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <div className="absolute inset-y-0 left-0 flex items-center">
        <button
          onClick={() => setSlideIndex((slideIndex - 1 + slides.length) % slides.length)}
          className="text-white hover:text-gray-400 focus:outline-none text-3xl px-3"
        >
          &#8249;
        </button>
      </div>
      <div className="absolute inset-y-0 right-0 flex items-center">
        <button
          onClick={() => setSlideIndex((slideIndex + 1) % slides.length)}
          className="text-white hover:text-gray-400 focus:outline-none text-3xl px-3"
        >
          &#8250;
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
