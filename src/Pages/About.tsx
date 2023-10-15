import Desktop from "../Components/Nav/Desktop";
// import Button from "../Components/Button/Index";
import OwlCarousel from "react-owl-carousel";
import Button from "../Components/Button/Index";
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
    <div className="md:w-[700px]">
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
    <div className="md:w-[700px]">
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
  <div className="item" key={3}>
    <div className="md:w-[700px]">
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
];

const About = () => {
  return (
    <>
      <div className="w-full md:z-0 -z-[9]">
        <div className="font-figtree md:min-h-screen h-[550px] bg-biru overflow-hidden">
          <nav className="relative z-[10] top-0 px-4 py-4 flex justify-between items-center ">
            <a className="text-3xl font-bold leading-none w-40 md:w-60" href="">
              <img src="/src/assets/img/logo.png" alt="" />
            </a>
            <div className="lg:hidden"></div>
            <Desktop />
          </nav>
          <div className="backdrop-sepia-0 relative bg-white/30 blur-2xl">
            <div className="absolute -z-20 w-96 h-96 -mt-40 -ml-40 rounded-full bg-white"></div>
            <div className="absolute -z-20 w-[700px] h-[700px] right-0 hidden md:block -mt-20 -mr-60 rounded-full bg-dongker"></div>
            <div className="absolute -z-[20]  w-[400px] h-[400px] -mr-40 md:mt-[550px] mt-[500px]  right-0 rounded-full bg-white"></div>
          </div>
          <div className="mt-20 px-1 md:px-0">
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

      <div className="md:flex container overflow-hidden">
        <div className="md:hidden mt-10 -mb-20 flex justify-center items-center">
          <img src="/img/about/people.jpg" className="rounded-xl w-60" alt="" />
        </div>

        <div className="bg-slate-200 rounded-2xl w-full h-[500px] pt-36 md:pt-0 md:h-[700px] flex items-center right-0 md:ml-96">
          <div className="w-[900px] md:-ml-60 hidden md:flex">
            <img src="/img/about/people.jpg" className="rounded-xl" alt="" />
          </div>
          <div className="md:ml-20 px-10 font-figtree md:-mt-0 -mt-20 md:pr-40">
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

      <div className="px-40 mt-20 font-figtree">
        <div className="text-center ">
          <h1 className="font-bold text-3xl md:text-5xl">Populer Topics</h1>
        </div>

        <div className="bg-slate-200 w-[400px] h-[400px]">
          <div>
            <img src="" alt="" />
          </div>
        </div>
      </div>

      <div className="pt-96"></div>
    </>
  );
};

export default About;
