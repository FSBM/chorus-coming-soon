import Guitar from './assets/gutr.png'
import Drums from './assets/Drums.png'
import { easeInOut } from 'framer-motion'
import { motion } from 'framer-motion'
import chorus from './assets/CHORUS.png'

export default function App() {
  return (
    <div className='customBG w-[100vw] relative overflow-x-hidden'>
      <div className="mx-auto  bg-yellow-50 rounded-lg m-auto shadow-md shadow-gray-950 ">
        <img src={Guitar} alt="" className='absolute top-[-120px] md:top-[-150px] right-[-50px] md:right-0 w-[400px] md:w-[400px] lg:w-[500px]' />
        <div className='flex flex-col mx-auto justify-center items-center h-[90vh]'>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: easeInOut, delay: 0.1 }}

            className='oswald-400 text-xl md:text-2xl text-[#ec2252]'>Feel the Music. Wear the Moment.</motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: easeInOut, delay: 0.2 }}

            className='font-bravado text-[120px] md:text-[160px] text-[#3cb2d8] text-center -mb-10'>
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
            transition={{ duration: 0.5, ease: easeInOut, delay: 0.4 }}


            className='SpaceG w-[90%] md:w-[60%] pt-4 text-[14px] md:text-[18px] text-center'>The energy of a live concert. The thrill of the crowd. The beats that stay with you long after the show ends. <b>CHORUS</b> is bringing that experience to life with exclusive artist-inspired merchandise that lets you carry the magic of music everywhere you go.
          </motion.p>
        </div>

        <div className='flex flex-col mx-auto justify-center items-center h-[100vh]'>
          <img src={Drums} alt="" className='absolute top-[10%] left-[-170px] w-[500px] invisible md:visible' />
          <img src={chorus} alt="" className=' md:w-[80%] md:rotate-0  -rotate-90 min-w-[800px]' />
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