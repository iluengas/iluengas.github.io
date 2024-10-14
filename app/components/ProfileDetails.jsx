import { getImageUrl } from "../utils/imageHelper";

export default function ProfileDetails() {
  return (
    <section
      id="about"
      className="bg-black  w-full lg:h-2/6 flex items-center justify-center px-4 md:px-10 lg:px-40 "
      style={{
        background: `url(${getImageUrl(
          "cool-background.png"
        )}) no-repeat center center`,
        backgroundSize: "cover",
      }}
    >
      {/* Responsive layout: column to row format */}
      <div className="  w-full flex flex-col-reverse lg:flex-row items-center justify-center">
        <div className=" w-full lg:w-3/4 h-full pl-3">
          <h2 className="text-center lg:text-start text-4xl text-orange-400">
            Hello, I am Isaac.
          </h2>
          <h3 className="text-center lg:text-start text-4xl xl:text-7xl font-semibold w-full lg:w-full mt-4 ">
            Software Engineer
          </h3>
          <p className=" lg:w-full text-left text-base lg:text-start mt-10 font-medium">
            My skill set encompasses app development, computer vision, game
            development, UI design, and robotics. I have a proven track record
            as a highly effective software engineer and a successful leader of
            cross-functional development teams. I&apos;ve consistently delivered
            results, even in fast-paced environments with stringent deadlines.
          </p>
          <p className=" lg:w-full text-left text-base lg:text-start pt-5 font-medium">
            Outside of software, I have interests in:{" "}
            <span className="">astrophotography</span>,{" "}
            <span className="">weight training</span>,{" "}
            <span className="">gaming</span>,{" "}
            <span className="">tutoring math and physics</span>,{" and "}
            <span className="">drawing</span>!
          </p>
          <p className="pt-10 text-base text-start font-medium">
            From{" "}
            <span className="text-lg font-semibold text-yellow-200">
              Ventura
            </span>
            , CA, US
          </p>
        </div>
        <div
          className="blob"
          style={{ backgroundImage: `url(${getImageUrl("isaac.png")})` }}
        />
      </div>
    </section>
  );
}
