import { ProjectCard } from "@/components/projectsComponents/projectCard";
import { projectsData } from "@/data/projectSampleData";


export function Projects() {
    return(
        <div className="bg-[#faf7f5] min-h-screen flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold aboreto-regular text-[#323743] py-4 mt-25 sm:text-4xl md:text-6xl">
                    Projects
            </h1>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-6 md:p-8 justify-items-center">
                {projectsData.map((project) => (
                    <ProjectCard key={project.id} {...project} />
                ))}
            </div>
            
        </div>
    );
}