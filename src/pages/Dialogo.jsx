import React, { useState } from "react";
import { Button } from "../components/Button";
import { Banner } from "../components/Banner";

const Dialog = ({ intro, next,imageUrl,description }) => {
  const messages = intro;
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  const handleNext = () => {
    if (currentMessageIndex < messages.length - 1) {
      setCurrentMessageIndex(currentMessageIndex + 1);
    } else {
      next();
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="border-2 bg-purple-50 border-pink-400 p-6 w-3/4 rounded-lg shadow-lg relative md:w-1/2">
        <div className="h-68 overflow-y-scroll mb-4">
        <div className="md:row-start-1 md:row-end-2 mb-2 ">
          <Banner
            imageUrl={imageUrl}
            description={description}
          ></Banner>
        </div>
          {messages.map((message, index) => (
            <p
              key={index}
              className={`text-sm mb-4 text-justify mx-2 ${
                index !== currentMessageIndex && "hidden"
              }`}
            >
              {message}
            </p>
          ))}
        </div>
        <div className="flex justify-center ">
          <Button onClick={handleNext} text={"Siguiente"}></Button>
        </div>
      </div>
    </div>
  );
};

export default Dialog;