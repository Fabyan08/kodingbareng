import Desktop from "../Components/Nav/Desktop";
import OwlCarousel from "react-owl-carousel";
// import "owl.carousel/dist/assets/owl.carousel.css";
// import "owl.carousel/dist/assets/owl.theme.default.css";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

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
  <div className="item" key={1}>
    <div className="w-[700px]">
      <div className="relative">
        <div className="backdrop-blur-sm rounded-xl max-w-full absolute inset-0 bg-white/30"></div>
        <img
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80"
          alt=""
          className="rounded-xl"
        />
        <h1 className="text-3xl text-dongker font-bold text-center absolute inset-0 flex items-center justify-center">
          Programming & Coding
        </h1>
      </div>
    </div>
  </div>,
  <div className="item" key={2}>
    <div className="w-[700px]">
      <img
        src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80"
        alt=""
        className="rounded-xl"
      />{" "}
    </div>
  </div>,
];

const About = () => {
  return (
    <>
      <div className="w-full md:z-0 -z-[9]">
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
          {/* <div className="my-40"> */}
          <OwlCarousel className="owl-theme" {...options}>
            {items}
          </OwlCarousel>
          {/* </div> */}

        
        </div>
      </div>

      <Andro />

      <div className="pt-96"></div>
    </>
  );
};

export default About;
