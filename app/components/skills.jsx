import React from 'react'

const Skills = () => {
    return (
        <ul className="flex flex-wrap justify-center bg-transparent">
            <li className='rounded-lg border border-gray-300 w-24 h-28 lg:h-36 pt-5 bg-gray-900 flex flex-col items-center text-center m-1'>
                <img src="./python.png" alt="c++ icon" className='h-1/2' />
                <p className='pt-5 text-pink-100 font-semibold'>
                    Python
                </p>
            </li>
            <li className='rounded-lg border border-gray-300 w-24 h-28 lg:h-36 pt-5 bg-gray-900 flex flex-col items-center text-center m-1'>
                <img src="./c++.png" alt="c++ icon" className='h-1/2' />
                <p className='pt-5 text-pink-100 font-semibold'>
                    C++
                </p>
            </li>
            <li className='rounded-lg border border-gray-300 w-24 h-28 lg:h-36 pt-5 bg-gray-900 flex flex-col items-center text-center m-1'>
                <div className='javablob' />
                <p className='pt-5 text-green-50 font-semibold'>
                    Java
                </p>
            </li>
            <li className='rounded-lg border border-gray-300 w-24 h-28 lg:h-36 pt-5 bg-gray-900 flex flex-col items-center text-center m-1'>
                <img src="./javascript.png" alt="python icon" className='h-1/2' />
                <p className='pt-5 text-gray-200 font-semibold'>
                    JavaScript
                </p>
            </li>
            <li className='rounded-lg border border-gray-300 w-24 h-28 lg:h-36 pt-5 bg-gray-900 flex flex-col items-center text-center m-1'>
                <img src="./matlab.png" alt="python icon" className='h-1/2' />
                <p className='pt-5 text-cyan-300 font-semibold'>
                    Matlab
                </p>
            </li>
            <li className='rounded-lg border border-gray-300 w-24 h-28 lg:h-36 pt-5 bg-gray-900 flex flex-col items-center text-center m-1'>
                <img src="./c.png" alt="python icon" className='h-1/2' />
                <p className='pt-5 text-rose-100 font-semibold'>
                    C
                </p>
            </li>
            <li className='rounded-lg border border-gray-300 w-24 h-28 lg:h-36 pt-5 bg-gray-900 flex flex-col items-center text-center m-1'>
                <img src="./sql.png" alt="python icon" className='h-1/2' />
                <p className='pt-5 text-gray-300 font-semibold'>
                    SQL
                </p>
            </li>
            <li className='rounded-lg border border-gray-300 w-24 h-28 lg:h-36 pt-5 bg-gray-900 flex flex-col items-center text-center m-1'>
                <img src="./reactnative.png" alt="python icon" className='h-1/2' />
                <p className='pt-5 text-rose-100 font-semibold'>
                    React
                </p>
            </li>
            <li className='rounded-lg border border-slate-200 w-24 h-28 lg:h-36 pt-5 bg-gray-900 flex flex-col items-center text-center m-1'>
                <img src="./css.png" alt="python icon" className='h-1/2' />
                <p className='pt-5 text-slate-100 font-semibold'>
                    CSS
                </p>
            </li>
            <li className='rounded-lg border border-slate-200 w-24 h-28 lg:h-36 pt-5 bg-gray-900 flex flex-col items-center text-center m-1'>
                <img src="./nextjs.png" alt="python icon" className='h-1/2 text-white bg-white rounded-full' />
                <p className='pt-5 text-white font-semibold'>
                    Next.js
                </p>
            </li>
            <li className='rounded-lg border border-gray-200 w-24 h-28 lg:h-36 pt-5 bg-gray-900 flex flex-col items-center text-center m-1'>
                <img src="./reactnative.png" alt="python icon" className='h-1/2' />
                <p className='pt-3 text-gray-400 font-semibold text-sm lg:text-base'>
                    React Native
                </p>
            </li>
            <li className='rounded-lg border border-stone-200 w-24 h-28 lg:h-36 pt-5 bg-gray-900 flex flex-col items-center text-center m-1'>
                <img src="./html.png" alt="python icon" className='h-1/2' />
                <p className='pt-5 text-stone-100 font-semibold'>
                    HTML
                </p>
            </li>
        </ul>
    )
}

export default Skills