import React, { useState } from "react";

import { OptionCard } from "../components/OptionCard";
import { Banner } from "../components/Banner";
import { Button } from "../components/Button";
import { useSelectionContext } from "../context/SelectionContext";
import { useNavigate } from "react-router-dom";

function Game() {
  const {
    options,
    selection,
    setSelection,
    scene,
    setMusic,
    bannerImage,
    setBannerImage,icon,setIcon
  } = useSelectionContext();
  const [currentStep, setCurrentStep] = useState(scene);
  let imageUrl = "";
  const navigate = useNavigate();
  const onNext = () => {
      navigate("/demis-world/");
    }

  const handleOptionClick = (index) => {
    const selectedOption = currentStep.opciones[index];

    if (selectedOption) {
      setCurrentStep(selectedOption);
    }

    if (currentStep.image) {
      setBannerImage(currentStep.image);
    }

    if (currentStep.music) {
      setMusic(currentStep.music);
    }

  };

  return (
    <div className="flex flex-col items-center mt-10">

      <div className="flex flex-col items-center space-y-4 ">
        <Banner
          imageUrl={bannerImage}
          description={currentStep.resultado}
        ></Banner>

        {currentStep.opciones && (
          <div className="flex flex-col gap-2">
            {currentStep.opciones.map((opcion, index) => (
              <OptionCard
                optionid={options[index]}
                text={opcion.texto}
                selection={selection}
                setSelection={setSelection}
                key={index}
                icon={currentStep.icon}
              ></OptionCard>
            ))}
          </div>
        )}
      </div>

      <div className="flex justify-center mt-4">
        {currentStep.opciones ? (
          <Button
            text="Continuar"
            onClick={() => {
              handleOptionClick(options.indexOf(selection));
            }}
          ></Button>
        ):(
          <Button
            text="Inicio"
            onClick= {()=>navigate("/demis-world/") }
          ></Button>
        )}
      </div>
    </div>
  );
}

export default Game;
