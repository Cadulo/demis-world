import React, { useState, useEffect } from "react";
import { Howl } from "howler";
import { useSelectionContext } from "../context/SelectionContext";

const AudioControl = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const { music } = useSelectionContext();
  const [sound, setSound] = useState(null);

  useEffect(() => {
    if (sound) {
      sound.unload(); // Detener y descargar el sonido actual
    }

    if (music) {
      const newSound = new Howl({
        src: [music], // Ruta a tu nuevo archivo de audio
        loop: true,
      });
      setSound(newSound);

      // Reproducir automáticamente si ya estaba en reproducción
      if (isPlaying) {
        newSound.play();
      }
    }

  }, [music]);

  const toggleAudio = () => {
    console.log(music)
    if (sound) {
      if (isPlaying) {
        sound.pause();
      } else {
        sound.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <button
      className={`bg-pink-400 hover:bg-pink-600 text-white py-2 px-4 rounded ${
        isPlaying ? "bg-red-500" : ""
      }`}
      onClick={toggleAudio}
    >
      <span className="mr-2">
        {isPlaying ? (
          <i className="fas fa-music"></i> // Icono de nota musical
        ) : (
          <i className="fas fa-play"></i> // Icono de reproducción
        )}
      </span>
      {isPlaying ? "Stop" : "Play"}
    </button>
  );
};

export default AudioControl;