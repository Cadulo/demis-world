import { Card } from "../components/Card";
import { Banner } from "../components/Banner";
import { biologa,pianista } from "../options/options";
import { useSelectionContext } from "../context/SelectionContext";
import { useEffect, useState } from "react";
import { Button } from "../components/Button";
import { useNavigate } from "react-router-dom";
import Dialog from "./Dialogo";
import { introBiologa } from '../options/messages';
import { introMusic } from "../options/messages";

function Profesion() {
  const navigate = useNavigate();
  const { options, selection, setSelection,career,setCareer,music,setMusic } = useSelectionContext();
  const [showMessage, setShowMessage] = useState(false);
  
  let description = "";
  let imageUrl = "";
  let intro = ""
  if (selection == options[0] ) {
    description = biologa.descripcion;
    imageUrl = biologa.image;
   
    intro=introBiologa
  } 

  else if (selection == options[1] ) {
    description = pianista.descripcion;
    imageUrl = pianista.image;
    intro=introMusic
    
  }

  const onNext = () => {
    if (selection == options[0] ){
      setCareer('Biologa')
      navigate("/demis-world/biology");
      
    }
   else if (selection == options[1] ) {
      setCareer('Pianista')
      navigate("/demis-world/music");
    }
  };

  const onBack = () => {
    navigate("/");
  };

  return (
    <div className="container mt-10">
      <div className="grid grid-cols-1 md:grid-rows-2 gap-4S">
      <div className="md:row-start-1 md:row-end-2 mb-10">
          <Banner
            imageUrl={imageUrl}
            description={description}
          ></Banner>
        </div>
      <div className=" md:row-start-2 md:row-end-3 ">
        <div className="flex justify-center gap-4 mb-6">
        <Card
            optionid= {options[0]}
            profesion={biologa.profesion}
            selection={selection}
            setSelection={setSelection}
          ></Card>
          <Card
            optionid={options[1]}
            profesion={pianista.profesion}
            selection={selection}
            setSelection={setSelection}
          ></Card>
        </div>
          <div className="flex justify-center gap-6">
            <Button text="Atras" onClick={onBack} ></Button>
            <Button text="Siguiente" onClick={()=>{setShowMessage(true)}}></Button>
          </div>
          <div>  <p className="mt-4 text-xs text-gray-500">
            Una vez escojas tu opción, ya no podrás cambiarla.
          </p></div>
        </div>
      </div>
      {showMessage && <Dialog next={onNext} intro={intro.text}></Dialog>}
    </div>
  );
}

export default Profesion;
