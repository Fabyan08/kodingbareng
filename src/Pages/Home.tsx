// import { Swiper, SwiperSlide } from "swiper/react";
// import { EffectCreative } from "swiper/modules";
import Andro from "../Components/Nav/Andro";
import Desktop from "../Components/Nav/Desktop";
import "./Slide.css";
// import "swiper/css";
// import "swipercss/effect-creative";
import { Link } from "react-router-dom";
// import Button from "../Components/Button/Index";
const Home = () => {
  return (
    // <div className="font-figtree min-h-screen  bg-gradient-to-r from-white via-blue-400 to-blue-800">
    <>
      <div className="overflow-x-hidden">
        <div className="font-figtree min-h-screen bg-biru overflow-hidden">
          <nav className="relative z-[999] top-0 px-4 py-4 flex justify-between items-center ">
            <a className="text-3xl font-bold leading-none w-40 md:w-60" href="">
              <img src="/img/logo.png" alt="" />
            </a>
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
                  <h1 className="text-6xl font-bold text-slate-800 sm:text-6xl lg:text-7xl">
                    Let's Join Our{" "}
                    <span className="text-white shadow-sm">Coding </span>
                    <div className="relative inline-flex">
                      <span className="absolute inset-x-0 bottom-0 border-b-[30px] border-dongker"></span>
                      <h1 className="relative text-6xl font-bold text-slate-800 sm:text-6xl lg:text-7xl">
                        Community.
                      </h1>
                    </div>
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

                <div className="relative md:absolute md:mt-64 md:pl-10 md:w-[800px] md:right-0">
                  <img
                    className="w-full"
                    src="img/Header Hero.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </section>
          {/* </div> */}
        </div>
        <div className="hidden md:flex text-figtree font-bold text-slate-400 text-2xl">
          <div className="absolute  container opacity-50 bg-white w-full h-40 bottom-0 ">
            <div className="flex -space-x-[700px]">
              <div className="flex flex-1 my-14">
                <img src="/icon/icon 1.png" alt="" />
                <div className="mt-2 ml-2">
                  <h1>Web Development</h1>
                </div>
              </div>
              <div className="flex flex-1 my-14 pl-8">
                <img src="/icon/icon 2.png" alt="" />
                <div className="mt-2 ml-2">
                  <h1>Game Development</h1>
                </div>
              </div>
              <div className="flex flex-1 my-14 pl-12">
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

        <div className="container">
          <div className="flex mt-10 text-figtree text-4xl font-bold text-dongker">
            <div className="flex align-middle">
              <img src="/icon/icon 4.png" alt="" />
              <h1 className="inline-block align-middle my-auto ml-2">
                Our Activity
              </h1>
            </div>
          </div>
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
                    <img
                      src="/icon/aktivitas/Group 5-1.png"
                      alt=""
                    />
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
                    <img
                      src="/icon/aktivitas/Group 5-3.png"
                      alt=""
                    />
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
                    <img
                      src="/icon/aktivitas/Group 5-2.png"
                      alt=""
                    />
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

          <div className="md:hidden mt-10 items-center justify-center space-y-5">
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

          <div className="md:flex md:mt-20">
            <div className="w-96 md:w-[1550px]">
              <img src="/img/Header Hero.png" alt="" />
            </div>
            <div className="w-full text-left md:pl-40">
              <div className="flex items-center mt-10 justify-start">
                <img
                  src="/icon/value/Group 4.png"
                  alt=""
                  className="w-14"
                />
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
                <div className="relative z-10 duration-200 hover:scale-100 bg-biru opacity-50 hover:opacity-100 hover:bg-white hover:shadow-xl hover:shadow-biru rounded-2xl w-48 h-48">
                  <div className="absolute z-[999] opacity-100 -mt-10 ml-4">
                    <img src="/icon/value/Group 5-3.png" alt="" />
                    <div className=" mt-2">
                      <h1 className=" text-dongker font-bold text-xl">
                        Education
                      </h1>
                      <h1 className=" text-dongker mt-2 font-semibold text-md">
                        In here, you can have some education about coding also
                        IT.
                      </h1>
                    </div>
                  </div>
                </div>
                <div className="relative z-10 duration-200 hover:scale-100 bg-biru opacity-50 hover:opacity-100 hover:bg-white hover:shadow-xl hover:shadow-biru rounded-2xl w-48 h-48">
                  <div className="absolute z-[999] opacity-100 px-2 -mt-10 ml-4">
                    <img src="/icon/value/Group 5.png" alt="" />
                    <div className=" mt-2">
                      <h1 className=" text-dongker font-bold text-xl">
                        Online Meet
                      </h1>
                      <h1 className=" text-dongker mt-2 font-semibold text-md">
                        In some moment later, we will have some online meeting
                        just to speak with each other.
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex space-x-5 mt-14">
                <div className="relative z-10 duration-200 hover:scale-100 bg-biru opacity-50 hover:opacity-100 hover:bg-white hover:shadow-xl hover:shadow-biru rounded-2xl  w-48 h-48">
                  <div className="absolute z-[999] opacity-100 pr-2 -mt-10 ml-4">
                    <img src="/icon/value/Group 5-1.png" alt="" />
                    <div className=" mt-2">
                      <h1 className=" text-dongker font-bold text-xl">Gift</h1>
                      <h1 className=" text-dongker mt-2 font-semibold text-md">
                        Don't worry about the gift, we will have some weekly
                        quiz and has some gift too for the winner.
                      </h1>
                    </div>
                  </div>
                </div>
                <div className="relative z-10 duration-200 hover:scale-100 bg-biru opacity-50 hover:opacity-100 hover:bg-white hover:shadow-xl hover:shadow-biru rounded-2xl w-48 h-48">
                  <div className="absolute z-[999] opacity-100 pr-4 -mt-10 ml-4">
                    <img src="/icon/value/Group 5-2.png" alt="" />
                    <div className=" mt-2">
                      <h1 className=" text-dongker font-bold text-xl">
                        Quesetion-Answer
                      </h1>
                      <h1 className=" text-dongker md:mt-2 font-semibold text-md">
                        In here, we work together to answer about your question
                        and give it best answer.
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="md:flex">
            <div className="items-center mt-10 flex-grow">
              <div className="w-full text-left md:pl-24">
                <div className="flex items-center ml-2  mt-10 justify-start">
                  <img
                    src="/icon/testi/Group 22.png"
                    className="w-14"
                    alt=""
                  />
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
            {/* <Swiper
              grabCursor={true}
              effect={"creative"}
              creativeEffect={{
                prev: {
                  shadow: true,
                  translate: [0, 0, -400],
                },
                next: {
                  translate: ["100%", 0, 0],
                },
              }}
              modules={[EffectCreative]}
              className="mySwiper"
            >
              <SwiperSlide>Slide 1</SwiperSlide>
              <SwiperSlide>Slide 2</SwiperSlide>
              <SwiperSlide>Slide 3</SwiperSlide>
              <SwiperSlide>Slide 4</SwiperSlide>
              <SwiperSlide>Slide 5</SwiperSlide>
              <SwiperSlide>Slide 6</SwiperSlide>
              <SwiperSlide>Slide 7</SwiperSlide>
              <SwiperSlide>Slide 8</SwiperSlide>
              <SwiperSlide>Slide 9</SwiperSlide>
            </Swiper> */}

            <div className="-mr-20 mt-0 md:-mt-20 ">
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
            <div className="mt-8 ">
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
        <section className="py-12 mt-32 shadow-inner  bg-white  font-figtree">
          <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center xl:flex xl:items-center xl:justify-between xl:text-left">
              <div className="xl:flex xl:items-center xl:justify-center">
                <div className="flex items-center justify-center">
                  <img src="/img/logo.png" alt="" />
                </div>
                <p className="mt-5 text-sm text-biru xl:ml-6 xl:mt-0">
                  © Copyright 2023
                </p>
              </div>

              <div className="items-center mt-8 xl:mt-0 xl:flex xl:justify-end xl:space-x-8">
                <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 xl:justify-end">
                  <li>
                    <a
                      href="index.html"
                      title=""
                      className="text-sm text-biru transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
                    >
                      Home
                    </a>
                  </li>

                  <li>
                    <Link
                      to="about"
                      title=""
                      className="text-sm text-biru transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
                    >
                      About Us
                    </Link>
                  </li>

                  <li>
                    <a
                      href="pages/ulasan.html"
                      title=""
                      className="text-sm text-biru transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
                    >
                      Program
                    </a>
                  </li>

                  <li>
                    <a
                      href="pages/kontak.html"
                      title=""
                      className="text-sm text-biru transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
                    >
                      Contact Us
                    </a>
                  </li>
                </ul>

                <div className="w-full h-px mt-8 mb-5 xl:w-px xl:m-0 xl:h-6 bg-gray-50/20"></div>

                <ul className="flex items-center justify-center space-x-8 xl:justify-end">
                  <li>
                    <a
                      href="#"
                      title=""
                      className="block text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#3B8DFF"
                        className="w-6 h-6"
                        viewBox="0 0 32 32"
                        version="1.1"
                      >
                        <title>tiktok</title>
                        <path d="M16.656 1.029c1.637-0.025 3.262-0.012 4.886-0.025 0.054 2.031 0.878 3.859 2.189 5.213l-0.002-0.002c1.411 1.271 3.247 2.095 5.271 2.235l0.028 0.002v5.036c-1.912-0.048-3.71-0.489-5.331-1.247l0.082 0.034c-0.784-0.377-1.447-0.764-2.077-1.196l0.052 0.034c-0.012 3.649 0.012 7.298-0.025 10.934-0.103 1.853-0.719 3.543-1.707 4.954l0.020-0.031c-1.652 2.366-4.328 3.919-7.371 4.011l-0.014 0c-0.123 0.006-0.268 0.009-0.414 0.009-1.73 0-3.347-0.482-4.725-1.319l0.040 0.023c-2.508-1.509-4.238-4.091-4.558-7.094l-0.004-0.041c-0.025-0.625-0.037-1.25-0.012-1.862 0.49-4.779 4.494-8.476 9.361-8.476 0.547 0 1.083 0.047 1.604 0.136l-0.056-0.008c0.025 1.849-0.050 3.699-0.050 5.548-0.423-0.153-0.911-0.242-1.42-0.242-1.868 0-3.457 1.194-4.045 2.861l-0.009 0.030c-0.133 0.427-0.21 0.918-0.21 1.426 0 0.206 0.013 0.41 0.037 0.61l-0.002-0.024c0.332 2.046 2.086 3.59 4.201 3.59 0.061 0 0.121-0.001 0.181-0.004l-0.009 0c1.463-0.044 2.733-0.831 3.451-1.994l0.010-0.018c0.267-0.372 0.45-0.822 0.511-1.311l0.001-0.014c0.125-2.237 0.075-4.461 0.087-6.698 0.012-5.036-0.012-10.060 0.025-15.083z" />
                      </svg>
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      title=""
                      className="block text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"
                    >
                      <svg
                        className="w-6 h-6"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="#3B8DFF"
                      >
                        <path d="M11.999 7.377a4.623 4.623 0 1 0 0 9.248 4.623 4.623 0 0 0 0-9.248zm0 7.627a3.004 3.004 0 1 1 0-6.008 3.004 3.004 0 0 1 0 6.008z"></path>
                        <circle cx="16.806" cy="7.207" r="1.078"></circle>
                        <path d="M20.533 6.111A4.605 4.605 0 0 0 17.9 3.479a6.606 6.606 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.554 6.554 0 0 0-2.184.42 4.6 4.6 0 0 0-2.633 2.632 6.585 6.585 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71 0 2.442 0 2.753.056 3.71.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.615 6.615 0 0 0 2.186-.419 4.613 4.613 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.581 6.581 0 0 0-.421-2.217zm-1.218 9.532a5.043 5.043 0 0 1-.311 1.688 2.987 2.987 0 0 1-1.712 1.711 4.985 4.985 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055-2.438 0-2.687 0-3.655-.055a4.96 4.96 0 0 1-1.669-.311 2.985 2.985 0 0 1-1.719-1.711 5.08 5.08 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654 0-2.437 0-2.686.053-3.655a5.038 5.038 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5.01 5.01 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a4.96 4.96 0 0 1 1.67.311 2.991 2.991 0 0 1 1.712 1.712 5.08 5.08 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655 0 2.436 0 2.698-.043 3.654h-.011z"></path>
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        {/* <div className="mt-96"></div> */}
      </div>
    </>
  );
};

export default Home;
