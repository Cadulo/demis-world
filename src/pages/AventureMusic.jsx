import { OptionCard } from "../components/OptionCard";
import { Banner } from "../components/Banner";
import {
  composicionEscenario ,
  interpreteEscenario,
} from "../options/options";

import { useSelectionContext } from "../context/SelectionContext";
import { useEffect,useState } from "react";
import { Button } from "../components/Button";
import { useNavigate } from "react-router-dom";
import { introInterprete,introComposicion } from '../options/messages';
import Dialog from "./Dialogo";
import soundHappy from "../assets/sounds/happysong.mp3"

function AventureMusic() {
  const navigate = useNavigate();
  const { options, selection, setSelection,scene,setScene,setMusic,bannerImage,setBannerImage } = useSelectionContext();
  const [showMessage, setShowMessage] = useState(false);
  let description = "";
  let imageUrl = "";
  let imageDialog=""
  let intro = ""
  if (selection == options[0] || selection == "") {
    description = composicionEscenario.description;
    imageUrl = composicionEscenario.image;
    intro = introComposicion
    imageDialog=introComposicion.image
    
  } else if (selection == options[1]) {
    description = interpreteEscenario.description;
    imageUrl = interpreteEscenario.image;
    intro = introInterprete
    imageDialog=introInterprete.image
  } 

  const onNext = () => {
    if (selection == options[0] || selection == ""){
      setScene(composicionEscenario)
      setMusic(soundHappy)
      setBannerImage(imageUrl)
    }else if (selection == options[1]){
      setScene(interpreteEscenario)
      setMusic(soundHappy)
      setBannerImage(imageUrl)
    }
    navigate("/demis-world/Game");
  };


  return (
    <div className="container mt-10">
      <div className="grid grid-cols-1 md:grid-rows-2">
        <div className="md:row-start-1 md:row-end-2 mb-2">
          <Banner
            imageUrl={imageUrl}
            description={description}
          ></Banner>
        </div>
        <div className="md:row-start-2 md:row-end-3 mt-4 md:mt-0 ">
          <div className="flex flex-col justify-center gap-4 mb-6 ">
            <OptionCard
            optionid= {options[0]}
            text={composicionEscenario.option}
            selection={selection}
            setSelection={setSelection}
            icon={"fa-solid fa-icons"}
            ></OptionCard>
            <OptionCard
            optionid= {options[1]}
            text={interpreteEscenario.option}
            selection={selection}
            setSelection={setSelection}
            icon={"fa-solid fa-music"}
            ></OptionCard>
          </div>
          <div className="flex justify-center gap-6">
            <Button text="Continuar" onClick={()=>{setShowMessage(true)}}></Button>
          </div>
          {showMessage && <Dialog next={onNext} intro={intro.text} imageUrl={imageDialog} ></Dialog>}
        </div>
      </div>
    </div>
  );
}

export default AventureMusic;
