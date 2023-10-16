import Button from "../Button/Index";
import { Link } from "react-router-dom";
const Desktop = () => {
  return (
    <div className="hidden md:flex lg:flex">
      <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-16 font-jkt">
        <li>
          <Link
            className="text-lg text-[#FBFBFB] font-bold hover:text-dongker hover:border-2 hover:border-white p-2 rounded-xl hover:scale-250 duration-200"
            to="/home"
          >
            Home
          </Link>
        </li>

        <li>
          <Link
            className="text-lg text-[#FBFBFB] font-bold  hover:text-dongker hover:border-2 hover:border-white p-2 rounded-xl hover:scale-250 duration-200"
            to="/about"
          >
            About Us
          </Link>
        </li>

       

        <li>
          <Link
            className="text-lg text-[#FBFBFB] font-bold  hover:text-dongker hover:border-2 hover:border-white p-2 rounded-xl hover:scale-250 duration-200"
            to="/contact"
          >
            Contact Us
          </Link>
        </li>
      </ul>
      <Button children="Lets' Talk" rotate={12} />
    </div>
  );
};

export default Desktop;
