import {Button} from '../components/Button'
import { useNavigate } from 'react-router-dom';
import { Banner } from "../components/Banner";
import { intro } from '../options/messages';
import { useState } from 'react';
import Dialog from './Dialogo';
import { useSelectionContext } from "../context/SelectionContext"
import imgDemisWorld from "../assets/img/demisworld.png"
import soundChill from "../assets/sounds/chill.mp3"
import soundHb from "../assets/sounds/hb.mp3"

function Welcome() {

  const navigate = useNavigate()
  const [showMessage, setShowMessage] = useState(true);
  const { options, selection, setSelection,scene,setMusic } = useSelectionContext();
  const onNext = () => {
    setMusic(soundChill)
    navigate("/demis-world/career")
  }

  const onContinue = () => {
    setShowMessage(false)
    setMusic(soundHb)
  }
  let description="En esta aventura debes tomar decisiones para definir tu camino 😄 "
  let imageUrl = imgDemisWorld
  return (
    <div>
       <Banner
            imageUrl={imageUrl}
           
          ></Banner>
        <div className="bg-white rounded-lg border-2 border-pink-500 p-8 shadow-md mb-4 mt-4">
        <p className="text-pink-500 font-semibold text-2xl mb-4">
            Vas a tener la oportunidad de contestar aquella pregunta que nos hacemos todos. ¿Qué tal si...?
        </p>
        <p className="text-gray-700 text-lg">
            En esta aventura debes tomar decisiones para definir tu camino 😄
        </p>
    </div>
      <Button text='Jugar' onClick={onNext}></Button>
      {showMessage && <Dialog next={onContinue} intro={intro}></Dialog>}
    </div>
  );
}

export default Welcome;