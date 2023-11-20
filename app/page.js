"use client"

// styling sheet files
import './styles.css'
import "./special-effects.css"
import "./components/animations/awesomeborder.css"

// components
import projects from './components/projects'
import Carousel from './components/carousel'
import { HiExternalLink } from "react-icons/hi"
import Skills from "./components/skills"

export default function Page() {
  const credentials_link = "https://registrar.ucmerced.edu/credential-validation";
  return (
    <div className='bg-black w-full flex flex-col justify-center items-center text-center relative overflow-y:scroll'>
      {/*section 1: intro and self protrait*/}
      <section className='bg-black  w-full lg:h-2/6 flex items-center justify-center px-4 md:px-10 lg:px-40 ' style={{ background: 'url("./cool-background.png") no-repeat center center', backgroundSize: 'cover' }}>
        {/* changes from column to row format based on screen size*/}
        <div className='  w-full flex flex-col-reverse lg:flex-row items-center justify-center'>
          <div className=' w-full lg:w-3/4 h-full pl-3'>
            <h2 className='text-center lg:text-start text-4xl text-orange-400'>
              Hello, I am Isaac.
            </h2>
            <h3 className='text-center lg:text-start text-4xl xl:text-7xl font-semibold w-full lg:w-full mt-4 '>
              Software Engineer
            </h3>
            <p className=" lg:w-full text-left text-base lg:text-start mt-10 font-medium">
              My skill set encompasses app development, computer vision, game development, UI design, and robotics.
              I have a proven track record as a highly effective software engineer and a successful leader of
              cross-functional development teams. I've consistently delivered results, even in fast-paced environments
              with stringent deadlines.
            </p>
            <p className=" lg:w-full text-left text-base lg:text-start pt-5 font-medium">
              Outside of software, I have interests in:{" "}
              <span className="">astrophotography</span>,{" "}
              <span className="">weight training</span>,{" "}
              <span className="">gaming</span>,{" "}
              <span className="">tutoring math and physics</span>,{" and "}
              <span className="">drawing</span>!
            </p>
            <p className='pt-10 text-base text-start font-medium'>
              From <span className="text-lg font-semibold text-yellow-200">Ventura</span>, CA, US
            </p>
          </div>
          <div className=' blob' />
        </div>
      </section>
      {/*section 2: portfolio*/}
      <section className='bg-black w-full border-gray-600 px-4 md:px-10 lg:px-40 py-10 lg:py-20 flex flex-col items-center justify-center'>
        <h2 className="text-3xl text-center font-bold pb-6">
          My Tech Stack
        </h2>
        <p className="text-center text-lg text-gray-400 pb-8">
          Programming languages and technologies I am familiar with
        </p>
        <Skills />
        <ul className="flex flex-wrap justify-center border">
        </ul>
      </section>
      <section id='projects' className='bg-black w-full pt-24 pb-10 px-4 md:px-10 lg:px-40'>
        <h2 className="text-3xl font-bold text-center">
          Projects.
        </h2>
        <p className="text-xl text-gray-400 text-center">
          Here are is a list of projects I have worked on
        </p>
        <div className='py-10'>
          <Carousel />
        </div>
      </section>
      <section id="education" className=' flex flex-col justify-center items-center w-full mt-44 bg-black py-10 px-4 md:px-10 lg:px-40'>
        <h2 className=' flex text-center justify-center text-4xl lg:text-3xl font-bold mb-2'>
          Education
        </h2>
        <div className=' flex flex-row-reverse md:w-4/5 rounded-xl bg-transparent py-10 lg:px-10 shadow-md md:shadow-none shadow-gray-500'>
          <div className=" w-full md:pl-12 flex flex-col items-center md:items-start">
            <h3 className=' flex text-center justify-center lg:justify-start text-2xl lg:text-2xl font-semibold text-white'>
              University of California, Merced
            </h3>
            <h4 className=' flex text-center justify-center lg:justify-start text-xl lg:text-xl font-semibold text-orange-400'>
              B.S. in Computer Science & Engineering
            </h4>
            <h4 className=' w-full mb-2 flex justify-center md:justify-start text-gray-300'>
              Credentials ID 23H8XCNNIHSBIS
            </h4>
            <a href={credentials_link} className='text-white border w-44 flex p-1 bg-black rounded-full justify-center items-center hover:bg-gray-800'>
              Show Credential
              <HiExternalLink className="text-white" style={{ fontSize: '27px' }} />
            </a>
            <h5 className='pt-4 flex justify-center lg:justify-start text-xl font-light'>
              Certificates
            </h5>
            <p className='flex justify-center lg:justify-start items-center lg:text-xl'>
              <span className='text-yellow-200 mr-1'>Chancellor's List</span>2023
            </p>
            <p className='flex justify-center lg:justify-start items-center lg:text-xl'>
              <span className='text-yellow-200 mr-1'>Deans List</span>2022 - 2023
            </p>
            <h5 className=' flex justify-center md:justify-start pt-4 text-xl font-light w-full'>
              Notable courses
            </h5>
            <ul className=' flex flex-wrap py-2 px-2 justify-center lg:justify-start'>
              <li className='mt-1 rounded-full bg-stone-950 shadow-sm shadow-stone-100 w-20 lg:w-28 h-20 lg:h-28 flex text-center justify-center items-center text-xs lg:text-base'>
                Software Engineering
              </li>
              <li className='mt-2 rounded-full bg-stone-950 shadow-sm shadow-stone-100 w-20 lg:w-28 h-20 lg:h-28 flex text-center justify-center items-center text-xs lg:text-base'>
                Data Bases
              </li>
              <li className='mt-2 rounded-full bg-stone-950 shadow-sm shadow-stone-100 w-20 lg:w-28 h-20 lg:h-28 flex text-center justify-center items-center text-xs lg:text-base'>
                OOP
              </li>
              <li className='mt-2 rounded-full bg-stone-950 shadow-sm shadow-stone-100 w-20 lg:w-28 h-20 lg:h-28 flex text-center justify-center items-center text-xs lg:text-base'>
                Algorithms
              </li>
              <li className='mt-2 rounded-full bg-stone-950 shadow-sm shadow-stone-100 w-20 lg:w-28 h-20 lg:h-28 flex text-center justify-center items-center text-xs lg:text-base'>
                Data Structures
              </li>
              <li className='mt-2 rounded-full bg-stone-950 shadow-sm shadow-stone-100 w-20 lg:w-28 h-20 lg:h-28 flex text-center justify-center items-center text-xs lg:text-base'>
                Computer Vision
              </li>
              <li className='mt-2 rounded-full bg-stone-950 shadow-sm shadow-stone-100 w-20 lg:w-28 h-20 lg:h-28 flex text-center justify-center items-center text-xs lg:text-base'>
                Robotics
              </li>
              <li className='mt-2 rounded-full bg-stone-950 shadow-sm shadow-stone-100 w-20 lg:w-28 h-20 lg:h-28 flex text-center justify-center items-center text-xs lg:text-base'>
                Artificial Intelligence
              </li>
            </ul>
          </div>

          <div className=' hidden w-1/3 md:flex flex-col justify-start items-center' >
            <div className='ucmercedblob' />
            <div className='ucmercedblob2' />
            {/* <img src="./ucmerced.jpg" style={{ width: '220px', height: '170px' }} className='mb-10' />
            <img src="./ucmerced2.jpeg" style={{ width: '220px', height: '170px' }} className='' /> */}

          </div>
        </div>

      </section>
    </div>
  )
}
