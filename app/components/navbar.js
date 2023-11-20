'use client'

import { useState, useEffect } from 'react';
import { VscListSelection } from 'react-icons/vsc';
import MenuLinks from './menulinks';
import NavLinks from './navlinks';
import './animations/awesomeborder.css';

export default function NavBar() {
    const linkedinUrl = 'https://www.linkedin.com/in/isaac-luengas/';
    const githubUrl = 'https://github.com/iluengas';
    const resumeUrl =
        'https://docs.google.com/document/d/14_Mdcwy9AJhV4300og6cEAQMm6IFkugZ/edit?usp=sharing&ouid=112763967219151460665&rtpof=true&sd=true';

    const [isSmallScreen, setIsSmallScreen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleResize = () => {
        setIsSmallScreen(window.innerWidth < 768); // Adjust the breakpoint as needed
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        if (isMenuOpen) {
            // Prevent scrolling
            document.body.style.overflow = 'hidden';
        } else {
            // Allow scrolling
            document.body.style.overflow = 'auto';
        }
    }, [isMenuOpen]);

    return (
        <nav className=" py-2 mb-4 backdrop-blur-sm lg:backdrop-brightness-50 sticky top-0 z-10 h-14 md:h-24 flex px-4 md:px-10 lg:px-40">
            {isSmallScreen ? (
                <>
                    <div className=' w-1/2 h-full flex items-center justify-start text-xl'>
                        <img src="./isaac-logo.png" alt="isaacs logo" className='h-12 w-12 rounded-lg'/>
                    </div>
                    <div className='w-1/2 h-full flex items-center justify-end'>
                        <button onClick={toggleMenu}>
                            <VscListSelection size="2rem" className='text-white' />
                        </button>
                    </div>
                </>

            ) : (
                <>
                    <div className=' w-1/2 h-full flex items-center justify-start text-3xl font-bold text-gray-700'>
                        <img src="./isaac-logo.png" alt="isaacs logo" className='h-16 w-16 rounded-lg'/>
                    </div>
                    <div className='w-1/2 h-full flex items-center justify-end'>
                        <NavLinks
                            resumeUrl={resumeUrl}
                            linkedinUrl={linkedinUrl}
                            githubUrl={githubUrl}
                        />
                    </div>
                </>

            )}

            <MenuLinks
                isOpen={isMenuOpen}
                toggleMenu={toggleMenu}
                resumeUrl={resumeUrl}
                linkedinUrl={linkedinUrl}
                githubUrl={githubUrl}
            />
        </nav>
    );
}
