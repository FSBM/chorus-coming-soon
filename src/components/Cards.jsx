import React, { useState, useRef } from "react";
import "./Cards.css";
import '.././index.css'
import PostCard from "../assets/12.png";
import PersonHead from "../assets/3.png";
import ToteBag from "../assets/ToteBag.webp";
import Tshirt from "../assets/TShirtNon.png";

const slideData = [
  {
    index: 0,
    headline: "POST CARDS",
    button: "",
    src: PostCard,
  },
  {
    index: 1,
    headline: "POSTERS",
    button: "Book travel",
    src: PersonHead,
  },
  {
    index: 2,
    headline: "MERCHANDISE",
    button: "Listen",
    src: Tshirt,
  },
  {
    index: 3,
    headline: "TOTE BAGS",
    button: "Get Focused",
    src: ToteBag,
  },
];

// =========================
// Slide Component
// =========================
const Slide = ({ slide, current, handleSlideClick }) => {
  const slideRef = useRef(null);

  const handleMouseMove = (event) => {
    const el = slideRef.current;
    if (!el) return;

    const r = el.getBoundingClientRect();
    el.style.setProperty("--x", event.clientX - (r.left + Math.floor(r.width / 2)));
    el.style.setProperty("--y", event.clientY - (r.top + Math.floor(r.height / 2)));
  };

  const handleMouseLeave = () => {
    if (!slideRef.current) return;
    slideRef.current.style.setProperty("--x", 0);
    slideRef.current.style.setProperty("--y", 0);
  };

  const handleClick = () => {
    handleSlideClick(slide.index);
  };

  let classNames = "slide";
  if (current === slide.index) classNames += " slide--current";
  else if (current - 1 === slide.index) classNames += " slide--previous";
  else if (current + 1 === slide.index) classNames += " slide--next";

  return (
    <li
      ref={slideRef}
      className={classNames}
      onClick={handleClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="slide__image-wrapper !font-Milker flex justify-center items-center">
        <img className="slide__image !font-bravado" alt={slide.headline} src={slide.src} onLoad={(e) => (e.target.style.opacity = 1)} />
      </div>
      <article className="slide__content">
        <h2 className="slide__headline">{slide.headline}</h2>
      </article>
    </li>
  );
};

// =========================
// Slider Control Component
// =========================
const SliderControl = ({ type, title, handleClick}) => (
  <button className={`btn btn--${type} focus:outline-none`} title={title} onClick={handleClick}>
    <svg className={`icon ${type=="previous" ? "rotate-180" : "rotate-0"}`} viewBox="0 0 24 24">
      <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
    </svg>
  </button>
);

// =========================
// Cards Component (Slider)
// =========================
export default function Cards({ heading = "Example Slider", slides = slideData }) {
  const [current, setCurrent] = useState(0);

  const handlePreviousClick = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNextClick = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const handleSlideClick = (index) => {
    if (current !== index) {
      setCurrent(index);
    }
  };

  const headingId = `slider-heading__${heading.replace(/\s+/g, "-").toLowerCase()}`;
  const wrapperTransform = {
    transform: `translateX(-${current * (100 / slides.length)}%)`,
  };

  return (
    <div className="slider" aria-labelledby={headingId}>
      <ul className="slider__wrapper" style={wrapperTransform}>
        <h3 id={headingId} className="visuallyhidden">{heading}</h3>
        {slides.map((slide) => (
          <Slide key={slide.index} slide={slide} current={current} handleSlideClick={handleSlideClick} />
        ))}
      </ul>
      <div className="slider__controls">
        <SliderControl type="previous" title="Go to previous slide" handleClick={handlePreviousClick} />
        <SliderControl type="next" title="Go to next slide" handleClick={handleNextClick} />
      </div>
    </div>
  );
}