import { Link } from "react-router-dom";
import AudioControl from "./AudioControl";
import imgOrca21 from "../assets/img/orca21.png"

export const Navbar = () => {
  return (
    <nav className="bg-pink-300 rounded-lg mb-4">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-3 py-4 items-center font-comic">
          <h1 className="text-xl font-bold text-white">
            <Link to={"/"}>Demis's World </Link>
          </h1>
          <div className="flex justify-center">
            {/* Aquí puedes colocar tu imagen */}
            <img
              src={imgOrca21}
              alt="Logo"
              className="h-12 rounded"
            />
          </div>
          <div>
            {/* Aquí puedes agregar botones para controlar la música */}
            <AudioControl></AudioControl>
          </div>
        </div>
      </div>
    </nav>
  );
};
