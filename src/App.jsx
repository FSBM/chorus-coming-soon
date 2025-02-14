import Guitar from './assets/gutr.png'
import Drums from './assets/Drums.png'
import { easeInOut } from 'framer-motion'
import { motion } from 'framer-motion'

export default function App() {
  return (
    <div className='customBG w-[100vw] relative'>
      <div className="mx-auto h-[200vh] bg-gray-50 rounded-lg m-auto shadow-md shadow-gray-950 ">
        <img src={Guitar} alt="" className='absolute top-[-150px] right-0 w-[500px]' />
        <div className='flex flex-col mx-auto justify-center items-center h-[100vh]'>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: easeInOut, delay: 0.1 }}

            className='oswald-400 text-2xl text-[#ec2252]'>Feel the Music. Wear the Moment.</motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: easeInOut, delay: 0.2 }}

            className='font-bravado text-[160px] text-[#3cb2d8]'>
            Chorus
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: easeInOut, delay: 0.3 }}


            className='oswald-400 text-3xl text-[#ec2252]'>COMING SOON</motion.p>
          <motion.p

            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: easeInOut, delay: 0.4 }}


            className='SpaceG w-[60%] pt-4 text-[18px] text-center'>The energy of a live concert. The thrill of the crowd. The beats that stay with you long after the show ends. <b>CHORUS</b> is bringing that experience to life with exclusive artist-inspired merchandise that lets you carry the magic of music everywhere you go.
          </motion.p>
        </div>

        <div className='flex flex-col mx-auto justify-center items-center h-[100vh]'>
          <img src={Drums} alt="" className='absolute top-[50%] left-[-100px] w-[400px]' />
        </div >



      </div>
    </div>
  )
}