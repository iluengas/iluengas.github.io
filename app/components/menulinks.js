import React from 'react'
import { VscChromeClose } from 'react-icons/vsc';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { AiFillCode } from 'react-icons/ai'
import { BiSolidContact } from 'react-icons/bi'
import { FcDocument } from 'react-icons/fc'
import Link from 'next/link'
import Image from "next/image"

function MenuLinks({ isOpen, toggleMenu, resumeUrl, linkedinUrl, githubUrl }) {
  if (!isOpen) {
    return null; // Don't render anything if the menu is not open
  }

  return (
    <div className=" fixed inset-0 flex bg-black bg-opacity-99" style={{ zIndex: 1 }}>
      <div className="absolute top-0 right-0 m-2">
        <button onClick={toggleMenu}>
          <VscChromeClose size="2rem" className='hover:text-orange-400' />
        </button>
      </div>
      <ul className=" mt-14 h-screen flex flex-col bg-black items-center bg-r py-12 w-full font-semibold text-2xl" style={{ zIndex: 2 }}>
        <li className="text-white w-full pt-2 px-4">
          <Link href="../" className="hover:text-orange-400" onClick={toggleMenu}>
            <div className='flex flex-row items-center dark:bg-black w-full px-4 py-4 rounded-lg border-b border-b-slate-800 '>
              {/* Image Container */}
              <div className='h-full flex items-center justify-start text-2xl'>
                <div className="rounded-full h-14 w-14 overflow-hidden mr-3">
                  <Image
                    src="/isaac-portrait-2.jpg"
                    alt="Isaac"
                    width={1678}
                    height={1707}
                    className="object-cover h-full w-full"
                    style={{ objectPosition: '25% 75%' }}
                  />
                </div>
              </div>
              <div>
                <p>Isaac Luengas</p>
                <p className='text-base font-medium text-white'>About Page</p>
              </div>
            </div>
          </Link>
        </li>
        <li className="text-white w-full pt-12 px-4">
          <Link href="#projects" className="hover:text-orange-400" onClick={toggleMenu}>
            <div className="flex flex-row items-center dark:bg-black w-full px-4 py-4 rounded-t-lg text-xl border-b border-b-slate-800">
              <div className='flex flex-row items-center space-x-4'>
                <AiFillCode size="2rem" className='text-green-500' />
                <p>Projects</p>
              </div>
            </div>
          </Link>
        </li>
        <li className="text-white w-full px-4">
          <Link href="#education" className="hover:text-orange-400" onClick={toggleMenu}>
            <div className="flex flex-row items-center dark:bg-black w-full px-4 py-4 rounded-t-lg text-xl border-b border-b-slate-800">
              <div className='flex flex-row items-center space-x-4'>
                <BiSolidContact size="2rem" className='text-red-500' />
                <p>Certificates</p>
              </div>
            </div>
          </Link>
        </li>
        <li className="text-white w-full px-4">
          <a href={resumeUrl} target="_blank" rel="noopener noreferrer">
            <div className="flex hover:text-orange-400 items-center dark:bg-black w-full px-4 py-4 text-xl border-b border-b-slate-800">
              <div className='flex flex-row items-center space-x-4'>
                <FcDocument size="2rem" className='text-blue-500' />
                <p>Resume</p>
              </div>
            </div>
          </a>
        </li>
        <li className="text-white w-full px-4">
          <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
            <div className="flex hover:text-orange-400 items-center dark:bg-black w-full px-4 py-4 text-xl border-b border-b-slate-800">
              <div className='flex flex-row items-center space-x-4'>
                <FaLinkedin size="2rem" className='text-blue-500 bg-white' />
                <p>LinkedIn</p>
              </div>
            </div>
          </a>
        </li>
        <li className="text-white w-full px-4">
          <a href={githubUrl} target="_blank" rel="noopener noreferrer">
            <div className='flex flex-row hover:text-orange-400 items-center dark:bg-black w-full px-4 py-4 rounded-t-lg text-xl border-b border-b-slate-800'>
              <div className='flex flex-row items-center space-x-4'>
                <FaGithub size="2rem" className='text-white' />
                <p>Github</p>
              </div>
            </div>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default MenuLinks;
