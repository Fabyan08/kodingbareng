import Footer from "../Components/Footer/Index";
import Andro from "../Components/Nav/Andro";
import Desktop from "../Components/Nav/Desktop";
import "./Slide.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { AiFillInfoCircle } from "react-icons/ai";

import { motion } from "framer-motion";
const Home = () => {
  useEffect(() => {
    AOS.init();
    once: true
  }, []);
  return (
    // <div className="font-figtree min-h-screen  bg-gradient-to-r from-white via-blue-400 to-blue-800">
    <>
      <div className="overflow-x-hidden ">
        <div className="font-figtree min-h-screen bg-biru overflow-hidden">
          <nav
            className="relative z-[999] top-0 px-4 py-4 flex justify-between items-center "
            data-aos="fade-down"
            data-aos-duration="700"
          >
            <Link
              className="text-3xl font-bold leading-none w-40 md:w-60"
              to="/home"
            >
              <motion.div
                whileHover={{ scale: 1.2 }}
                whileTap={{
                  scale: 0.8,
                  borderRadius: "100%",
                }}
              >
                <img src="/img/logo.png" alt="" />
              </motion.div>
            </Link>
            <Desktop />
          </nav>
          <Andro />

          <div className="backdrop-sepia-0 relative bg-white/30 blur-2xl">
            <div className="absolute -z-20 w-96 h-96 -mt-40 -ml-40 rounded-full bg-white"></div>
            <div className="absolute -z-20 w-[700px] h-[700px] right-0 -mt-20 -mr-60 rounded-full bg-dongker"></div>
            <div className="absolute -z-20  w-[400px] h-[400px] -mr-20 mt-[550px]  right-0 rounded-full bg-white"></div>
          </div>

          <section className="relative z-[99] py-10">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
              <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
                <div>
                  <h1 className="text-6xl font-bold text-slate-700 sm:text-6xl lg:text-7xl">
                    Let's Join Our{" "}
                    <div className="flex">
                      <span className="text-white shadow-sm">Coding </span>
                      <div className="w-16 md:mt-4 ml-2 animate-bounce">
                        <img src="/icon/design/code.png" alt="" />
                      </div>
                    </div>
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ rotate: 0, scale: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 50,
                      }}
                    >
                      <div className="relative inline-flex">
                        <span className="absolute inset-x-0 bottom-0 border-b-[20px] md:border-b-[30px] border-white md:border-dongker"></span>
                        <h1 className="relative text-6xl font-bold text-slate-800 sm:text-6xl lg:text-7xl">
                          Community.
                        </h1>
                      </div>
                    </motion.div>
                  </h1>

                  <p className="mt-8 text-base text-black sm:text-xl">
                    Learn more about coding and programming, also share your
                    insight story!
                  </p>

                  <div className="mt-10 sm:flex my-auto sm:items-center sm:space-x-8">
                    <a
                      href="#"
                      title=""
                      className="inline-flex items-center justify-center bg-biru text-white border-white border-4 hover:scale-110 md:hover:scale-125 hover:bg-gray-100 hover:text-biru hover:border-4 hover:border-biru text-xl font-bold rounded-xl transition duration-200 px-10 py-4 shadow-xl  focus:bg-blue-600"
                      role="button"
                    >
                      {" "}
                      Start Exploring{" "}
                    </a>

                    <a
                      href="https://tiktok.com/@kodingbareng"
                      target="_blank"
                      title=""
                      className="inline-flex items-center text-white mt-6 text-xl font-semibold transition-all duration-200 sm:mt-0 hover:opacity-80"
                    >
                      <svg
                        className="w-16 h-16 mr-3"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          fill="#FFFFFF"
                          stroke="#FFFFFF"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                        />
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                          d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      Watch video
                    </a>
                  </div>
                </div>
                <div className="-mt-44 mr-2 absolute right-0">
                  <img src="/icon/design/Frame 39.png" alt="" />
                </div>
                <div className="relative md:absolute md:mt-64 md:pl-10 md:w-[800px] md:right-0">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{
                      scale: 0.8,
                      borderRadius: "100%",
                    }}
                  >
                    <img className="w-full" src="img/Header Hero.png" alt="" />
                  </motion.div>
                </div>
              </div>
            </div>
          </section>
          {/* </div> */}
        </div>
        <div className="hidden md:flex text-figtree font-bold text-slate-400 text-2xl">
          <div className="absolute  container opacity-50 bg-white w-full h-40 bottom-0 ">
            <div className=" flex -space-x-[700px]">
              <div
                data-aos="fade-right"
                data-aos-duration="2300"
                className="flex flex-1 my-14"
              >
                <img src="/icon/icon 1.png" alt="" />
                <div className="mt-2 ml-2">
                  <h1>Web Development</h1>
                </div>
              </div>
              <div
                data-aos="fade-right"
                data-aos-duration="1500"
                className="flex flex-1 my-14 pl-10"
              >
                <img src="/icon/icon 2.png" alt="" />
                <div className="mt-2 ml-2">
                  <h1>Game Development</h1>
                </div>
              </div>
              <div
                data-aos="fade-right"
                data-aos-duration="700"
                className="flex flex-1 my-14 pl-14"
              >
                <img src="/icon/icon 3.png" alt="" />
                <div className="mt-2 ml-2">
                  <h1>Software Engineer</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" navbar-menu relative z-50 hidden">
          <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
          <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
            <div className="flex items-center mb-8">
              <a className="mr-auto text-3xl font-bold leading-none" href="#">
                <img
                  src="assets/img/logo2.png"
                  className="w-40 md:w-60"
                  alt=""
                />
              </a>
              <button className="navbar-close">
                <svg
                  className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>
            <div>
              <ul>
                <li className="mb-1">
                  <a
                    className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-kuning rounded"
                    href="index.html"
                  >
                    Home
                  </a>
                </li>
                <li className="mb-1">
                  <Link
                    className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-kuning rounded"
                    to="about"
                  >
                    About Us
                  </Link>
                </li>
                <li className="mb-1">
                  <a
                    className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-kuning rounded"
                    href="pages/ulasan.html"
                  >
                    Program
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-kuning rounded"
                    href="pages/kontak.html"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div className="mt-auto">
              <div className="pt-6">
                <a
                  className="block px-4 py-3 mb-3 leading-loose text-xs text-center text-kuning font-semibold border border-gray-400 bg-gray-50 hover:bg-gray-100 rounded-xl"
                  href="pages/auth/signin.html"
                >
                  Sign in
                </a>
                <a
                  className="block px-4 py-3 mb-2 leading-loose text-xs text-center text-white font-semibold bg-kuning hover:bg-utama rounded-xl"
                  href="pages/auth/signup.html"
                >
                  Sign Up
                </a>
              </div>
              <p className="my-4 text-xs text-center text-gray-400">
                <span>Copyright © 2023</span>
              </p>
            </div>
          </nav>
        </div>

        <div className="container ">
          <div className="flex mt-10 text-figtree text-4xl font-bold text-dongker">
            <div className="flex align-middle">
              <img src="/icon/icon 4.png" className="animate-bounce" alt="" />
              <h1 className="inline-block align-middle my-auto ml-2">
                Our Activity
              </h1>

              <div className="left-0 ml-3 border-[4px] animate-pulse md:hidden mt-[200px] z-[9999] bg-white rounded-full shadow-2xl border-biru w-5  h-5 absolute"></div>
              <div className="left-0 ml-3 border-[4px] md:hidden animate-puls mt-[550px] z-[9999] bg-white rounded-full shadow-2xl border-biru w-5  h-5 absolute"></div>
              <div className="left-0 ml-3 border-[4px] md:hidden animate-puls mt-[850px] z-[9999] bg-white rounded-full shadow-2xl border-biru w-5  h-5 absolute"></div>
              <div className="absolute md:hidden animate-puls left-0 border-[4px] border-r-white -ml-4 mt-52 w-10 h-[1000px]"></div>
              <div className="left-0 ml-3 md:hidden animate-puls border-[4px] mt-[1200px] z-[9999] bg-white rounded-full shadow-2xl border-biru w-5  h-5 absolute"></div>
            </div>
            <div className="overflow-hidden">
              <div className="hidden md:block md:absolute right-0 mt-60 md:-mt-20 -z-[999999] -mr-20 ">
                <img src="/icon/design/round1.png" alt="" />
              </div>
            </div>
          </div>
          {/* Desktop Mode */}
          <div className="md:flex mt-5  items-center justify-center hidden">
            <div className=" relative w-full items-center justify-center bg-gradient-to-r from-slate-200 via-blue-400 to-biru h-[500px] rounded-[100px] border-[20px] shadow-2xl shadow-biru border-white text-white flex">
              <div className="w-1/4 z-50 relative rounded-tl-[80px] rounded-bl-[80px] flex text-figtree justify-center text-center items-center text-4xl">
                <div className="py-[142px] -z-10 inset-x-0  rounded-bl-[80px] rounded-tl-[80px] hover:bg-gradient-to-r from-biru to-blue-500  hover:scale-110 transition duration-300 ease-in-out hover:shadow-lg">
                  <div className="justify-center items-center  flex flex-col ">
                    <img src="/icon/aktivitas/Group 5.png" alt="" />
                    <h1 className="text-center w-60 font-bold">Discussion</h1>
                    <p className="text-sm font-base">
                      Share your insightfull story and make positive discussion
                      about IT with each other.
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-1/4 z-50 relative rounded-tl-[80px] rounded-bl-[80px] flex text-figtree justify-center text-center items-center text-4xl">
                <div className="py-[142px] px-4 -z-10 inset-x-0 rounded-lg hover:bg-gradient-to-r from-biru to-blue-500 hover:scale-110 transition duration-300 ease-in-out hover:shadow-lg">
                  <div className="justify-center items-center  flex flex-col ">
                    <img src="/icon/aktivitas/Group 5-1.png" alt="" />
                    <h1 className="text-center w-60 font-bold">Chatting</h1>
                    <p className="text-sm font-base">
                      In here, you can make conversation with each other and
                      have meaningfull experience.
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-1/4 z-50 relative rounded-tl-[80px] rounded-bl-[80px] flex text-figtree justify-center text-center items-center text-4xl">
                <div className="py-[142px] px-4 -z-10 inset-x-0 rounded-lg hover:bg-gradient-to-r from-biru to-blue-500 hover:scale-110 transition duration-300 ease-in-out hover:shadow-lg">
                  <div className="justify-center items-center  flex flex-col ">
                    <img src="/icon/aktivitas/Group 5-3.png" alt="" />
                    <h1 className="text-center w-60 font-bold">Quiz</h1>
                    <p className="text-sm font-base">
                      With interactif quiz, you can learn coding by real case
                      and improve your skill.
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-1/4 z-50 relative rounded-tr-[80px] rounded-br-[80px] flex text-figtree justify-center text-center items-center text-4xl">
                <div className="py-[142px] px-4 -z-10 inset-x-0  rounded-br-[80px] rounded-tr-[80px] hover:bg-gradient-to-r from-biru to-blue-500  hover:scale-110 transition duration-300 ease-in-out hover:shadow-lg">
                  <div className="justify-center items-center  flex flex-col ">
                    <img src="/icon/aktivitas/Group 5-2.png" alt="" />
                    <h1 className="text-center w-60 font-bold">Networking</h1>
                    <p className="text-sm font-base">
                      Networking is one of the best way to improve your social
                      skills in IT, so what do you wait?
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Mode */}
          <div className="md:hidden mt-10 items-center justify-center space-y-5">
            <div className="absolute -z-10 right-0 -mt-10">
              <img src="/icon/design/round2.png" alt="" />
            </div>
            <div className="bg-biru w-72 h-72  hover:border-biru hover:bg-white   mx-auto rounded-[50px] border-8 border-white shadow-md shadow-biru py-10 text-white hover:text-biru hover:scale-110 duration-200">
              <div className="justify-center items-center flex flex-col ">
                <img src="/icon/aktivitas/Group 5.png" alt="" />
                <h1 className=" text-2xl font-bold text-dongker text-center">
                  Discussion
                </h1>
                <p className="text-md text-center p-2 ">
                  Share your insightfull story and make positive discussion
                  about IT with each other.
                </p>
              </div>
            </div>
            <div className="absolute -z-10 right-0 -mt-10">
              <img src="/icon/design/round2.png" alt="" />
            </div>
            <div className="bg-biru w-72 h-72  rounded-[50px] mx-auto text-white hover:text-biru hover:scale-110 duration-200 hover:bg-white hover:border-biru border-8 border-white shadow-md shadow-biru py-10 ">
              <div className="justify-center items-center flex flex-col  ">
                <img src="/icon/aktivitas/Group 5-1.png" alt="" />
                <h1 className=" text-2xl font-bold text-dongker text-center">
                  Chatting{" "}
                </h1>
                <p className="text-md  text-center p-2 ">
                  In here, you can make conversation with each other and have
                  meaningfull experience.
                </p>
              </div>
            </div>
            <div className="absolute -z-10 right-0 -mt-10">
              <img src="/icon/design/round2.png" alt="" />
            </div>
            <div className="bg-biru w-72 h-72  rounded-[50px] mx-auto text-white hover:text-biru hover:scale-110 duration-200 hover:bg-white hover:border-biru border-8 border-white shadow-md shadow-biru py-10 ">
              <div className="justify-center items-center flex flex-col  ">
                <img src="/icon/aktivitas/Group 5-3.png" alt="" />
                <h1 className=" text-2xl font-bold text-dongker text-center">
                  Quiz{" "}
                </h1>
                <p className="text-md  text-center p-2 ">
                  With interactif quiz, you can learn coding by real case and
                  improve your skill.
                </p>
              </div>
            </div>
            <div className="absolute -z-10 right-0 -mt-10">
              <img src="/icon/design/round2.png" alt="" />
            </div>
            <div className="bg-biru w-72 h-72  rounded-[50px] mx-auto text-white hover:text-biru hover:scale-110 duration-200 hover:bg-white hover:border-biru border-8 border-white shadow-md shadow-biru py-10 ">
              <div className="justify-center items-center flex flex-col  ">
                <img src="/icon/aktivitas/Group 5-2.png" alt="" />
                <h1 className=" text-2xl font-bold text-dongker text-center">
                  Networking
                </h1>
                <p className="text-md  text-center p-2 ">
                  Networking is one of the best way to improve your social
                  skills in IT, so what do you wait?
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Value */}
        <div className="md:flex md:mt-20">
          <div className="bg-slate-100 w-full h-60 absolute -z-[9999999] translate-y-64 animate-pulse" />
          <div className="w-96 flex ml-10 mt-10 -mb-20 md:-mb-0 md:mt-0 md:ml-20 md:w-[1700px]">
            <motion.div
              whileHover={{ scale: 1.2 }}
              whileTap={{
                scale: 0.8,
                borderRadius: "100%",
              }}
            >
              <img src="/img/Group 9.png" alt="" />
            </motion.div>
          </div>
          <div
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            className="bg-biru hidden md:block w-[600px] rounded-r-[100px] h-fit py-10 absolute mt-[550px]"
          >
            <div className="flex items-end justify-end pr-2">
              <AiFillInfoCircle className="text-white" size={60} />{" "}
            </div>
          </div>
          <div className="w-full text-left md:pl-40 container">
            <div className="absolute -z-10 left-0 -ml-20 -mt-20">
              <img src="/icon/design/round2.png" alt="" />
            </div>
            <div className="flex items-center mt-10 justify-start">
              <img src="/icon/value/Group 4.png" alt="" className="w-14" />
              <h1 className="inline-block align-middle my-auto ml-2 text-biru font-bold text-2xl md:text-4xl">
                Our Value To Help You
              </h1>
            </div>
            <div className="text-varian font-base text-lg mt-2">
              <h1 className="max-w-md">
                We always want to provide the best value for you and your
                health, join us to maximize the benefits.
              </h1>
            </div>
            <div className="flex space-x-5 mt-14">
              <div className="relative z-10 duration-200 hover:scale-100 bg-biru opacity-75 hover:opacity-100 hover:bg-white hover:shadow-xl hover:shadow-biru rounded-2xl w-48 h-48">
                <div
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom" data-aos-duration="1000"
                  className="absolute z-[999] opacity-100 -mt-10 ml-4"
                >
                  <img src="/icon/value/Group 5-3.png" alt="" />
                  <div className=" mt-2">
                    <h1 className=" text-dongker font-bold text-xl">
                      Education
                    </h1>
                    <h1 className=" text-dongker mt-2 text-base text-md">
                      In here, you can have some education about coding also IT.
                    </h1>
                  </div>
                </div>
              </div>
              <div className="relative z-10 duration-200 hover:scale-100 bg-biru opacity-75 hover:opacity-100 hover:bg-white hover:shadow-xl hover:shadow-biru rounded-2xl w-48 h-48">
                <div data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom" data-aos-duration="1500" className="absolute z-[999] opacity-100 px-2 -mt-10 ml-4">
                  <img src="/icon/value/Group 5.png" alt="" />
                  <div className=" mt-2">
                    <h1 className=" text-dongker font-bold text-xl">
                      Online Meet
                    </h1>
                    <h1 className=" text-dongker mt-2 text-base text-md">
                      In some moment later, we will have some online meeting
                      with each other.
                    </h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex space-x-5 mt-14">
              <div className="relative z-10 duration-200 hover:scale-100 bg-biru opacity-75 hover:opacity-100 hover:bg-white hover:shadow-xl hover:shadow-biru rounded-2xl  w-48 h-48">
                <div data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom" data-aos-duration="2000" className="absolute z-[999] opacity-100 pr-2 -mt-10 ml-4">
                  <img src="/icon/value/Group 5-1.png" alt="" />
                  <div className=" mt-2">
                    <h1 className=" text-dongker font-bold text-xl">Gift</h1>
                    <h1 className=" text-dongker mt-2 text-base text-md">
                      Don't worry about the gift, we will have some weekly quiz
                      and has some gift too for winner.
                    </h1>
                  </div>
                </div>
              </div>
              <div className="relative z-10 duration-200 hover:scale-100 bg-biru opacity-75 hover:opacity-100 hover:bg-white hover:shadow-xl hover:shadow-biru rounded-2xl w-48 h-48">
                <div data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom" data-aos-duration="2500" className="absolute z-[999] opacity-100 pr-4 -mt-10 ml-4">
                  <img src="/icon/value/Group 5-2.png" alt="" />
                  <div className=" mt-2">
                    <h1 className=" text-dongker font-bold text-xl">
                      Question-Answer
                    </h1>
                    <h1 className=" text-dongker md:mt-2 text-base text-md">
                      We discuss together about your question and give best
                      answer.
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="md:flex container">
          <div className="items-center mt-10 flex-grow">
            <div className="w-full text-left md:pl-24">
              <div className="flex items-center ml-2  mt-10 justify-start">
                <img src="/icon/testi/Group 22.png" className="w-14" alt="" />
                <h1 className="inline-block align-middle my-auto ml-2 text-dongker font-bold text-2xl md:text-4xl">
                  Testimonials About Us
                </h1>
              </div>
              <div className="text-dongker ml-4 font-base text-lg mt-2">
                <h1 className="max-w-md">
                  In the smallest case we always give your best, find out what
                  other user have to say about us.
                </h1>
              </div>
              <div className="absolute ml-2">
                <img src="/icon/testi/Group 22-1.png" alt="" />
              </div>
              <div className="bg-biru w-full md:w-[600px] h-60 mt-10 rounded-2xl">
                <div>
                  <h1 className="p-10 text-white font-semibold text-md md:text-xl">
                    “Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an un”
                  </h1>
                  <div className="bottom-0">
                    <h1 className="px-10 -mt-4 text-white font-bold text-2xl">
                      Dian Sastro
                    </h1>
                    <h1 className="text-base px-10 -mt-2 text-white">
                      Peserta Grup
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        

          <div className="-mr-20 mt-0 md:-mt-20">
            
            <img src="/icon/tfoot 1.png" alt="" />
          </div>
        </div>
      </div>
      <div className="md:flex mt-20 md:px-24 items-center justify-center px-4">
        <div className="relative w-full items-center justify-center bg-gradient-to-r from-biru via-biru to-blue-400 h-[400px] md:h-[500px] rounded-[100px] border-[20px] shadow-2xl shadow-biru border-white text-white text-center py-16 md:py-32">
          <div className="flex justify-center items-center">
            <img src="/img/logo white.png" alt="" />
          </div>
          <div className="font-bold font-figtree text-4xl">
            <h1 className="mt-2">
              Get Started With{" "}
              <span className="text-dongker">Koding Bareng</span>
            </h1>
          </div>
          <div className="hidden md:inline">
            <h1>
              Discover about tips & trick about programming and <br /> discuss
              also make positive network here!
            </h1>
          </div>
          <div className="mt-8 animate-bounce">
            <a
              className="lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 bg-biru text-white border-white border-4  hover:rotate-0 hover:scale-125 hover:bg-gray-100 hover:text-biru hover:border-4 hover:border-biru text-xl font-bold rounded-xl transition duration-200"
              href="pages/auth/signin.html"
            >
              Get Started{" "}
            </a>
          </div>
        </div>
      </div>
      {/* Footer */}
      <Footer />
      {/* <div className="mt-96"></div> */}
      {/* </div> */}
    </>
  );
};

export default Home;
