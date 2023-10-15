import Desktop from "../Components/Nav/Desktop";
// import "owl.carousel/dist/assets/owl.carousel.css";
// import "owl.carousel";
// import "owl.carousel/dist/assets/owl.carousel.css";

import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import Andro from "../Components/Nav/Andro";
const About = () => {
  return (
    <>
      <div className="absolute w-full md:z-0 -z-[9]">
        <div className="font-figtree min-h-screen bg-biru overflow-hidden">
          <nav className="relative z-[10] top-0 px-4 py-4 flex justify-between items-center ">
            <a className="text-3xl font-bold leading-none w-40 md:w-60" href="">
              <img src="/src/assets/img/logo.png" alt="" />
            </a>
            <div className="lg:hidden"></div>
            <Desktop />
          </nav>
          <div className="backdrop-sepia-0 relative bg-white/30 blur-2xl">
            <div className="absolute -z-20 w-96 h-96 -mt-40 -ml-40 rounded-full bg-white"></div>
            <div className="absolute -z-20 w-[700px] h-[700px] right-0 -mt-20 -mr-60 rounded-full bg-dongker"></div>
            <div className="absolute -z-20  w-[400px] h-[400px] -mr-20 mt-[550px]  right-0 rounded-full bg-white"></div>
          </div>
          {/* Coba */}
          <OwlCarousel className="owl-theme" loop margin={10} nav>
            <div className="item">
              <div className="md:w-[900px] w-96 ">
                <div className="backdrop-blur-sm absolute inset-0 bg-white/30 w-[900px] rounded-xl"></div>
                <img
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80"
                  alt=""
                  className="rounded-xl"
                />{" "}
              </div>
            </div>
            <div className="item pl-[500px] relative">
              <div className="md:w-[900px] w-96 absolute">
                <div className="backdrop-blur-sm absolute inset-0 bg-white/30 w-[900px] rounded-xl"></div>
                <img
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80"
                  alt=""
                  className="rounded-xl"
                />{" "}
              </div>{" "}
            </div>
            <div className="item">
              <h4>3</h4>
            </div>
            <div className="item">
              <h4>4</h4>
            </div>
            <div className="item">
              <h4>5</h4>
            </div>
            <div className="item">
              <h4>6</h4>
            </div>
            <div className="item">
              <h4>7</h4>
            </div>
            <div className="item">
              <h4>8</h4>
            </div>
            <div className="item">
              <h4>9</h4>
            </div>
            <div className="item">
              <h4>10</h4>
            </div>
            <div className="item">
              <h4>11</h4>
            </div>
            <div className="item">
              <h4>12</h4>
            </div>
          </OwlCarousel>
          ;{/* End Coba */}
          <section className="relative z-[10] py-10">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
              <div className="flex items-center justify-center space-x-10">
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
                <div className="owl-carousel owl-theme">
                  <div> Your Content </div>
                  <div> Your Content </div>
                  <div> Your Content </div>
                  <div> Your Content </div>
                  <div> Your Content </div>
                  <div> Your Content </div>
                  <div> Your Content </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <Andro />

      <div className="pt-96"></div>
    </>
  );
};

export default About;
