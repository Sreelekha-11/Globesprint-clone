import React, { useEffect } from 'react'
import aboutimg1 from '../assets/about1.webp'
import aboutimg2 from '../assets/about2.webp'
import { FaGlobeAmericas } from 'react-icons/fa'
import { IoIosPricetag } from 'react-icons/io'
import AOS from 'aos';
import 'aos/dist/aos.css'

function About() {

    useEffect(() => {
        AOS.init({
            duration: 800,
            delay: 200,
            once: false,
        })
    }, [],);

    return (
        <div id='about' className='flex lg:flex-row flex-col justify-betwee items-center
        gap-15 lg:px-22 px-5 lg:py-22 p-20'>
            <div className='flex flex-col justify-center items-center'>
                <img data-aos='zoom-in' data-aos-delay='100' src={aboutimg1}
                    className='rounded-md' alt='' />
                <img data-aos='zoom-in' data-aos-delay='200' src={aboutimg2}
                    className='rounded-md w-[40%] border-10 border-white -mt-[150px]
                -ml-[30px] -rotate-2' alt='' />
            </div>

            <div className='flex flex-col gap-5'>
                <h1 data-aos='zoom-in' data-aos-delay='300' className='text-md text-gray-600'>About Us</h1>
                <h1 data-aos='zoom-in' data-aos-delay='400' className='lg:text-4xl text-3xl
                font-semibold font-fakhwang'>Embark on a hilarious journey with our travel experts.</h1>

                <p data-aos='zoom-in' data-aos-delay='500' className='text-gray-700 font-semibold'>We are passionate travelers dedicated to helping you explore the world with ease and confidence.
                </p>

                <p data-aos='zoom-in' data-aos-delay='500' className='text-gray-500'>We believe travel is more than just visiting places — it’s about creating lifelong memories.
                    Our team works to bring you the best destinations, stays, and travel experiences.
                    Let us help you turn your dream journeys into reality.</p>
                <hr className='w-full border-t border-gray-300' />

                <div data-aos='zoom-in' data-aos-delay='600' id='iconbox' className='w-full grid
            lg:grid-cols-2 grid-cols-1 justify-between items-center lg:gap-5 gap-10'>
                    <div id='left' className='flex lg:flex-row flex-col justify-between lg:items-center
                items-start gap-4'>
                        <div id='icon' className='w-[20%] flex justify-center items-center
                    bg-orange-600 hover:bg-black cursor-pointer p-4 rounded-md'>
                            <FaGlobeAmericas className='text-3xl text-white' />
                        </div>

                        <div className='w-[80%] flex flex-col justify-center items-start gap-1'>
                            <h1 className='text-black text-xl font-medium'>Best Destination</h1>
                            <p className='text-sm text-gray-500'>Explore the extraordinary</p>
                        </div>
                    </div>

                    <div id='right' className='flex lg:flex-row flex-col justify-between lg:items-center
                items-start gap-4'>
                        <div id='icon' className='w-[20%] flex justify-center items-center
                    bg-orange-600 hover:bg-black cursor-pointer p-4 rounded-md'>
                            <IoIosPricetag className='text-3xl text-white' />
                        </div>

                        <div className='w-[80%] flex flex-col justify-center items-start gap-1'>
                            <h1 className='text-black text-xl font-medium'>Affordable Prices</h1>
                            <p className='text-sm text-gray-500'>Explore the extraordinary</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About; 