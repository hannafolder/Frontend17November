import React from 'react';

const slides = [
    {
        img: 'https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?auto=format&fit=crop&w=2000&q=90',
        title: 'Boats and Yacht Rentals',
        subtitle: 'Enjoy the perfect service and luxury'
    },
    {
        img: 'https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?auto=format&fit=crop&w=2000&q=90',
        title: 'Discover the Open Sea',
        subtitle: 'Create unforgettable moments on the water'
    }
];

export default function Hero() {
    return (
        <div
            id="heroCarousel"
            className="carousel slide"
            data-bs-ride="carousel"
            data-bs-interval="7000"
        >
            <div className="carousel-indicators hero-dots">
                {slides.map((slide, index) => (
                    <button
                        key={slide.title}
                        type="button"
                        data-bs-target="#heroCarousel"
                        data-bs-slide-to={index}
                        className={index === 0 ? 'active' : ''}
                        aria-current={index === 0 ? 'true' : undefined}
                        aria-label={`Slide ${index + 1}`}
                    />
                ))}
            </div>

            <div className="carousel-inner">
                {slides.map((slide, index) => (
                    <div
                        className={`carousel-item ${index === 0 ? 'active' : ''}`}
                        key={slide.title}
                    >
                        <section
                            className="home-hero"
                            style={{
                                backgroundImage: `linear-gradient(90deg, #061b2b99, #061b2b35), url(${slide.img})`
                            }}
                        >
                            <div className="home-hero-copy">
                                <p>Welcome aboard</p>
                                <h1>{slide.title}</h1>
                                <span>{slide.subtitle}</span>
                                <div>
                                    <a href="#fleet">
                                        DISCOVER MORE <i className="bi bi-arrow-right" />
                                    </a>
                                </div>
                            </div>
                        </section>
                    </div>
                ))}
            </div>

            <button
                className="carousel-control-prev slide-arrow prev"
                type="button"
                data-bs-target="#heroCarousel"
                data-bs-slide="prev"
                aria-label="Previous slide"
            >
                <i className="bi bi-arrow-left" />
            </button>

            <button
                className="carousel-control-next slide-arrow next"
                type="button"
                data-bs-target="#heroCarousel"
                data-bs-slide="next"
                aria-label="Next slide"
            >
                <i className="bi bi-arrow-right" />
            </button>
        </div>
    );
}
