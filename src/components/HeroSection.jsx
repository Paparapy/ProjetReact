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
    }, 150); // Adjust the speed of the animation here
    return () => clearInterval(interval);
  }, []);

  const prevVideo = () => {
    setCurrentVideo((prev) => (prev - 1 + videos.length) % videos.length);
  };

  const nextVideo = () => {
    setCurrentVideo((prev) => (prev + 1) % videos.length);
  };

  return (
    <div className="flex flex-col items-center min-h-screen sm:mt-10 lg:flex-row lg:mt-2">
      <div className="lg:w-1/2 lg:pr-8">
        <h1 className="font-semibold tracking-wide text-left sm:text-2xl lg:text-4xl sm:text-center lg:text-left">
          Création design <br />
          <span className="font-bold text-transparent bg-gradient-to-r from-orange-500 to-red-800 bg-clip-text animated-texts">
            {" "}{text}
          </span>
        </h1>
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
          <a href="#" className="px-4 py-3 mx-3 border rounded-md">
            Documentation
          </a>
        </div>
      </div>
      <div className="relative flex items-center justify-center lg:w-[700px]">
        <button
          onClick={prevVideo}
          className="absolute z-10 p-2 text-white bg-orange-900 rounded-full lg:left-20 sm:left-0 top-36"
        >
          <FaArrowLeft />
        </button>
        <div className="overflow-hidden lg:w-[450px] lg:h-[450px] sm:w-[300px] sm:h-[300px] mt-10">
          <video
            autoPlay
            loop
            muted
            key={currentVideo}
            className="duration-500"
            style={{ borderRadius: '2%' }} // Adding inline style for rounded corners
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
    </div>
  );
};

export default HeroSection;
