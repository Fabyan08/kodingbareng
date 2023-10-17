import Footer from "../Components/Footer/Index";
// import Button from "../Components/Button/Index";
import Andro from "../Components/Nav/Andro";
import Desktop from "../Components/Nav/Desktop";
import { useEffect, useState } from "react";

import "aos/dist/aos.css";

import AOS from "aos";

import emailjs from "@emailjs/browser";

const Contact = () => {
  useEffect(() => {
    AOS.init();
    once: true;
  }, []);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const serviceId = "service_52trfy9";
    const templateId = "template_vgstbjt";
    const publicKey = "9MBpSvTDocgT0yQG0";

    // Create a new object contain dynamic template
    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Koding Bareng",
      message: message,
    };

    // Kirim email
    emailjs.send(serviceId, templateId, templateParams, publicKey).then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
        alert("Sukses, Tanggapanmu Terkirim!"); // Show a success alert
        window.location.href = "/contact";
        // formRef.current.reset();
      },
      (err) => {
        console.log("FAILED...", err);
        alert("Maaf, tanggapanmu gagal terkirim");
      }
    );
  };

  return (
    <>
      <div className="w-full md:z-0 -z-[9]">
        <div className="font-figtree md:min-h-screen h-[550px] bg-biru overflow-hidden">
          <nav
            data-aos="fade-down"
            className="relative z-[10] top-0 px-4 py-4 flex justify-between items-center "
          >
            <a className="text-3xl font-bold leading-none w-40 md:w-60" href="">
              <img src="/img/logo.png" alt="" />
            </a>
            <div className="lg:hidden"></div>
            <Desktop />
          </nav>
          <div className="backdrop-sepia-0 relative bg-white/30 blur-2xl">
            <div className="absolute -z-20 w-96 h-96 -mt-52 -ml-40 rounded-full bg-white"></div>
            <div className="absolute -z-20 w-[700px] h-[700px] right-0 hidden md:block -mt-20 -mr-60 rounded-full bg-dongker"></div>
            <div className="absolute -z-[20]  w-[400px] h-[400px] -mr-40 md:mt-[550px] mt-[500px]  right-0 rounded-full bg-white"></div>
          </div>
          <div className="absolute px-10 md:pl-16 -mt-40 md:-mt-0 font-figtree ">
            <h1 className=" font-bold mt-52 text-6xl md:text-7xl text-dongker md:text-white">
              Contact Us
            </h1>
            <h1 className="font-semibold mt-10 text-2xl text-white">
              Looking for any question about our community?{" "}
              <span className="text-dongker text-4xl"> Go Ahead!</span>
            </h1>
          </div>
          <div className="relative bottom-0 md:mt-[380px] mt-[270px] ">
            <div className="flex md:w-60 w-40 justify-center items-center md:ml-14 ml-28">
              <a
                href="https://tiktok.com/@kodingbareng"
                className="hover:shadow-lg  duration-100"
              >
                <img src="/icon/contact/Group 35.png" alt="" />
              </a>
              <a
                href="https://www.instagram.com/kodingbareng_/"
                className="hover:shadow-lg  duration-100"
              >
                <img src="/icon/contact/Group 36.png" alt="" />
              </a>
              <a
                href="https://chat.whatsapp.com/I6o3EBWVouSCl2m0v5XOKv"
                className="hover:shadow-lg  duration-100"
              >
                <img src="/icon/contact/Group 37.png" alt="" />
              </a>
            </div>
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
      <div className="md:flex md:px-24 px-10 mt-10 font-figtree">
        <div>
          <h1 className="text-biru text-5xl font-bold">
            What Will Be <br /> The Next Step?
          </h1>
          <h1 className="mt-10 text-slate-400 text-2xl">
            You are one step closer to <br /> communicate with us!
          </h1>
        </div>
        <div
          data-aos="fade-left"
          data-aos-duration="2000"
          className="mt-2 bg-white rounded-lg shadow-lg shadow-slate-300 w-80 md:w-[700px] h-fit py-10 absolute  md:right-0 md:-mt-80 md:mx-20"
        >
          <div className="flex justify-center items-center px-5 md:px-10 py-10">
            <img src="/icon/testi/Group 22.png" alt="" />{" "}
            <h1 className="text-biru text-xl ml-4">
              Write us a few words about your project or your confusion about
              our community here!
            </h1>
          </div>
          <form
            action="for"
            className="space-y-5 emailForm"
            // onSubmit={handleSubmit}
          >
            <div className="md:pl-10 pl-4 text-slate-500 text-2xl font-bold">
              <h1>Information</h1>
            </div>
            <div className="md:flex px-5 md:px-10 space-y-5 md:space-y-0">
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Your Name"
                className="bg-slate-200 focus:scale-110 duration-100 focus:border-biru valid:border-biru focus:outline-biru valid:outline-none  active:border-biru rounded-sm placeholder:text-biru text-biru w-72 px-2 border-none active:border-none h-10"
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your Email"
                className="md:right-0 md:mr-10 absolute bg-slate-200  focus:scale-110 duration-100 focus:border-biru valid:border-biru focus:outline-biru valid:outline-none  active:border-biru rounded-sm placeholder:text-biru text-biru w-72 px-2 border-none active:border-none h-10"
              />
            </div>
            <div className="md:pl-10 pl-5 md:pt-2 pt-16 text-slate-500 text-2xl font-bold">
              <h1>Your Message</h1>
            </div>
            <div className="flex md:px-10 px-5 ">
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full h-60 mt-2 active:mt-10 bg-slate-200  focus:scale-110 duration-100 focus:border-biru valid:border-biru focus:outline-biru valid:outline-none resize-none active:border-biru rounded-sm placeholder:text-biru text-biru  px-2 border-none active:border-none pt-4"
              ></textarea>
            </div>
            <div className="md:ml-10 ml-5">
              <button
                onClick={handleSubmit}
                className="lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 bg-biru text-white border-white border-4 rotate-${rotate} hover:rotate-0 hover:scale-125 hover:bg-gray-100 hover:text-biru hover:border-4 hover:border-biru text-xl font-bold rounded-xl transition duration-200"
                children="Send"
              />
            </div>
          </form>
        </div>
        <div className="mt-96"></div>
        <div className="md:hidden">
          <Footer />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Contact;
