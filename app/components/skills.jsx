import React from "react";
import Image from "next/image";

export default function ProgrammingSkills() {
  return (
    <ul className="flex flex-wrap justify-center bg-transparent">
      <li className="rounded-lg border border-gray-300 w-24 h-28 lg:h-36 pt-5 bg-gray-900 flex flex-col items-center text-center m-1">
        <Image
          src="/images/python.png"
          alt="python icon"
          width={1678}
          height={1707}
          className="h-12 w-12"
        />
        <p className="pt-5 text-white font-semibold">Python</p>
      </li>
      <li className="rounded-lg border border-gray-300 w-24 h-28 lg:h-36 pt-5 bg-gray-900 flex flex-col items-center text-center m-1">
        <Image
          src="/images/c++.png"
          alt="c++ icon"
          width={1678}
          height={1707}
          className="h-12 w-12"
        />
        <p className="pt-5 text-white font-semibold">C++</p>
      </li>
      <li className="rounded-lg border border-gray-300 w-24 h-28 lg:h-36 pt-5 bg-gray-900 flex flex-col items-center text-center m-1">
        <div className="javablob" />
        <p className="pt-5 text-white font-semibold">Java</p>
      </li>
      <li className="rounded-lg border border-gray-300 w-24 h-28 lg:h-36 pt-5 bg-gray-900 flex flex-col items-center text-center m-1">
        <Image
          src="/images/javascript.png"
          alt="JavaScript icon"
          width={1678}
          height={1707}
          className="h-12 w-12"
        />
        <p className="pt-5 text-white font-semibold">JavaScript</p>
      </li>
      <li className="rounded-lg border border-gray-300 w-24 h-28 lg:h-36 pt-5 bg-gray-900 flex flex-col items-center text-center m-1">
        <Image
          src="/images/matlab.png"
          alt="python icon"
          width={1678}
          height={1707}
          className="h-12 w-12"
        />
        <p className="pt-5 text-white font-semibold">Matlab</p>
      </li>
      <li className="rounded-lg border border-gray-300 w-24 h-28 lg:h-36 pt-5 bg-gray-900 flex flex-col items-center text-center m-1">
        <Image
          src="/images/c.png"
          alt="c icon"
          width={1678}
          height={1707}
          className="h-12 w-12"
        />
        <p className="pt-5 text-white font-semibold">C</p>
      </li>
      <li className="rounded-lg border border-gray-300 w-24 h-28 lg:h-36 pt-5 bg-gray-900 flex flex-col items-center text-center m-1">
        <Image
          src="/images/sql.png"
          alt="SQL icon"
          width={1678}
          height={1707}
          className="h-12 w-12"
        />
        <p className="pt-5 text-white font-semibold">SQL</p>
      </li>
      <li className="rounded-lg border border-gray-300 w-24 h-28 lg:h-36 pt-5 bg-gray-900 flex flex-col items-center text-center m-1">
        <Image
          src="/images/reactnative.png"
          alt="React icon"
          width={1678}
          height={1707}
          className="h-12 w-12"
        />
        <p className="pt-5 text-white font-semibold">React</p>
      </li>
      <li className="rounded-lg border border-slate-200 w-24 h-28 lg:h-36 pt-5 bg-gray-900 flex flex-col items-center text-center m-1">
        <Image
          src="/images/css.png"
          alt="css icon"
          width={1678}
          height={1707}
          className="h-12 w-12"
        />
        <p className="pt-5 text-white font-semibold">CSS</p>
      </li>
      <li className="rounded-lg border border-slate-200 w-24 h-28 lg:h-36 pt-5 bg-gray-900 flex flex-col items-center text-center m-1">
        <Image
          src="/images/nextjs.png"
          alt="nextjs icon"
          width={1678}
          height={1707}
          className="h-12 w-12 text-white bg-white rounded-full"
        />
        <p className="pt-5 text-white font-semibold">Next.js</p>
      </li>
      <li className="rounded-lg border border-gray-200 w-24 h-28 lg:h-36 pt-5 bg-gray-900 flex flex-col items-center text-center m-1">
        <Image
          src="/images/reactnative.png"
          alt="react native icon"
          width={1678}
          height={1707}
          className="h-12 w-12"
        />
        <p className="pt-3 text-white font-semibold text-sm lg:text-base">
          React Native
        </p>
      </li>
      <li className="rounded-lg border border-stone-200 w-24 h-28 lg:h-36 pt-5 bg-gray-900 flex flex-col items-center text-center m-1">
        <Image
          src="/images/html.png"
          alt="html icon"
          width={1678}
          height={1707}
          className="h-12 w-12"
        />
        <p className="pt-5 text-white font-semibold">HTML</p>
      </li>
    </ul>
  );
};