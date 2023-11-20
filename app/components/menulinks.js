import React from 'react'

//menu icons
import { VscChromeClose } from 'react-icons/vsc';
import { PiCertificateFill } from "react-icons/pi";
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { AiFillCode } from 'react-icons/ai'
import { FcDocument } from 'react-icons/fc'
import { FaHome } from "react-icons/fa";

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
      <li className="text-white w-full pt-12 px-4">
          <Link href="#about" className="hover:text-orange-400" onClick={toggleMenu}>
            <div className="flex flex-row items-center dark:bg-black w-full px-4 py-4 rounded-t-lg text-xl border-b border-b-slate-800">
              <div className='flex flex-row items-center space-x-4'>
                <FaHome size="2rem" className='text-orange-500' />
                <p>About Page</p>
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
                <PiCertificateFill size="2rem" className='text-yellow-400 ' />
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
