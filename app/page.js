
// styling sheet files
import "@/app/components/styles.css";
import "@/app/special-effects.css";
import "@/app/components/animations/awesomeborder.css";

// components
import ProfileDetails from "@/app/components/ProfileDetails";
import ProjectDetails from "@/app/components/ProjectDetails";
import EducationDetails from "@/app/components/EducationDetails";
import TechDetails from "@/app/components/TechDetails";

export default function Page() {
  const credentials_link =
    "https://registrar.ucmerced.edu/credential-validation";
  return (
    <div className="bg-black w-full flex flex-col text-white justify-center items-center text-center relative overflow-y:auto">
      {/*section 1: intro and self protrait*/}
      <ProfileDetails />

      {/*section 2: Tech Stack Details*/}
      <TechDetails />

      {/*section 3: Projects*/}
      <ProjectDetails />

      {/* Section 4: Education */}
      <EducationDetails link={credentials_link} />
    </div>
  );
}
