import { HiExternalLink } from "react-icons/hi";
import { getImageUrl } from "@/app/utils/imageHelper";

export default function EducationDetails({ link }) {
  return (
    <section className="flex flex-col justify-center items-center w-full mt-44 bg-black py-10 px-4 md:px-10 lg:px-40">
      <h2 className="text-white text-center text-4xl lg:text-3xl font-bold mb-2">
        Education
      </h2>
      <div className="flex flex-row-reverse md:w-4/5 rounded-xl bg-transparent py-10 lg:px-10 shadow-md md:shadow-none shadow-gray-500">
        <div className="w-full md:pl-12 flex flex-col items-center md:items-start">
          <h3 className="flex text-center justify-center lg:justify-start text-2xl lg:text-2xl font-semibold">
            University of California, Merced
          </h3>
          <h4 className="flex text-center justify-center lg:justify-start text-xl lg:text-xl font-semibold text-orange-400">
            B.S. in Computer Science & Engineering
          </h4>
          <h4 className="w-full mb-2 flex justify-center md:justify-start text-gray-300">
            Credentials ID 23H8XCNNIHSBIS
          </h4>
          <a
            href={link}
            className="border w-44 flex p-1 bg-black rounded-full justify-center items-center hover:bg-gray-800"
          >
            Show Credential
            <HiExternalLink
              className="text-white"
              style={{ fontSize: "27px" }}
            />
          </a>
          <h5 className="pt-4 flex justify-center lg:justify-start text-xl font-light">
            Certificates
          </h5>
          <p className="flex justify-center lg:justify-start items-center lg:text-xl">
            <span className="text-yellow-200 mr-1">Chancellor&apos;s List</span>{" "}
            2023
          </p>
          <p className="flex justify-center lg:justify-start items-center lg:text-xl">
            <span className="text-yellow-200 mr-1">Dean&apos;s List</span> 2022
            - 2023
          </p>
          <h5 className="flex justify-center md:justify-start pt-4 text-xl font-light w-full">
            Notable courses
          </h5>
          <ul className="flex flex-wrap py-2 px-2 justify-center lg:justify-start">
            {[
              "Software Engineering",
              "Databases",
              "OOP",
              "Algorithms",
              "Data Structures",
              "Computer Vision",
              "Robotics",
              "Artificial Intelligence",
            ].map((course) => (
              <li
                key={course}
                className="mt-2 rounded-full bg-stone-950 shadow-sm shadow-stone-100 w-20 lg:w-28 h-20 lg:h-28 flex text-center justify-center items-center text-xs lg:text-base"
              >
                {course}
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden w-1/3 md:flex flex-col justify-start items-center">
          <div
            className="ucmercedblob"
            style={{ backgroundImage: `url(${getImageUrl("ucmerced.jpg")})` }}
          />
          <div
            className="ucmercedblob2"
            style={{ backgroundImage: `url(${getImageUrl("ucmerced2.jpeg")})` }}
          />
        </div>
      </div>
    </section>
  );
}
