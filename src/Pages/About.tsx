import { useEffect, useState, useRef } from "react";

import CountUp from "react-countup/build";
import Footer from "../Components/Footer/Index";
import Desktop from "../Components/Nav/Desktop";

import OwlCarousel from "react-owl-carousel";
import Button from "../Components/Button/Index";

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { motion } from "framer-motion";
import "aos/dist/aos.css";

import AOS from "aos";

import Andro from "../Components/Nav/Andro";

const options = {
  center: true, // Optionally keep center as true
  margin: 700, // Increase the margin to add more space between items
  responsive: {
    0: {
      items: 1, // Display 1 item on mobile
    },
    600: {
      items: 2, // Display 2 items on tablets
    },
    1000: {
      items: 3, // Display 3 items on desktop
    },
  },
  animateOut: "fadeOut",
  animateIn: "flipInX",
  autoplay: true,
  dots: false,
  touchDrag: true,
  lazyLoad: true,
};

const items = [
  <div
    className="item"
    key={1}
    data-aos="fade-up"
    data-aos-anchor-placement="top-center"
    data-aos-duration="1000"
  >
    <div className="w-full px-2 h-96 md:h-0 md:w-[700px]">
      <div className="relative">
        <div className="backdrop-blur-sm rounded-xl max-w-full absolute inset-0 bg-black/40"></div>
        <img
          src="/img/about/coding.jpg"
          alt=""
          className="rounded-xl h-[400px] md:h-[470px]"
        />

        <div>
          <h1 className="text-3xl text-start text-white font-bold  absolute inset-0 flex items-center px-5">
            Programming & Coding
          </h1>
          <h1 className="text-md mt-20  text-start text-white  absolute inset-0 flex items-center px-5">
            Discussion about programming, also do coding! <br />
          </h1>
        </div>
      </div>
    </div>
  </div>,
  <div
    className="item"
    key={2}
    data-aos="fade-up"
    data-aos-anchor-placement="top-center"
    data-aos-duration="1500"
  >
    <div className="w-full px-2 h-96 md:h-0 md:w-[700px]">
      <div className="relative">
        <div className="backdrop-blur-sm rounded-xl max-w-full absolute inset-0 bg-black/40"></div>
        <img
          src="/img/about/arduino.jpg"
          alt=""
          className="rounded-xl h-[400px] md:h-[470px]"
        />

        <div>
          <h1 className="text-3xl text-start text-white font-bold  absolute inset-0 flex items-center px-5">
            Software & Hardware
          </h1>
          <h1 className="text-md mt-20  text-start text-white  absolute inset-0 flex items-center px-5">
            Discussion of the technology used to create software and hardware{" "}
            <br />
          </h1>
        </div>
      </div>
    </div>
  </div>,

  <div
    className="item"
    key={3}
    data-aos="fade-up"
    data-aos-anchor-placement="top-center"
    data-aos-duration="1000"
  >
    <div className="w-full md:w-[700px]">
      <div className="relative">
        <div className="backdrop-blur-sm rounded-xl max-w-full absolute inset-0 bg-black/40"></div>
        <img
          src="/img/about/community.jpg"
          alt=""
          className="rounded-xl h-[400px] md:h-full"
        />

        <div>
          <h1 className="text-3xl max-w-md text-start text-white font-bold  absolute inset-0 flex items-center px-5">
            Community of Indonesia IT
          </h1>
          <h1 className="text-md mt-40  text-start text-white  absolute inset-0 flex items-center px-5">
            As like the name, we are here to create a community for programmer
            enthusiasts in Indonesia.
            <br />
          </h1>
        </div>
      </div>
    </div>
  </div>,
];

const About = () => {
  const [inView, setInView] = useState(false);
  const countRef = useRef<HTMLDivElement | null>(null);

  // Callback function for Intersection Observer
  const handleIntersection = (entries: IntersectionObserverEntry[]) => {
    if (entries[0].isIntersecting) {
      setInView(true);
    }
  };

  // Initialize Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection);
    if (countRef.current) {
      observer.observe(countRef.current);
    }

    // Cleanup the observer when the component unmounts
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    AOS.init();
    once: true;
  }, []);
  return (
    <>
      <div className="w-full md:z-0 -z-[9]">
        <div className="font-figtree md:min-h-screen h-[550px] bg-biru overflow-hidden">
          <nav
            className="relative z-[10] top-0 px-4 py-4 flex justify-between items-center "
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            <a className="text-3xl font-bold leading-none w-40 md:w-60" href="">
              <motion.div
                whileHover={{ scale: 1.2 }}
                whileTap={{
                  scale: 0.8,
                  borderRadius: "100%",
                }}
              >
                <img src="/img/logo.png" alt="" />
              </motion.div>
            </a>
            <div className="lg:hidden"></div>
            <Desktop />
          </nav>
          <div className="backdrop-sepia-0 relative bg-white/30 blur-2xl">
            <div className="absolute -z-20 w-96 h-96 -mt-40 -ml-40 rounded-full bg-white"></div>
            <div className="absolute -z-20 w-[700px] h-[700px] right-0 hidden md:block -mt-20 -mr-60 rounded-full bg-dongker"></div>
            <div className="absolute -z-[20]  w-[400px] h-[400px] -mr-40 md:mt-[550px] mt-[500px]  right-0 rounded-full bg-white"></div>
          </div>
          <div className="mt-4 md:mt-20 px-1  md:px-0">
            <OwlCarousel className="owl-theme" {...options}>
              {items}
            </OwlCarousel>
          </div>
          <div className="-mt-[130px] hidden md:block">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path
                fill="#EEEEEE"
                fill-opacity="1"
                d="M0,128L80,138.7C160,149,320,171,480,197.3C640,224,800,256,960,261.3C1120,267,1280,245,1360,234.7L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
              ></path>
            </svg>
          </div>
        </div>
      </div>

      <Andro />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="-mt-[86px] md:hidden"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#EEEEEE"
          fill-opacity="1"
          d="M0,128L80,138.7C160,149,320,171,480,197.3C640,224,800,256,960,261.3C1120,267,1280,245,1360,234.7L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </svg>

      <div
        className="md:flex  container overflow-hidden"
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        <div className="md:hidden mt-10 -mb-20 flex justify-center items-center">
          <img src="/img/about/people.jpg" className="rounded-xl w-60" alt="" />
        </div>

        <div className="bg-slate-200 rounded-2xl w-full h-[500px] pt-36 md:pt-0 md:h-[700px] flex items-center right-0 md:ml-96">
          <div className="w-[900px] md:-ml-60 hidden md:flex">
            <img src="/img/about/people.jpg" className="rounded-xl" alt="" />
          </div>
          <div
            data-aos="fade-right"
            data-aos-duration="4000"
            className="md:ml-20 px-10 font-figtree md:-mt-0 -mt-20 md:pr-40"
          >
            <h1 className=" text-lg md:text-xl font-bold">About Us</h1>
            <h3 className="text-3xl md:text-5xl font-bold">
              We Want To Build Positive Community of Indonesian IT
            </h3>
            <h2 className="mt-5 text-md">Sort About Us.</h2>
            <h4>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
              eveniet aliquam minus voluptatem perspiciatis ipsum placeat harum
              facere nam illum.
            </h4>
            <div className="pt-10">
              <Button children="Learn More" rotate={0} />
            </div>
          </div>
        </div>
      </div>

      <div className=" md:px-40 mt-20 font-figtree">
        <div className="text-center ">
          <div className="relative inline-flex -rotate-12 md:mb-10 hover:rotate-0 duration-100 hover:scale-110">
            <span className="absolute inset-x-0 bottom-0 border-b-[10px] rounded-lg border-dongker"></span>
            <h1 className="relative text-4xl md:text-6xl font-bold text-slate-800 sm:text-6xl lg:text-7xl">
              Popular Topics
            </h1>
          </div>
        </div>

        {/* <div className="bg-slate-200 md:px-0 rounded-xl w-[400px] h-[400px]"> */}

        <div className="flex flex-wrap md:flex-nowrap md:gap-4 mt-10 justify-center px-10 md:px-0">
          <div
            data-aos="fade-down-right"
            data-aos-duration="1000"
            className="mb-5 p-4 md:w-1/3 bg-white rounded-lg itemBox"
          >
            <div className="rounded-lg overflow-hidden">
              <div className="hover:scale-105 transition-transform duration-300 ease-in-out transform origin-center">
                <div className="absolute bg-dongker text-white rounded-lg px-2 mt-4 ml-4">
                  <h1>Website</h1>
                </div>
                <img
                  src="/img/about/project1.jpg"
                  className="rounded-2xl"
                  alt=""
                />
              </div>
              <h2 className="text-primary font-bold uppercase mt-3 text-dongker">
                Programming
              </h2>
              <h3 className="font-semibold text-xl text-dark mt-2 mb-3">
                Website Development
              </h3>
              <p className="font-medium text-base text-secondary">
                Discuss the creation of websites and the technology that is
                currently being used.
              </p>
            </div>
          </div>
          <div
            data-aos="fade-down"
            data-aos-duration="2000"
            className="mb-5 p-4 md:w-1/3 bg-white rounded-lg itemBox"
          >
            <div className="rounded-lg overflow-hidden">
              <div className="hover:scale-105 transition-transform duration-300 ease-in-out transform origin-center">
                <div className="absolute bg-biru text-white rounded-lg px-2 mt-4 ml-4">
                  <h1>Game Dev</h1>
                </div>
                <img
                  src="/img/about/project1.jpg"
                  className="rounded-2xl"
                  alt=""
                />
              </div>
              <h2 className="text-primary font-bold text-biru uppercase mt-3">
                Programming
              </h2>
              <h3 className="font-semibold text-xl text-dark mt-2 mb-3">
                Game Development
              </h3>
              <p className="font-medium text-base text-secondary">
                In the future, we will share more experiences about game making
                and technology.
              </p>
            </div>
          </div>
          <div
            data-aos="fade-down-left"
            data-aos-duration="4000"
            className="mb-5 p-4 md:w-1/3 bg-white rounded-lg itemBox"
          >
            <div className="rounded-lg overflow-hidden">
              <div className="hover:scale-105 transition-transform duration-300 ease-in-out transform origin-center">
                <div className="absolute bg-blue-900 text-white rounded-lg px-2 mt-4 ml-4">
                  <h1>Hardware</h1>
                </div>
                <img
                  src="/img/about/project1.jpg"
                  className="rounded-2xl"
                  alt=""
                />
              </div>
              <h2 className="text-primary text-blue-900 t font-bold uppercase mt-3">
                Maintenance
              </h2>
              <h3 className="font-semibold text-xl text-dark mt-2 mb-3">
                Hardware + Programming
              </h3>
              <p className="font-medium text-base text-secondary">
                Discuss integration and hardware such as arduino depending on
                the group's interest.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}

      <div className="bg-gradient-to-r from-biru via-blue-400 to-blue-500 font-figtree overflow-hidden w-full h-[400px] mt-10">
        <div className="md:flex h-full justify-center items-center pt-5">
          <div className="flex md:flex-none  justify-center items-center md:-space-x-0 -space-x-48 md:-ml-0 -ml-20">
            <div className="px-40 w-96 text-center">
              <img src="/icon/about/Group 31.png" alt="" />
              <h1
                className="text-white font-black text-6xl countup-container"
                ref={countRef}
              >
                {inView && (
                  <CountUp
                    end={400}
                    duration={3}
                    start={0}
                    separator=","
                    prefix="+"
                  />
                )}
              </h1>
              <h1 className="text-white font-md text-2xl">Participants</h1>
            </div>
            <div className="px-40 w-96 text-center">
              <img src="/icon/about/Group 32.png" alt="" />
              <h1
                className="text-white font-black text-6xl countup-container"
                ref={countRef}
              >
                {inView && (
                  <CountUp
                    end={100}
                    duration={3}
                    start={0}
                    separator=","
                    prefix="+"
                  />
                )}
              </h1>{" "}
              <h1 className="text-white font-md text-2xl">Followers</h1>
            </div>
          </div>
          <div className="flex md:flex-none  justify-center pt-8 items-center md:-space-x-0 -space-x-48 md:-ml-0 -ml-20">
            <div className="px-40 w-96 text-center">
              <img src="/icon/about/Group 33.png" alt="" />
              <h1
                className="text-white font-black text-6xl countup-container"
                ref={countRef}
              >
                {inView && (
                  <CountUp
                    end={10}
                    duration={3}
                    start={0}
                    separator=","
                    suffix="K"
                  />
                )}
              </h1>{" "}
              <h1 className="text-white font-md text-2xl">Likes</h1>
            </div>
            <div className="px-40 w-96 text-center">
              <img src="/icon/about/Group 34.png" alt="" />
              <h1
                className="text-white font-black text-6xl countup-container"
                ref={countRef}
              >
                {inView && (
                  <CountUp end={24} duration={3} start={0} separator="," />
                )}
              </h1>{" "}
              <h1 className="text-white font-md text-2xl">Hours</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="font-figtree mt-20">
        <div className="text-center ">
          <div className="relative inline-flex rotate-12 md:mb-10 hover:rotate-0 duration-100 hover:scale-150">
            <span className="absolute inset-x-0 bottom-0 border-b-[10px] md:border-b-[20px] rounded-lg border-dongker"></span>
            <h1 className="relative text-2xl md:text-6xl font-bold text-slate-800 sm:text-6xl lg:text-7xl">
              Admin & Founder
            </h1>
          </div>
          <div className="md:flex items-center space-y-56 md:space-x-20 justify-center mx-auto px-24 mt-52 md:mt-20  md:px-32">
            <div className="w-96">
              <div className="bg-biru rounded-lg w-60 h-60 mt-28" />
              <img
                src="/img/about/Foto.jpg"
                className="rounded-full w-60 -mt-[400px] -ml-20"
                alt=""
              />
              <div className="text-white">
                <h1 className="text-xl mt-4 -ml-[150px] md:-ml-[20px] font-bold">
                  Fabyan Yastika Permana
                </h1>
                <h1 className="text-start pl-[10px]">Website Developer</h1>
              </div>
             
            </div>
            <div className="w-96">
              <div className="bg-biru rounded-lg w-60 h-60 md:-mt-28" />
              <img
                src="/img/about/abhi.jpeg"
                className="rounded-full w-60 -mt-[400px] -ml-20"
                alt=""
              />
              <div className="text-white">
                <h1 className="text-xl mt-4 -ml-[150px] md:-ml-[20px] font-bold">
                  Abhinaya Nuzuluzzuhdi
                </h1>
                <h1 className="text-start pl-[10px]">Data Analyst</h1>
              </div>
             
            </div>
            <div className="w-96">
              <div className="bg-biru rounded-lg w-60 h-60  md:-mt-28" />
              <img
                src="/img/about/Foto.jpg"
                className="rounded-full w-60 -mt-[400px] -ml-20"
                alt=""
              />
              <div className="text-white">
                <h1 className="text-xl mt-4 -ml-[150px] md:-ml-[20px] font-bold">
                  Fabyan Yastika Permana
                </h1>
                <h1 className="text-start pl-[10px]">Website Developer</h1>
              </div>
             
            </div>
            <div className="w-96">
              <div className="bg-biru rounded-lg w-60 h-60  md:-mt-28" />
              <img
                src="/img/about/Foto.jpg"
                className="rounded-full w-60 -mt-[400px] -ml-20"
                alt=""
              />
              <div className="text-white">
                <h1 className="text-xl mt-4 -ml-[150px] md:-ml-[20px] font-bold">
                  Fabyan Yastika Permana
                </h1>
                <h1 className="text-start pl-[10px]">Website Developer</h1>
              </div>
              
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
