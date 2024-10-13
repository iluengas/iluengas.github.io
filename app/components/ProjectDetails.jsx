import Carousel from "@/app/components/carousel";

export default function ProjectDetails() {
  return (
    <section
      id="projects"
      className="bg-black w-full pt-24 pb-10 px-4 md:px-10 lg:px-40"
    >
      <h2 className="text-3xl font-bold text-center">Projects.</h2>
      <p className="text-xl text-gray-400 text-center">
        Here are is a list of projects I have worked on
      </p>
      <div className="py-10">
        <Carousel />
      </div>
    </section>
  );
}
