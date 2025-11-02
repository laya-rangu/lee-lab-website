import React, { useEffect } from "react";

// ✅ Import all 10 images explicitly
import img1 from '../images/1.jpg';
import img2 from '../images/2.jpg';
import img3 from '../images/3.jpg';
import img4 from '../images/4.jpg';
import img5 from '../images/5.jpg';
import img6 from '../images/6.jpg';
import img7 from '../images/7.jpg';
import img8 from '../images/8.jpg';
import img9 from '../images/9.jpg';
import img10 from '../images/10.jpg';

// ✅ Import Bootstrap JS to make carousel functional
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function HomePage() {
  const sliderImages = [
    { src: img1 },
    { src: img2 },
    { src: img3 },
    { src: img4 },
    { src: img5 },
    { src: img6 },
    { src: img7 },
    { src: img8 },
    { src: img9 },
    { src: img10 },
  ];

  // ✅ Carousel auto-slides every 5 seconds
  const sliderInterval = 5000;

  // ✅ Remove navbar background color after page load
  useEffect(() => {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
      navbar.style.background = 'transparent';
      navbar.style.boxShadow = 'none';
    }
  }, []);

  return (
    <div className="container-fluid p-0">
      {/* --- Full-Bleed Header Section with Slider --- */}
      <header 
        style={{
          height: 'calc(100vh - 58px)',
          minHeight: '400px',
          position: 'relative',
          color: 'white',
        }}
      >
        {/* ✅ Bootstrap Carousel */}
        <div 
          id="imageCarousel" 
          className="carousel slide carousel-fade" 
          data-bs-ride="carousel" 
          data-bs-interval={sliderInterval}
          style={{ height: '100%' }}
        >
          {/* Slides */}
          <div className="carousel-inner" style={{ height: '100%' }}>
            {sliderImages.map((image, index) => (
              <div 
                key={index} 
                className={`carousel-item ${index === 0 ? 'active' : ''}`} 
                style={{ height: '100%' }}
              >
                <div 
                  style={{
                    height: '100%',
                    backgroundImage: `url(${image.src})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                  onError={(e) => { 
                    e.target.onerror = null; 
                    e.target.style.backgroundImage = `url(https://placehold.co/1200x600/1d3557/fff?text=SLIDER+PHOTO+${index+1})`; 
                  }}
                />
              </div>
            ))}
          </div>

          {/* Controls */}
          <button className="carousel-control-prev" type="button" data-bs-target="#imageCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#imageCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </header>
    </div>
  );
}
