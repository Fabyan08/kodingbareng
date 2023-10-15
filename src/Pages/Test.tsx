import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const options = {
  loop: true,
  center: true,
  margin: 10,
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
    <img src="/img/logo.png" alt="" />
  </div>,
  <div className="item" key={2}>
    <img src="/img/Header Hero.png" alt="" />
  </div>,
  // Add more items here
];

const Test = () => {
  return (
    <div className="mt-40">
      <OwlCarousel className="owl-theme" {...options}>
        {items}
      </OwlCarousel>
    </div>
  );
};

export default Test;
