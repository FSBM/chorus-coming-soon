import Guitar from "./assets/2.png";
import Tshirt from "./assets/BlackShirt.png";
import { easeInOut } from "framer-motion";
import { motion } from "framer-motion";
import chorus from "./assets/CHORUS.png";
import PersonHead from "./assets/3.png";
import CD from "./assets/11.png";
import PostCard from "./assets/12.png";
import Tv from "./assets/Tv.png";
import Glitch from "./assets/glitch.gif";
import { useState } from "react";
import PlayButton from './assets/PlayBtn2.png'
import { BsFillPlayCircleFill } from "react-icons/bs";
import { IoPlayBackSharp } from "react-icons/io5";
import { IoPlayForwardSharp } from "react-icons/io5";
import { TiArrowLoop } from "react-icons/ti";
import { IoShuffle } from "react-icons/io5";
import { useRef } from "react";
import { MdPauseCircleFilled } from "react-icons/md";
import songFile from "./assets/Travis Scott - FE!N ft. Playboi Carti.mp3";


export default function App() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    artist: "",
  });

  const GOOGLE_FORM_ACTION_URL =
    "https://docs.google.com/forms/u/0/d/e/1FAIpQLSfQ02d-dyJxdCo1wU44faOPAMrLq3af92XTX1NxdeBfXNoRXg/formResponse";

  const GOOGLE_FIELDS = {
    name: "entry.1132687343",
    email: "entry.233911659",
    artist: "entry.625029594",
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    const formDataToSend = new FormData();
    formDataToSend.append(GOOGLE_FIELDS.name, formData.name);
    formDataToSend.append(GOOGLE_FIELDS.email, formData.email);
    formDataToSend.append(GOOGLE_FIELDS.artist, formData.artist);

    try {
      await fetch(GOOGLE_FORM_ACTION_URL, {
        method: "POST",
        body: formDataToSend,
        mode: "no-cors",
      });

      setSubmitted(true); // Show success message
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(new Audio(songFile));

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };
  return (
    <div className="customBG w-[100vw] relative overflow-x-hidden  p-[10px] md:p-[20px]">
      <div className="mx-auto  bg-yellow-50 rounded-lg m-auto shadow-md shadow-gray-950 pb-3">
        <img
          src={Guitar}
          alt=""
          className="absolute top-[-200px] rotate-[16deg] md:rotate-0 md:top-[-180px] right-[-50px] md:right-0 w-[400px] md:w-[400px] lg:w-[500px]"
        />
        <div className="flex flex-col mx-auto justify-center items-center h-[70vh] md:h-[100vh]">
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: easeInOut, delay: 0.1 }}
            className="oswald-400 text-xl md:text-2xl text-[#ec2252]"
          >
            Feel the Music. Wear the Moment.
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: easeInOut, delay: 0.2 }}
            className="font-bravado text-[120px] md:text-[200px] text-[#3cb2d8] text-center -mb-10"
          >
            Chorus
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: easeInOut, delay: 0.3 }}
            className="oswald-400 text-xl md:text-3xl text-[#ec2252] pt-[-20px]"
          >
            COMING SOON
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: easeInOut, delay: 0.5 }}
            className="SpaceG w-[90%] md:w-[55%] pt-4 text-[14px] md:text-[18px] text-center"
          >
            The energy of a live concert. The thrill of the crowd. The beats
            that stay with you long after the show ends. <b>CHORUS</b> is
            bringing that experience to life with exclusive artist-inspired
            merchandise that lets you carry the magic of music everywhere you
            go.
          </motion.p>
        </div>

        <div className="flex flex-col mx-auto justify-center items-center h-[70vh] md:h-[100vh]">
          <img
            src={Tshirt}
            alt=""
            className="absolute top-[0%] left-[-180px] w-[430px] invisible md:visible -rotate-[13deg]"
          />

          <motion.img
            initial={{ rotate: -180, opacity: 1, y: 0 }}
            whileInView={{ rotate: 180, opacity: 1, y: 0 }}
            transition={{ duration: 8, delay: 0, repeat: Infinity }}
            src={CD}
            alt=""
            className="absolute top-[50%] left-[0%] md:top-[40%] md:left-[-250px] w-[500px] invisible md:visible"
          />

          {/* poster */}
          <div
            className="absolute top-[40%] md:top-[22%] right-[180px] w-[300px] rotate-12 hover:scale-105
          transition-all duration-500 ease-in-out z-50"
          >
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="bg-black bg-opacity-45 w-[83%] left-6 top-[0px] h-[100%] absolute transition-all ease-in-out duration-100 flex justify-center items-center"
            >
              <p className="text-6xl text-white font-bravado">POSTERS</p>
            </motion.div>
            <img
              src={PersonHead}
              alt=""
              className="max-w-[200px] md:min-w-[98%]"
            />
          </div>

          {/* PostCrd */}
          <div
            className="absolute top-[24%]  md:top-[25%] right-[-30px] md:left-[170px] w-[230px] -rotate-[20deg] hover:scale-105
          transition-all duration-500 ease-in-out z-50"
          >
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="bg-black bg-opacity-45 w-[100%]  h-[100%] absolute transition-all ease-in-out duration-100 flex justify-center items-center"
            >
              <p className="text-4xl text-white font-bravado">POST CARDS</p>
            </motion.div>
            <img
              src={PostCard}
              alt=""
              className="max-w-[200px] md:min-w-[100%]"
            />
          </div>

          <motion.img
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut", delay: 0.2 }}
            src={chorus}
            alt=""
            className="md:w-[80%] w-full md:!rotate-0 !-rotate-90 min-w-[600px]"
          />
        </div>

        <div className="h-[80vh]">
          <iframe
            style={{ borderRadius: "12px" }}
            src="https://open.spotify.com/embed/playlist/25oVCofHAjPg8Uw0ZgIpRJ?utm_source=generator"
            width="90%"
            height="585"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            className="mx-auto"
          ></iframe>
        </div>
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: easeInOut, delay: 0.2 }}

          className='font-bravado text-[50px] md:text-[90px] lg:text-[120px] text-[#9e0101] text-center '>
          JOIN THE WAITLIST !
        </motion.h1>
        <div className="relative flex mx-auto h-0  xl:h-auto invisible  min-w-[600px] xl:visible">
          <img
            src={Glitch}
            alt=""
            className="absolute  h-[80%] 
          md:top-[8%] xl:top-[6%] left-[44%] translate-x-[-50%] translate-y-[-50% w-[45%] opacity-95"
          />

          {submitted ? (
            <div className="p-6 space-y-5 text-white absolute lg:top-[4%] xl:top-[15%] left-[44%] translate-x-[-50%] translate-y-[-50% w-[40%] z-40 font-Milker opacity-80  noise-container">
              ✅ Your response has been recorded. Thank you!
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className=" p-6 space-y-5 text-white absolute lg:top-[4%] xl:top-[15%] left-[44%] translate-x-[-50%] translate-y-[-50% w-[40%] z-40 font-Milker opacity-80  noise-container
          "
            >
              <div>
                <label className="block text-sm font-medium mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3 py-2'' border-gray-600 rounded-md !focus:outline-none  focus:ring-2 focus:ring-blue-500 text-sm border p-2"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3 py-2'' border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm border p-2"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  your favrioute artist and their songs ?
                </label>
                <textarea
                  name="artist"
                  value={formData.artist}
                  onChange={(e) => setFormData({ ...formData, artist: e.target.value })}
                  className="w-full px-3 py-2'' border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm h-24 border p-2"
                  placeholder="Enter your message"
                  required
                ></textarea>
              </div>

              {/* <button
              type="submit"
              className="w-full py-2 px-4 bg-black rounded-md transition-colors text-sm font-medium text-white
              
              noise-container "
            >
              Submit
            </button> */}
              <button className="group relative inline-block font-Milker text-lg self-center  w-full">
                <span className="relative z-10 block overflow-hidden rounded-lg  border-[#fefce8]px-5 py-2 font-medium leading-tight text-[#fefce8] transition-colors duration-300 ease-out group-hover:border-transparent group-hover:text-black">
                  <span className="absolute inset-0 h-full w-full rounded-lg bg-black px-5 py-2"></span>
                  <span className="ease absolute left-0 -ml-8 h-[200%] w-[110%] origin-top-right -translate-x-full translate-y-12 -rotate-90 bg-[#fefce8] transition-all duration-300 group-hover:-rotate-180"></span>
                  <span className="relative">Submit</span>
                </span>
                <span
                  className="absolute bottom-0 right-0 -mb-1 -mr-1 h-[2.5rem] w-full rounded-lg bg-[#fefce8] transition-all duration-200 ease-linear group-hover:mb-0 group-hover:mr-0 group-hover:bg-transparent"
                  data-rounded="rounded-lg"
                ></span>
              </button>
            </form>
          )}
          <img src={Tv} alt="" className="w-[60%] z-20 mx-auto" />
        </div>
        {/* Since LG */}
        <div className='flex  flex-col mx-auto rounded-lg justify-center w-[350px]  md:-mt-10 min-h-[55vh] visible  md:w-[600px] xl:hidden lg:!max-h-[0px] formBG '>
        {submitted ? (
            <div className="px-6 pt-6 space-y-5 text-white  z-40 font-Milker opacity-100  noise-container xl:max-h-0">
              ✅ Your response has been recorded. Thank you!
            </div>
          ) : (
          <form 
          onSubmit={handleSubmit}
          className=" px-6 pt-6 space-y-5 text-white  z-40 font-Milker opacity-100  noise-container xl:max-h-0
        ">

            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-3 py-2'' border-gray-600 rounded-md !focus:outline-none  focus:ring-2 focus:ring-blue-500 text-sm border p-2"
                placeholder="Enter your name"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-3 py-2'' border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm border p-2"
                placeholder="Enter your email"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                your favrioute artist and their songs ?
              </label>
              <textarea
                name="artist"
                value={formData.artist}
                onChange={(e) => setFormData({ ...formData, artist: e.target.value })}
                className="w-full px-3 py-2 border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm h-24 border p-2"
                placeholder="Enter your message"
                required
              ></textarea>
            </div>

            {/* <button
              type="submit"
              className="w-full py-2 px-4 bg-black rounded-md transition-colors text-sm font-medium text-white
              
              noise-container "
            >
              Submit
            </button> */}
            <button className="group relative inline-block font-Milker text-lg self-center  w-full">
              <span className="relative z-10 block overflow-hidden rounded-lg  border-[#fefce8]px-5 py-2 font-medium leading-tight text-[#fefce8] transition-colors duration-300 ease-out group-hover:border-transparent group-hover:text-black">
                <span className="absolute inset-0 h-full w-full rounded-lg bg-black px-5 py-2"></span>
                <span className="ease absolute left-0 -ml-8 h-[200%] w-[120%] origin-top-right -translate-x-full translate-y-12 -rotate-90 bg-[#fefce8] transition-all duration-300 group-hover:-rotate-180"></span>
                <span className="relative">Submit</span>
              </span>
              <span
                className="absolute bottom-0 right-0 -mb-1 -mr-1 h-[2.5rem] w-full rounded-lg bg-[#fefce8] transition-all duration-200 ease-linear group-hover:mb-0 group-hover:mr-0 group-hover:bg-transparent"
                data-rounded="rounded-lg"
              ></span>
            </button>
          </form>
          )}
          <div className="flex w-full justify-center items-center m-auto gap-3 mt-5 mb-4 min-h-[60px]">
            <IoShuffle size={32} className="mr-4" />
            <IoPlayBackSharp size={36} />
            {isPlaying ? (
              <MdPauseCircleFilled size={40} onClick={togglePlay} className="cursor-pointer" />
            ) : (
              <BsFillPlayCircleFill size={36} onClick={togglePlay} className="cursor-pointer" />
            )}
            <IoPlayForwardSharp size={36} />
            <TiArrowLoop size={32} className="ml-4" />
          </div>
        </div>
      </div>
    </div>
  );
}
