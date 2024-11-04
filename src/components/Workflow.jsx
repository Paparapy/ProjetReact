import React, { useState, useEffect } from "react";
import { CheckCircle2 } from "lucide-react";
import codeImg from "../assets/code.jpg";
import { checklistItems } from "../constants";

const Workflow = () => {
  const [text, setText] = useState("");
  const fullText = "Accélérez votre flux de travail de codage.";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, index));
      index += 1;
      if (index > fullText.length) {
        index = 0; // Recommence l'animation en boucle
      }
    }, 150); // Ajuste la vitesse de l'animation ici
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-20">
      <h2 className="z-30 py-5 mt-6 mb-10 text-3xl font-semibold tracking-wide text-center sm:text-3xl lg:text-5xl">
        
        <span className="text-transparent bg-gradient-to-r from-orange-500 to-red-800 bg-clip-text animated-texts">
          {text}
        </span>
      </h2>
      <div className="flex flex-wrap justify-center">
        <div className="z-10 w-full p-2 lg:w-1/2">
          <img src={codeImg} alt="code" />
        </div>
        <div className="w-full pt-12 lg:w-1/2">
          {checklistItems.map((item, index) => (
            <div key={index} className="flex mb-12">
              <div className="items-center justify-center w-10 h-10 p-2 mx-6 text-green-400 rounded-full cursor-pointer bg-neutral-900">
                <CheckCircle2 />
              </div>
              <div>
                <h5 className="mt-1 mb-2 lg:text-[20px] sm:text-[15px]">
                  {item.title}
                </h5>
                <p className="lg:text-[15px] sm:text-[12px] text-neutral-500">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Workflow;
