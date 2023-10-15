import Nav from "../Components/Nav/Index";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineHome } from "react-icons/ai";

const About = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <>
      <div className="absolute w-full md:z-0 -z-[9]">
        <div className="font-figtree min-h-screen bg-biru overflow-hidden">
          <nav className="relative z-[10] top-0 px-4 py-4 flex justify-between items-center ">
            <a className="text-3xl font-bold leading-none w-40 md:w-60" href="">
              <img src="/src/assets/img/logo.png" alt="" />
            </a>
            <div className="lg:hidden">
              {/* <button className="navbar-burger flex items-center text-kuning p-3">
              <svg
                className="block h-4 w-4 fill-current"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Mobile menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
              </svg>
            </button> */}
            </div>
            <Nav />
          </nav>
          <div className="backdrop-sepia-0 relative bg-white/30 blur-2xl">
            <div className="absolute -z-20 w-96 h-96 -mt-40 -ml-40 rounded-full bg-white"></div>
            <div className="absolute -z-20 w-[700px] h-[700px] right-0 -mt-20 -mr-60 rounded-full bg-dongker"></div>
            <div className="absolute -z-20  w-[400px] h-[400px] -mr-20 mt-[550px]  right-0 rounded-full bg-white"></div>
          </div>

          <section className="relative z-[10] py-10">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
              <div className="flex items-center justify-center">
                <div className="relative">
                  <div className="backdrop-blur-sm absolute inset-0 bg-white/30"></div>
                  <div className="w-[900px]">
                    <img
                      src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80"
                      alt=""
                      className="rounded-xl"
                    />
                  </div>
                  <div>
                    <h1 className="z-10 absolute top-40 left-4 text-[70px] font-bold text-dongker">
                      Programming & Coding <br />{" "}
                      <span className="text-base -pt-20">About IT</span>
                    </h1>
                  </div>
                </div>

                {/* </div> */}
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Nav Coba */}
      <div>
        <AiOutlineMenu
          onClick={handleNav}
          className="absolute top-4 right-4 z-[9999999999999999999999] md:hidden cursor-pointer"
        />
        {nav ? (
          <div className="fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-[999999]">
            <a
              href="#main"
              className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
            >
              <AiOutlineHome size={20} />
              <span className="pl-4">Home</span>
            </a>
            <a
              href="#main"
              className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
            >
              <AiOutlineHome size={20} />
              <span className="pl-4">Work</span>
            </a>
            <a
              href="#main"
              className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
            >
              <AiOutlineHome size={20} />
              <span className="pl-4">Project</span>
            </a>
            <a
              href="#main"
              className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
            >
              <AiOutlineHome size={20} />
              <span className="pl-4">Contact</span>
            </a>
            <a
              href="#main"
              className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
            >
              <AiOutlineHome size={20} />
              <span className="pl-4">Resume</span>
            </a>
          </div>
        ) : (
          ""
        )}
      </div>

      {/* End Nav Coba */}

      <div className="pt-96"></div>
    </>
  );
};

export default About;
