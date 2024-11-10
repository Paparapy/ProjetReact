import React, { useState, useEffect } from "react";
import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const videos = [video1, video2];

const HeroSection = () => {
  const [currentVideo, setCurrentVideo] = useState(0);
  const [text, setText] = useState("");
  const fullText = "avec integration video";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, index + 1));
      index = (index + 1) % fullText.length;
    }, 150);
    return () => clearInterval(interval);
  }, []);

  const prevVideo = () => {
    setCurrentVideo((prev) => (prev - 1 + videos.length) % videos.length);
  };

  const nextVideo = () => {
    setCurrentVideo((prev) => (prev + 1) % videos.length);
  };

  // Gestionnaire de mouvement de la souris
  const handleMouseMove = (e) => {
    const waveEffect = document.getElementById("wave-effect");
    const pointerX = e.clientX;
    const pointerY = e.clientY;
    const waveSize = 50; // La moitié de la taille de la vague pour centrer l'effet
    waveEffect.style.left = `${pointerX - waveSize}px`;
    waveEffect.style.top = `${pointerY - waveSize}px`;
  };

  return (
    <div
      className="relative flex flex-col items-center min-h-screen sm:mt-10 lg:flex-row lg:mt-2"
      onMouseMove={handleMouseMove}
    >
      <div
        id="wave-effect"
        className="absolute w-32 h-32 bg-blue-500 rounded-full opacity-50 pointer-events-none"
      ></div>
      <div className="order-1 w-full lg:w-1/2 lg:order-none lg:pr-8">
        <h1 className="font-semibold tracking-wide sm:text-center sm:text-2xl lg:text-left lg:text-4xl">
          Création design <br />
          <span className="font-bold text-transparent bg-gradient-to-r from-orange-500 to-red-800 bg-clip-text animated-texts">
            {text}
          </span>
        </h1>
      </div>
      <div className="order-2 w-full relative flex items-center justify-center sm:order-none lg:w-[700px] lg:mt-0 lg:order-none">
        <button
          onClick={prevVideo}
          className="absolute z-10 p-2 text-white bg-orange-900 rounded-full lg:left-20 sm:left-0 top-36"
        >
          <FaArrowLeft />
        </button>
        <div className="overflow-hidden w-full lg:w-[450px] lg:h-[450px] sm:w-[300px] sm:h-[300px] mt-10 sm:mt-0">
          <video
            autoPlay
            loop
            muted
            key={currentVideo}
            className="duration-500"
            style={{ borderRadius: "2%" }}
          >
            <source src={videos[currentVideo]} type="video/mp4" />
            Your Browser does not support the video.
          </video>
        </div>
        <button
          onClick={nextVideo}
          className="absolute z-10 p-2 text-white bg-orange-900 rounded-full lg:right-20 sm:right-0 top-36"
        >
          <FaArrowRight />
        </button>
      </div>
      <div className="order-3 w-full lg:w-1/2 lg:pl-8 sm:mt-4 lg:mt-0">
        <p className="lg:mt-10 sm:mt-6 lg:text-lg sm:text-center lg:text-left sm:text-sm">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque
          maxime aperiam tenetur laudantium non voluptatem iusto ea aliquam
          dolore nobis! Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Cumque maxime aperiam tenetur laudantium non voluptatem iusto ea
          aliquam dolore nobis!
        </p>
        <div className="flex justify-center sm:justify-center lg:justify-start sm:pt-10 lg:pt-6">
          <a
            href="#"
            className="px-4 py-3 rounded-md bg-gradient-to-r from-orange-500 to-orange-800"
          >
            Start For Free
          </a>
          <a
            href="#"
            className="px-4 py-3 mx-3 border border-orange-500 rounded-md hover:bg-orange-900"
          >
            Documentation
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
