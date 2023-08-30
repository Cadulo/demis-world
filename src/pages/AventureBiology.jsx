import { OptionCard } from "../components/OptionCard";
import { Banner } from "../components/Banner";
import {
  selvaEscenario,
  antartidaEscenario,
  marEscenario,
} from "../options/options";
import { useSelectionContext } from "../context/SelectionContext";
import { useEffect,useState } from "react";
import { Button } from "../components/Button";
import { useNavigate } from "react-router-dom";
import { introBiologaSelva,introBiologaPolar,introBiologaMar } from '../options/messages';
import Dialog from "./Dialogo";
import jungleSound from "../assets/sounds/jungle.mp3"
import iceSound from "../assets/sounds/ice.mp3"
import seaSound from "../assets/sounds/sea.mp3"

function AventureBiology() {
  const navigate = useNavigate();
  const { options, selection, setSelection,scene,setScene,setMusic,bannerImage,setBannerImage } = useSelectionContext();
  const [showMessage, setShowMessage] = useState(false);
  let description = "";
  let imageUrl = "";
  let imageDialog=""
  let intro = ""
  if (selection == options[0] || selection == "") {
    description = selvaEscenario.description;
    imageUrl = selvaEscenario.image;
    intro = introBiologaSelva
    imageDialog=introBiologaSelva.image
    
  } else if (selection == options[1]) {
    description = antartidaEscenario.description;
    imageUrl = antartidaEscenario.image;
    intro = introBiologaPolar
    imageDialog=introBiologaPolar.image
  } else if (selection == options[2]) {
    description = marEscenario.description;
    imageUrl = marEscenario.image;
    intro = introBiologaMar
    imageDialog=introBiologaMar.image
  }

  const onNext = () => {
    if (selection == options[0] || selection == ""){
      setScene(selvaEscenario)
      setMusic(jungleSound)
      setBannerImage(imageUrl)
    }else if (selection == options[1]){
      setScene(antartidaEscenario)
      setMusic(iceSound)
      setBannerImage(imageUrl)
    }else if (selection == options[2]){
      setScene(marEscenario)
      setMusic(seaSound)
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
            text={selvaEscenario.option}
            selection={selection}
            setSelection={setSelection}
            icon={"fa-solid fa-leaf"}
            ></OptionCard>
            <OptionCard
            optionid= {options[1]}
            text={antartidaEscenario.option}
            selection={selection}
            setSelection={setSelection}
            icon={"fa-solid fa-snowflake"}
            ></OptionCard>
            <OptionCard
            optionid= {options[2]}
            text={ marEscenario.option}
            selection={selection}
            setSelection={setSelection}
            icon = {"fa-solid fa-ship"}
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

export default AventureBiology;
