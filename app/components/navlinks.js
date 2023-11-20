import React from 'react';
import Link from 'next/link';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { BiSolidDownload } from 'react-icons/bi';

function NavLinks({ resumeUrl, linkedinUrl, githubUrl }) {
  return (
    <div className="flex justify-center"> {/* Center the content */}
      <ul className="hidden sm:flex items-center text-center">
        <li className="m-3">
          <Link href="#about" className='rounded-lg pb-2 hover:text-orange-400 font-bold text-lg pt-1'>
            About
          </Link>
        </li>
        <li className="m-3">
          <a href="#projects" className='rounded-lg pb-2 hover:text-orange-400 font-bold text-lg'>
            Projects
          </a>
        </li>
        <li className="m-3">
          <Link href="#education" className='rounded-lg pb-2 hover:text-orange-400 font-bold text-lg'>
            Certificates
          </Link>
        </li>
        <li className='m-3'>
          <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="rounded-lg pb-2 hover:text-orange-400 mt-1" size="3rem" />
          </a>
        </li>
        <li className='m-3'>
          <a href={githubUrl} target="_blank" rel="noopener noreferrer">
            <FaGithub className="rounded-lg pb-2 hover:text-orange-400 mt-1" size="3rem" />
          </a>
        </li>
        <li className="">
          <a href={resumeUrl} className=" px-4 py-4 flex relative rounded-lg group text-white text-lg font-bold items-center space-x-1">
            <button className="bg-gray-300 hover:bg-orange-400 text-gray-800 font-bold py-2 px-2.5 rounded inline-flex items-center">
              <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" /></svg>
              <span>Resume</span>
            </button>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default NavLinks;
