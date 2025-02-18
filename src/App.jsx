import Guitar from './assets/2.png'
import Tshirt from './assets/BlackShirt.png'
import { easeInOut } from 'framer-motion'
import { motion } from 'framer-motion'
import chorus from './assets/CHORUS.png'
import PersonHead from './assets/3.png'
import CD from './assets/11.png'
import PostCard from './assets/12.png'


export default function App() {
  return (
    <div className='customBG w-[100vw] relative overflow-x-hidden  p-[10px] md:p-[20px]'>
      <div className="mx-auto  bg-yellow-50 rounded-lg m-auto shadow-md shadow-gray-950 ">
        <img src={Guitar} alt="" className='absolute top-[-200px] rotate-[16deg] md:rotate-0 md:top-[-180px] right-[-50px] md:right-0 w-[400px] md:w-[400px] lg:w-[500px]' />
        <div className='flex flex-col mx-auto justify-center items-center h-[70vh] md:h-[90vh]'>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: easeInOut, delay: 0.1 }}

            className='oswald-400 text-xl md:text-2xl text-[#ec2252]'>Feel the Music. Wear the Moment.</motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: easeInOut, delay: 0.2 }}

            className='font-bravado text-[120px] md:text-[200px] text-[#3cb2d8] text-center -mb-10'>
            Chorus
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: easeInOut, delay: 0.3 }}


            className='oswald-400 text-xl md:text-3xl text-[#ec2252] pt-[-20px]'>COMING SOON</motion.p>
          <motion.p

            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: easeInOut, delay: 0.5 }}


            className='SpaceG w-[90%] md:w-[55%] pt-4 text-[14px] md:text-[18px] text-center'>The energy of a live concert. The thrill of the crowd. The beats that stay with you long after the show ends. <b>CHORUS</b> is bringing that experience to life with exclusive artist-inspired merchandise that
            lets you carry the magic of music everywhere you go.
          </motion.p>
        </div>

        <div className='flex flex-col mx-auto justify-center items-center h-[70vh] md:h-[100vh]'>
          <img src={Tshirt} alt="" className='absolute top-[0%] left-[-200px] w-[430px] invisible md:visible -rotate-[29deg]' />

          <motion.img

            initial={{ rotate: -180, opacity: 1, y: 0 }}
            whileInView={{ rotate: 180, opacity: 1, y: 0 }}
            transition={{ duration: 8, delay: 0, repeat: Infinity }}

            src={CD} alt="" className='absolute top-[50%] left-[0%] md:top-[40%] md:left-[-250px] w-[500px] invisible md:visible' />


          {/* poster */}
          <div className='absolute top-[40%] md:top-[26%] right-[180px] w-[300px] rotate-12 hover:scale-105
          transition-all duration-500 ease-in-out z-50'>
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="bg-black bg-opacity-45 w-[83%] left-6 top-[0px] h-[100%] absolute transition-all ease-in-out duration-100 flex justify-center items-center"
            >
              <p className="text-6xl text-white font-bravado">POSTERS</p>
            </motion.div>
            <img src={PersonHead} alt="" className='max-w-[200px] md:min-w-[98%]'/>


          </div>



          {/* PostCrd */}
          <div className='absolute top-[24%]  md:top-[30%] right-[-30px] md:left-[170px] w-[230px] -rotate-[20deg] hover:scale-105
          transition-all duration-500 ease-in-out z-50'>
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="bg-black bg-opacity-45 w-[100%]  h-[100%] absolute transition-all ease-in-out duration-100 flex justify-center items-center"
            >
              <p className="text-4xl text-white font-bravado">POST CARDS</p>
            </motion.div>
            <img src={PostCard} alt="" className='max-w-[200px] md:min-w-[100%]'/>


          </div>



            <motion.img
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut", delay: 0.2 }}
            src={chorus} alt=""
            className="md:w-[80%] w-full md:!rotate-0 !-rotate-90 min-w-[600px]"
          />

        </div >

        <div className='h-[100vh]'>
          <iframe
            style={{ borderRadius: '12px' }}
            src="https://open.spotify.com/embed/playlist/25oVCofHAjPg8Uw0ZgIpRJ?utm_source=generator"
            width="90%"
            height="585"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            className='mx-auto'
          ></iframe>
        </div>




      </div>
    </div>
  )
}