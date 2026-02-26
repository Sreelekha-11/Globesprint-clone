import React, { useEffect } from 'react'
import service1 from '../assets/Service1.webp'
import service2 from '../assets/Service2.webp'
import service3 from '../assets/Service3.webp'
import service4 from '../assets/Service4.webp'
import service5 from '../assets/Service5.webp'
import service6 from '../assets/Service6.webp'
import AOS from 'aos';
import 'aos/dist/aos.css'
import { FaPlay } from 'react-icons/fa'

function Services() {

    useEffect(() => {
        AOS.init({
            duration: 800,
            delay: 200,
            once: false,
        })
    }, [],);

    return (
        <div id='services' className='w-full bg-gray-200 lg:px-22 px-5 lg:py-22 py-20
        flex flex-col justify-between lg:items-center items-left gap-5'>
            <h1 data-aos='zoom-in' data-aos-delay='100' className='lg:text-5xl text-3xl
            font-fakhwang font-semibold'>Discover your next dream destination</h1>
            <p data-aos='zoom-in' data-aos-delay='200' className='text-gray-500 lg:w-[60%]
            w-full lg:text-center text-left'>Discover your next dream destination and let every journey inspire you.
                From hidden gems to iconic landmarks, your perfect adventure starts here.</p>
            <hr data-aos='zoom-in' data-aos-delay='300'
                className="lg:w-[75%] w-[30%]  bg-orange-600 border-2"
            />

            {/*first row starts */}
            <div data-aos='zoom-in' data-aos-delay='400' id='first-row' className='w-full flex lg:flex-row
          flex-col justify-between items-center gap-5 mt-5'>

                {/* left starts */}
                <div id='left' className='lg:w-[50%] w-full flex lg:flex-row flex-col
            justify-betwwen items-center gap-5'>
                    <div style={{ backgroundImage: `url(${service1})` }} className='relative bg-cover bg-center
                w-full h-[350px] rounded-md p-8 flex justify-center items-end'>

                        {/*Gradient Overlay*/}
                        <div className='absolute rounded-md inset-0 bg-gradient-to-t from-black/60 via-black/40
                    to-white/10'></div>

                        {/*gradient ends*/}
                        <div className='relative z-10 w-full flex lg:flex-row flex-col
                      justify-between items-start lg:gap-1 gap-3'>
                            <div className='lg:w-[60%] w-full'>
                                <h1 className='text-white text-2xl font-semibold'>Padar Island</h1>
                                <p className='text-white text-lg'>Indonesia</p>
                            </div>

                            <div className='lg:w-[20%] lg-[20%] bg-white rounded-full flex justify-center items-center p-3'>
                                <FaPlay className='lg:text-2xl text-xl' />
                            </div>
                        </div>
                    </div>



                    <div style={{ backgroundImage: `url(${service2})` }} className='relative bg-cover bg-center
                w-full h-[350px] rounded-md p-8 flex justify-center items-end'>

                        {/*Gradient Overlay*/}
                        <div className='absolute rounded-md inset-0 bg-gradient-to-t from-black/60 via-black/40
                    to-white/10'></div>

                        {/*gradient ends*/}
                        <div className='relative z-10 w-full flex lg:flex-row flex-col
                      justify-between items-start lg:gap-1 gap-3'>
                            <div className='lg:w-[60%] w-full'>
                                <h1 className='text-white text-2xl font-semibold'>Eiffel Tower</h1>
                                <p className='text-white text-lg'>France</p>
                            </div>

                            <div className='lg:w-[20%] lg-[20%] bg-white rounded-full flex justify-center items-center p-3'>
                                <FaPlay className='lg:text-2xl text-xl' />
                            </div>
                        </div>
                    </div>
                </div>
                {/* left ends */}

                {/* right start */}
                <div id='right' className='lg:w-[50%] w-full'>
                    <div style={{ backgroundImage: `url(${service3})` }} className='relative
                        bg-cover bg-center w-full h-[350px] rounded-md p-8 flex justify-center items-end'>

                        {/*Gradient Overlay*/}
                        <div className='absolute rounded-md inset-0 bg-gradient-to-t from-black/60 via-black/40
                    to-white/10'></div>

                        {/*gradient ends*/}
                        <div className='relative z-10 w-full flex lg:flex-row flex-col
                      justify-between items-start lg:gap-1 gap-3'>
                            <div className='lg:w-[60%] w-full'>
                                <h1 className='text-white text-2xl font-semibold'>Great Wall of China</h1>
                                <p className='text-white text-lg'>China</p>
                            </div>

                            <div className='lg:w-[10%] lg-[20%] bg-white rounded-full flex justify-center items-center p-3'>
                                <FaPlay className='lg:text-2xl text-xl' />
                            </div>
                        </div>
                    </div>
                </div>
                {/* right ends */}


            </div>

            {/*first row ends */}


            {/* second row starts */}

            <div data-aos='zoom-in' data-aos-delay='400' id='first-row' className='w-full flex lg:flex-row-reverse
          flex-col justify-between items-center gap-5 mt-5'>

                {/* left starts */}
                <div id='left' className='lg:w-[50%] w-full flex lg:flex-row flex-col
            justify-betwwen items-center gap-5'>
                    <div style={{ backgroundImage: `url(${service4})` }} className='relative bg-cover bg-center
                w-full h-[350px] rounded-md p-8 flex justify-center items-end'>

                        {/*Gradient Overlay*/}
                        <div className='absolute rounded-md inset-0 bg-gradient-to-t from-black/60 via-black/40
                    to-white/10'></div>

                        {/*gradient ends*/}
                        <div className='relative z-10 w-full flex lg:flex-row flex-col
                      justify-between items-start lg:gap-1 gap-3'>
                            <div className='lg:w-[60%] w-full'>
                                <h1 className='text-white text-2xl font-semibold'>Maldives Beach Resort</h1>
                                <p className='text-white text-lg'>Maldives</p>
                            </div>

                            <div className='lg:w-[20%] lg-[20%] bg-white rounded-full flex justify-center items-center p-3'>
                                <FaPlay className='lg:text-2xl text-xl' />
                            </div>
                        </div>
                    </div>



                    <div style={{ backgroundImage: `url(${service5})` }} className='relative bg-cover bg-center
                w-full h-[350px] rounded-md p-8 flex justify-center items-end'>

                        {/*Gradient Overlay*/}
                        <div className='absolute rounded-md inset-0 bg-gradient-to-t from-black/60 via-black/40
                    to-white/10'></div>

                        {/*gradient ends*/}
                        <div className='relative z-10 w-full flex lg:flex-row flex-col
                      justify-between items-start lg:gap-1 gap-3'>
                            <div className='lg:w-[60%] w-full'>
                                <h1 className='text-white text-2xl font-semibold'>Singapore Skyline & Merlion</h1>
                                <p className='text-white text-lg'>Singapore</p>
                            </div>

                            <div className='lg:w-[20%] lg-[20%] bg-white rounded-full flex justify-center items-center p-3'>
                                <FaPlay className='lg:text-2xl text-xl' />
                            </div>
                        </div>
                    </div>
                </div>
                {/* left ends */}

                {/* right start */}
                <div id='right' className='lg:w-[50%] w-full'>
                    <div style={{ backgroundImage: `url(${service6})` }} className='relative
                        bg-cover bg-center w-full h-[350px] rounded-md p-8 flex justify-center items-end'>

                        {/*Gradient Overlay*/}
                        <div className='absolute rounded-md inset-0 bg-gradient-to-t from-black/60 via-black/40
                    to-white/10'></div>

                        {/*gradient ends*/}
                        <div className='relative z-10 w-full flex lg:flex-row flex-col
                      justify-between items-start lg:gap-1 gap-3'>
                            <div className='lg:w-[60%] w-full'>
                                <h1 className='text-white text-2xl font-semibold'>Nachi Pagoda</h1>
                                <p className='text-white text-lg'>Japan</p>
                            </div>

                            <div className='lg:w-[10%] lg-[20%] bg-white rounded-full flex justify-center items-center p-3'>
                                <FaPlay className='lg:text-2xl text-xl' />
                            </div>
                        </div>
                    </div>
                </div>
                {/* right ends */}


            </div>
            {/* second row ends */}
        </div>

    )
}

export default Services