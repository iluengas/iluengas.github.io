import ProgrammingSkills from "@/app/components/skills";

export default function TechDetails() {
  return (
    <section className="bg-black w-full border-gray-600 px-4 md:px-10 lg:px-40 py-10 lg:py-20 flex flex-col items-center justify-center">
      <h2 className="text-3xl text-center font-bold pb-6">My Tech Stack</h2>
      <p className="text-center text-lg text-gray-400 pb-8">
        Programming languages and technologies I am familiar with
      </p>
      <ProgrammingSkills />
    </section>
  );
}
