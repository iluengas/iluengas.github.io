import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles.css"
import { HiExternalLink } from "react-icons/hi";
import Link from 'next/link';
import Image from "next/image"


const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    };
    const mario_game_link = "https://github.com/iluengas/Unity-Plumberman";
    const tkinter_weather_app_link = "https://github.com/iluengas/weather_tkinter";
    return (
        <div className=' w-full flex justify-center items-center px-6'>
            <Slider {...settings} className=' w-full md:w-4/5'>
                <div className='slick-slide w-full'>
                    {/* This is the project card that contains project info and or links*/}
                    <div className='project-card border border-gray-900 md:border-none'>
                        <div className=" w-full md:w-96 h-32 md:h-full flex flex-col items-center md:justify-start md:mr-4 p-1">
                            <h2 className=' h-full md:h-max md:mb-10 text-sm md:text-lg'>Jan - May 2023 </h2>
                            <Image
                                src="/isaacluengas/Gallo.jpg"
                                alt="gallo"
                                width={1678}
                                height={1707}
                                className='h-24 w-24'
                            />
                        </div>
                        <div className=' w-full h-2/3 md:h-full md:flex md:flex-col md:justify-start'>
                            <div className=''>
                                <h2 className="text-md md:text-2xl font-medium md:mb-2 md:flex md:justify-start">
                                    Software Engineer
                                </h2>
                                <h3 className="text-md md:text-xl text-orange-400 font-medium md:mb-4 md:flex md:justify-start">
                                    E & J Gallo Winery
                                </h3>
                                <p className='text-sm md:text-xl font-light md:text-left text-gray-200'>
                                    I developed an iOS app for gear damage assessment
                                    using image processing technoloy opencv. The app aimed to prevent assembly line failures,
                                    costing the company $6000/ min by flagging faulty gears when wear is detected.
                                </p>
                                <p className='pt-1 text-sm md:text-xl font-light md:text-left text-gray-200'>
                                    My role was designing and implementing the SQLite database, creating gear
                                    flagging scripts in Python and devloping the app UI in React Native.
                                    I also ensured seamless intergration between the iOS app and the image prcessing server.
                                </p>
                            </div>
                            <div className=' m-1 w-full'>
                                <ul className='p-1 flex flex-wrap text-xs md:text-xl w-full'>
                                    <li className='flex justify-center items-center m-1 rounded-2xl bg-gray-900 w-max p-2 shadow-sm shadow-gray-100'>
                                        <Image
                                            src="/isaacluengas/reactnative.png"
                                            alt="react native"
                                            width={1678}
                                            height={1707}
                                            className='h-6 w-6 mr-1'
                                        />React Native
                                    </li>
                                    <li className='flex justify-center items-center m-1 rounded-2xl bg-gray-900 w-max p-2 shadow-sm shadow-gray-100'>
                                        <Image
                                            src="/isaacluengas/python.png"
                                            alt="python"
                                            width={1678}
                                            height={1707}
                                            className='h-6 w-6 mr-1'
                                        />Python
                                    </li>
                                    <li className=' flex justify-center items-center m-1 rounded-2xl bg-gray-900 w-max p-2 shadow-sm shadow-gray-100'>
                                        <Image
                                            src="/isaacluengas/sql.png"
                                            alt="sql"
                                            width={1678}
                                            height={1707}
                                            className='h-6 w-6 mr-1'
                                        />SQlite3
                                    </li>
                                    <li className=' flex justify-center items-center m-1 rounded-2xl bg-gray-900 w-max p-2 shadow-sm shadow-gray-100'>
                                        <Image
                                            src="/isaacluengas/python.png"
                                            alt="flask"
                                            width={1678}
                                            height={1707}
                                            className='h-6 w-6 mr-1'
                                        />Flask
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='slick-slide'>
                    {/* This is the project card that contains project info and or links*/}
                    <div className='project-card border border-gray-900 md:border-none'>
                        <div className=" w-full md:w-96 h-32 md:h-full flex flex-col items-center md:justify-start md:mr-4 p-1">
                            <h2 className=' h-full md:h-max md:mb-10 text-sm md:text-lg'>Jan - May 2023 </h2>
                            <Image
                                src="/isaacluengas/hand.png"
                                alt="isaac hand"
                                width={1678}
                                height={1707}
                                className='h-24 w-24'
                            />
                        </div>
                        <div className=' w-full h-2/3 md:h-full md:flex md:flex-col md:justify-start'>
                            <div className=''>
                                <h2 className="text-md md:text-2xl font-medium md:mb-2 md:flex md:justify-start">
                                    Software Engineer
                                </h2>
                                <div className=' flex items-center justify-center text-center md:justify-start mb-4'>
                                    <h3 className="text-md md:text-xl text-orange-400 font-medium flex justify-center md:justify-start">
                                        Computer Vision Super Mario
                                    </h3>
                                    <Link href={mario_game_link} className='ml-2 text-white hover:text-gray-300 text-xl flex items-center justify-center'>
                                        <HiExternalLink style={{ fontSize: '27px' }} />
                                    </Link>
                                </div>

                                <p className='text-sm md:text-xl font-light md:text-left text-gray-200'>
                                    I developed the first level in the super mario game in Unity. This was a school project
                                    where we needed to add some sort of machine learning or computer vision element our project.
                                    I chose to make a super mario game where you could control the player mario by simply using either
                                    hand gestures or finger count.
                                </p>
                                <p className='pt-1 text-sm md:text-xl font-light md:text-left text-gray-200'>
                                    The technoglies we used for the compter vision software was opencv and python. I created a script in
                                    python that mapped the users hand through a webcam. These mappings were sent over the unity game via a webscocket for
                                    constant hand scanning.
                                </p>
                            </div>
                            <div className=' m-1 w-full'>
                                <ul className='p-1 flex flex-wrap text-xs md:text-xl w-full'>
                                    <li className='flex justify-center items-center m-1 rounded-2xl bg-gray-900 w-max p-2 shadow-sm shadow-gray-100'>
                                        <Image
                                            src="/isaacluengas/csharp.png"
                                            alt="flask"
                                            width={1678}
                                            height={1707}
                                            className='h-6 w-6 mr-1'
                                        />C#
                                    </li>
                                    <li className='flex justify-center items-center m-1 rounded-2xl bg-gray-900 w-max p-2 shadow-sm shadow-gray-100'>
                                        <Image
                                            src="/isaacluengas/python.png"
                                            alt="python"
                                            width={1678}
                                            height={1707}
                                            className='h-6 w-6 mr-1'
                                        />Python
                                    </li>
                                    <li className=' flex justify-center items-center m-1 rounded-2xl bg-gray-900 w-max p-2 shadow-sm shadow-gray-100'>
                                        <Image
                                            src="/isaacluengas/unity.png"
                                            alt="unity"
                                            width={1678}
                                            height={1707}
                                            className='h-6 w-6 mr-1'
                                        />Unity
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='slick-slide'>
                    {/* This is the project card that contains project info and or links*/}
                    <div className='project-card border border-gray-900 md:border-none'>
                        <div className=" w-full md:w-96 h-32 md:h-full flex flex-col items-center md:justify-start md:mr-4 p-1">
                            <h2 className=' h-full md:h-max md:mb-10 text-sm md:text-lg'>Jan - May 2023 </h2>
                            <Image
                                src="/isaacluengas/weatherapp.png"
                                alt="weather app"
                                width={1678}
                                height={1707}
                                className='h-24 w-24'
                            />
                        </div>
                        <div className=' w-full h-2/3 md:h-full md:flex md:flex-col md:justify-start'>
                            <div className=''>
                                <h2 className="text-md md:text-2xl font-medium md:mb-2 md:flex md:justify-start">
                                    Software Engineer
                                </h2>
                                <div className=' flex items-center text-center justify-center md:justify-start mb-4'>
                                    <h3 className="text-md md:text-xl text-orange-400 font-medium flex justify-center md:justify-start">
                                        Python Weather App
                                    </h3>
                                    <Link href={tkinter_weather_app_link} className='ml-2 text-white hover:text-gray-300 text-xl flex items-center justify-center'>
                                        <HiExternalLink style={{ fontSize: '27px' }} />
                                    </Link>
                                </div>
                                <p className='text-sm md:text-xl font-light md:text-left text-gray-200'>
                                    Exploring the power of python&apos;s libary tkinter, I decided to recreate a real time
                                    weather aplication I made at University.
                                </p>
                                <p className='pt-1 text-sm md:text-xl font-light md:text-left text-gray-200'>
                                    The application employs object-oriented programming principles and interfaces with
                                    the OpenWeatherMap API to retrieve weather data. City name validation is executed
                                    through a dedicated script, ensuring accuracy.
                                </p>
                            </div>
                            <div className=' m-1 w-full'>
                                <ul className='p-1 flex flex-wrap text-xs md:text-xl w-full'>
                                    <li className='flex justify-center items-center m-1 rounded-2xl bg-gray-900 w-max p-2 shadow-sm shadow-gray-100'>
                                        <Image
                                            src="/isaacluengas/python.png"
                                            alt="tkinter"
                                            width={1678}
                                            height={1707}
                                            className='h-6 w-6 mr-1'
                                        />Tkinter
                                    </li>
                                    <li className='flex justify-center items-center m-1 rounded-2xl bg-gray-900 w-max p-2 shadow-sm shadow-gray-100'>
                                        <Image
                                            src="/isaacluengas/python.png"
                                            alt="python"
                                            width={1678}
                                            height={1707}
                                            className='h-6 w-6 mr-1'
                                        />Python
                                    </li>
                                    <li className=' flex justify-center items-center m-1 rounded-2xl bg-gray-900 w-max p-2 shadow-sm shadow-gray-100'>
                                        <Image
                                            src="/isaacluengas/api.png"
                                            alt="api"
                                            width={1678}
                                            height={1707}
                                            className='h-6 w-6 mr-1'
                                        />API&apos;s
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </Slider>
        </div>
    );
};

export default Carousel;
