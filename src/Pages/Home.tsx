import Button from "../Components/Button/Index";
const Home = () => {
  return (
    // <div className="font-figtree min-h-screen  bg-gradient-to-r from-white via-blue-400 to-blue-800">
    <>
      <div className="overflow-x-hidden">
        <div className="font-figtree min-h-screen bg-biru overflow-hidden">
          <nav className="relative z-[999] top-0 px-4 py-4 flex justify-between items-center ">
            <a className="text-3xl font-bold leading-none w-40 md:w-60" href="">
              <img src="/src/assets/img/logo.png" alt="" />
            </a>
            <div className="lg:hidden">
              <button className="navbar-burger flex items-center text-kuning p-3">
                <svg
                  className="block h-4 w-4 fill-current"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Mobile menu</title>
                  <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                </svg>
              </button>
            </div>
            <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-16 font-jkt">
              <li>
                <a
                  className="text-lg text-[#FBFBFB] font-bold hover:text-dongker hover:border-2 hover:border-white p-2 rounded-xl hover:scale-250 duration-200"
                  href="#"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  className="text-lg text-[#FBFBFB] font-bold  hover:text-dongker hover:border-2 hover:border-white p-2 rounded-xl hover:scale-250 duration-200"
                  href="pages/mobil.html"
                >
                  About Us
                </a>
              </li>

              <li>
                <a
                  className="text-lg text-[#FBFBFB] font-bold  hover:text-dongker hover:border-2 hover:border-white p-2 rounded-xl hover:scale-250 duration-200"
                  href="pages/ulasan.html"
                >
                  Program
                </a>
              </li>

              <li>
                <a
                  className="text-lg text-[#FBFBFB] font-bold  hover:text-dongker hover:border-2 hover:border-white p-2 rounded-xl hover:scale-250 duration-200"
                  href="pages/kontak.html"
                >
                  Contact Us
                </a>
              </li>
            </ul>
            <Button children="Lets' Talk" />
          </nav>
          <div className="backdrop-sepia-0 relative bg-white/30 blur-2xl">
            <div className="absolute -z-20 w-96 h-96 -mt-40 -ml-40 rounded-full bg-white"></div>
            <div className="absolute -z-20 w-[700px] h-[700px] right-0 -mt-20 -mr-60 rounded-full bg-dongker"></div>
            <div className="absolute -z-20  w-[400px] h-[400px] -mr-20 mt-[550px]  right-0 rounded-full bg-white"></div>
          </div>

          <section className="relative z-[99] py-10">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
              <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
                <div>
                  <h1 className="text-4xl font-bold text-black sm:text-6xl lg:text-7xl">
                    Let's Join Our{" "}
                    <span className="text-white shadow-sm">Coding </span>
                    <div className="relative inline-flex">
                      <span className="absolute inset-x-0 bottom-0 border-b-[30px] border-dongker"></span>
                      <h1 className="relative text-4xl font-bold text-black sm:text-6xl lg:text-7xl">
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
                      className="inline-flex items-center justify-center bg-biru text-white border-white border-4 hover:scale-125 hover:bg-gray-100 hover:text-biru hover:border-4 hover:border-biru text-xl font-bold rounded-xl transition duration-200 px-10 py-4 shadow-xl  focus:bg-blue-600"
                      role="button"
                    >
                      {" "}
                      Start Exploring{" "}
                    </a>

                    <a
                      href="#"
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
                          fill="#3B8DFF"
                          stroke="#3B8DFF"
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
                    src="/src/assets/img/Header Hero.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="hidden md:flex text-figtree font-bold text-slate-400 text-2xl">
          <div className="absolute  container opacity-50 bg-white w-full h-40 bottom-0 ">
            <div className="flex -space-x-[700px]">
              <div className="flex flex-1 my-14">
                <img src="/src/assets/icon/icon 1.png" alt="" />
                <div className="mt-2 ml-2">
                  <h1>Web Development</h1>
                </div>
              </div>
              <div className="flex flex-1 my-14 pl-8">
                <img src="/src/assets/icon/icon 2.png" alt="" />
                <div className="mt-2 ml-2">
                  <h1>Game Development</h1>
                </div>
              </div>
              <div className="flex flex-1 my-14 pl-12">
                <img src="/src/assets/icon/icon 3.png" alt="" />
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
                  <a
                    className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-kuning rounded"
                    href="pages/mobil.html"
                  >
                    About Us
                  </a>
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
              <img src="/src/assets/icon/icon 4.png" alt="" />
              <h1 className="inline-block align-middle my-auto ml-2">
                Our Activityy
              </h1>
            </div>
          </div>
          <div className="md:flex mt-5  items-center justify-center hidden">
            <div className=" relative w-full items-center justify-center bg-gradient-to-r from-slate-200 via-blue-400 to-biru h-[500px] rounded-[100px] border-[20px] shadow-2xl shadow-biru border-white text-white flex">
              <div className="w-1/4 z-50 relative rounded-tl-[80px] rounded-bl-[80px] flex text-figtree justify-center text-center items-center text-4xl">
                <div className="py-[142px] -z-10 inset-x-0  rounded-bl-[80px] rounded-tl-[80px] hover:bg-gradient-to-r from-biru to-blue-500  hover:scale-110 transition duration-300 ease-in-out hover:shadow-lg">
                  <div className="justify-center items-center  flex flex-col ">
                    <img src="/src/assets/icon/icon 4 remaster.png" alt="" />
                    <h1 className="text-center w-60 font-bold">Our Activity</h1>
                    <p className="text-sm font-base">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Libero, rem.
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-1/4 z-50 relative rounded-tl-[80px] rounded-bl-[80px] flex text-figtree justify-center text-center items-center text-4xl">
                <div className="py-[142px] px-4 -z-10 inset-x-0 rounded-lg hover:bg-gradient-to-r from-biru to-blue-500 hover:scale-110 transition duration-300 ease-in-out hover:shadow-lg">
                  <div className="justify-center items-center  flex flex-col ">
                    <img src="/src/assets/icon/icon 4 remaster.png" alt="" />
                    <h1 className="text-center w-60 font-bold">Our Activity</h1>
                    <p className="text-sm font-base">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Libero, rem.
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-1/4 z-50 relative rounded-tl-[80px] rounded-bl-[80px] flex text-figtree justify-center text-center items-center text-4xl">
                <div className="py-[142px] px-4 -z-10 inset-x-0 rounded-lg hover:bg-gradient-to-r from-biru to-blue-500 hover:scale-110 transition duration-300 ease-in-out hover:shadow-lg">
                  <div className="justify-center items-center  flex flex-col ">
                    <img src="/src/assets/icon/icon 4 remaster.png" alt="" />
                    <h1 className="text-center w-60 font-bold">Our Activity</h1>
                    <p className="text-sm font-base">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Libero, rem.
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-1/4 z-50 relative rounded-tr-[80px] rounded-br-[80px] flex text-figtree justify-center text-center items-center text-4xl">
                <div className="py-[142px] px-4 -z-10 inset-x-0  rounded-br-[80px] rounded-tr-[80px] hover:bg-gradient-to-r from-biru to-blue-500  hover:scale-110 transition duration-300 ease-in-out hover:shadow-lg">
                  <div className="justify-center items-center  flex flex-col ">
                    <img src="/src/assets/icon/icon 4 remaster.png" alt="" />
                    <h1 className="text-center w-60 font-bold">Our Activity</h1>
                    <p className="text-sm font-base">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Libero, rem.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="md:hidden items-center justify-center space-y-5">
            <div className="bg-biru w-72 h-72  mx-auto rounded-[50px] border-8 border-white shadow-md shadow-biru py-10 ">
              <div className="justify-center items-center flex flex-col ">
                <img src="/src/assets/icon/icon 4 remaster.png" alt="" />
                <h1 className=" text-2xl font-bold text-dongker text-center">
                  Our Activity
                </h1>
                <p className="text-md text-white text-center p-2 ">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Libero, rem.
                </p>
              </div>
            </div>
            <div className="bg-biru w-72 h-72  rounded-[50px] mx-auto border-8 border-white shadow-md shadow-biru py-10 ">
              <div className="justify-center items-center flex flex-col ">
                <img src="/src/assets/icon/icon 4 remaster.png" alt="" />
                <h1 className=" text-2xl font-bold text-dongker text-center">
                  Our Activity
                </h1>
                <p className="text-md text-white text-center p-2 ">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Libero, rem.
                </p>
              </div>
            </div>
            <div className="bg-biru w-72 h-72  rounded-[50px] mx-auto border-8 border-white shadow-md shadow-biru py-10 ">
              <div className="justify-center items-center flex flex-col ">
                <img src="/src/assets/icon/icon 4 remaster.png" alt="" />
                <h1 className=" text-2xl font-bold text-dongker text-center">
                  Our Activity
                </h1>
                <p className="text-md text-white text-center p-2 ">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Libero, rem
                </p>
              </div>
            </div>
            <div className="bg-biru w-72 h-72  rounded-[50px] mx-auto border-8 border-white shadow-md shadow-biru py-10 ">
              <div className="justify-center items-center flex flex-col ">
                <img src="/src/assets/icon/icon 4 remaster.png" alt="" />
                <h1 className=" text-2xl font-bold text-dongker text-center">
                  Our Activity
                </h1>
                <p className="text-md text-white text-center p-2 ">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Libero, rem.
                </p>
              </div>
            </div>
          </div>

          <div className="md:flex md:mt-20">
            <div className="w-96 md:w-[1550px]">
              <img src="/src/assets/img/Header Hero.png" alt="" />
            </div>
            <div className="w-full text-left md:pl-40">
              <div className="flex items-center mt-10 justify-start">
                <img
                  src="/src/assets/icon/icon 4.png"
                  className="w-14"
                  alt=""
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
                    <img src="/src/assets/icon/icon 4.png" alt="" />
                    <div className=" mt-2">
                      <h1 className=" text-dongker font-bold text-xl">
                        Network
                      </h1>
                      <h1 className=" text-dongker mt-2 font-semibold text-md">
                        Our value is create positive networking of each other in
                        IT
                      </h1>
                    </div>
                  </div>
                </div>
                <div className="relative z-10 duration-200 hover:scale-100 bg-biru opacity-50 hover:opacity-100 hover:bg-white hover:shadow-xl hover:shadow-biru rounded-2xl w-48 h-48">
                  <div className="absolute z-[999] opacity-100 -mt-10 ml-4">
                    <img src="/src/assets/icon/icon 4.png" alt="" />
                    <div className=" mt-2">
                      <h1 className=" text-dongker font-bold text-xl">
                        Network
                      </h1>
                      <h1 className=" text-dongker mt-2 font-semibold text-md">
                        Our value is create positive networking of each other in
                        IT
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex space-x-5 mt-14">
                <div className="relative z-10 duration-200 hover:scale-100 bg-biru opacity-50 hover:opacity-100 hover:bg-white hover:shadow-xl hover:shadow-biru rounded-2xl w-48 h-48">
                  <div className="absolute z-[999] opacity-100 -mt-10 ml-4">
                    <img src="/src/assets/icon/icon 4.png" alt="" />
                    <div className=" mt-2">
                      <h1 className=" text-dongker font-bold text-xl">
                        Network
                      </h1>
                      <h1 className=" text-dongker mt-2 font-semibold text-md">
                        Our value is create positive networking of each other in
                        IT
                      </h1>
                    </div>
                  </div>
                </div>
                <div className="relative z-10 duration-200 hover:scale-100 bg-biru opacity-50 hover:opacity-100 hover:bg-white hover:shadow-xl hover:shadow-biru rounded-2xl w-48 h-48">
                  <div className="absolute z-[999] opacity-100 -mt-10 ml-4">
                    <img src="/src/assets/icon/icon 4.png" alt="" />
                    <div className=" mt-2">
                      <h1 className=" text-dongker font-bold text-xl">
                        Network
                      </h1>
                      <h1 className=" text-dongker mt-2 font-semibold text-md">
                        Our value is create positive networking of each other in
                        IT
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
                    src="/src/assets/icon/icon 4.png"
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
                  <img src="/src/assets/icon/icon 4.png" alt="" />
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
                      <h1 className="text-base px-10 -mt-2 text-white">Peserta Grup</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="-mr-20 mt-0 md:-mt-20  ">
              <img src="/src/assets/icon/tfoot 1.png" alt="" />
            </div>
          </div>
        </div>
        <div className="mt-96"></div>
      </div>
    </>
  );
};

export default Home;
