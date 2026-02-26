import React, { useEffect } from 'react'
import heroimg from '../assets/hero.webp';
import AOS from 'aos';
import 'aos/dist/aos.css'

function Hero() {

    useEffect(() => {
        AOS.init({
            duration: 800,
            delay: 200,
            once: false,

        })
    }, [],)

    return (
        <div id='hero' className='relative w-full lg:h-screen py-30 h-auto bg-center
        bg-cover z-20' style={{ backgroundImage: `url(${heroimg})` }}>

            {/*black overlay */}
            <div className='absolute inset-0 bg-black/40'></div>

            {/*content*/}
            <div className='w-full relative z-10 flex flex-col justify-center
items-center h-full gap-6 text-white px-6'>
                <h1 data-aos='zoom-in' data-aos-delay='100' className='text-6xl 
                capitalize text-center font-bold '>Explore Every Beautiful <br /> Destination</h1>
                <p data-aos='zoom-in' data-aos-delay='200' className='text-xl text-center lg:w-[50%]'>Explore the world’s most beautiful destinations with ease and confidence.
                    Plan, book, and experience unforgettable journeys all in one place.</p>

                <button data-aos='slide-up' data-aos-delay='300' className='bg-orange-600
          hover:bg-black hover:text-white px-8 py-3 font-semibold capitalize rounded
          mt-5 cursor-pointer'>Book Now</button>
            </div>
        </div>

    )
}
export default Hero;