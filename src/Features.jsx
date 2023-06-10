import React, {useState, useEffect, useRef} from "react";
import {AiOutlineVerticalRight, AiOutlineVerticalLeft} from 'react-icons/ai'

// Pictures on Carousel
const featuresPics = [
  "./assets/features/Carousel 1.png",
  "./assets/features/Carousel 2.png",
  "./assets/features/Carousel 3.png",
  "./assets/features/Carousel 4.png"
]

let count = 0;

export default function Features() {

  // Clicking buttons
  const [currentIndex, setCurrentIndex] = useState(0);

  const slideRef = useRef();
  let sliderInterval;
  
  const removeAnimation = () => {    
    slideRef.current.classList.remove('fade-anim');
  };
  
  useEffect(() => {
    slideRef.current.addEventListener('animationend', removeAnimation);
    startSlider();
    return () => {
      clearInterval(sliderInterval); // Clean up the interval when component unmounts
    };
  }, []);
  
  const startSlider = () => {
    sliderInterval = setInterval(() => {
      handleOnNextClick();
    }, 3000);
  };
  
  const handleOnNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % featuresPics.length);
    slideRef.current.classList.add('fade-anim');
  };
  
  const handleOnPrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + featuresPics.length - 1) % featuresPics.length);
    slideRef.current.classList.add('fade-anim');
  };

  return (
    <>
    <div id="features" ref={slideRef} className="w-full select-none relative flex justify-center items-center">
        <div className="aspect-w-16 aspect-h-9">
            <img src={featuresPics[currentIndex]}/>
        </div>
        <div className="absolute w-full top-1/2 transform -translate-y-1/2 px-3 flex justify-between items-center">
            <button onClick={handleOnPrevClick} className="bg-black text-white mx-5 p-1 rounded-full bg-opacity-10 cursor-pointer hover:bg-opacity-100 transition">
              <AiOutlineVerticalRight/>
            </button>
            <button onClick={handleOnNextClick} className="bg-black text-white mx-5 p-1 rounded-full bg-opacity-10 cursor-pointer hover:bg-opacity-100 transition">
              <AiOutlineVerticalLeft/>
            </button>
        </div>
    </div>
      
    </>
  );
}