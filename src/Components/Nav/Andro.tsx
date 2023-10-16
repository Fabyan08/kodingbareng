import { Link } from "react-router-dom";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineHome, AiOutlinePaperClip, AiOutlinePhone } from "react-icons/ai";
const Andro = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div>
      <AiOutlineMenu 
        onClick={handleNav}
        className="absolute top-4 text-white w-10 h-10 right-4 z-[9999999999999999999999] md:hidden cursor-pointer"
      />
      {nav ? (
        <div className="fixed w-full top-0 h-screen bg-white/90 flex flex-col justify-center items-center z-[999999]">
          <Link
            to="/home"
            className="rounded-full flex  w-32 shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <AiOutlineHome size={20} />
            <span className="pl-4">Home</span>
          </Link>
          <Link
            to="/about"
            className="rounded-full flex w-32 shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <AiOutlinePaperClip size={20} />
            <span className="pl-4">About Us</span>
          </Link>
          
          <Link
            to="/contact"
            className="rounded-full flex w-32 shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <AiOutlinePhone size={20} />
            <span className="pl-4">Contact</span>
          </Link>
        
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Andro;
