import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Welcome from "./pages/Welcome.jsx";
import Profesion from "./pages/Profesion.jsx";
import AventureBiology from "./pages/AventureBiology.jsx";
import Dialog from "./pages/Dialogo.jsx";
import Game from "./pages/Game.jsx";
import "./App.css";
import { SelectionProvider } from "./context/SelectionContext.jsx";
import { Navbar } from "./components/navbar.jsx";
import AventureMusic from "./pages/AventureMusic.jsx";
import '@fortawesome/fontawesome-free/css/all.css';

function App() {

  const navigate = useNavigate();

  useEffect(() => {
    navigate("/demis-world"); // Redirige a la página de bienvenida al cargar/reiniciar la aplicación
  }, []);
  
  return (
    <SelectionProvider>
      <Navbar></Navbar>
      <Routes>
        <Route path="/demis-world" element={<Welcome />} />
        <Route path="/demis-world/career" element={<Profesion />} />
        <Route path="/demis-world/biology" element={<AventureBiology/>}></Route>
        <Route path="/demis-world/music" element={<AventureMusic/>}></Route>
        <Route path="/demis-world/dialog" element={<Dialog />}></Route>
        <Route path="/demis-world/game" element={<Game/>}></Route>
      </Routes>
    </SelectionProvider>
  );
}

export default App;
