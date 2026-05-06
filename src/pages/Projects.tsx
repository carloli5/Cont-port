import { CarouselComp } from "@/components/projectsComponents/projectCard";
import { imageProjectsData, projectsData } from "@/data/projectSampleData";
import { cn } from "@/lib/utils";
import { useDarkMode } from "@/hooks/useDarkMode";

export function Projects() {
    const { isDarkMode } = useDarkMode();

    return(
        <div className={cn(
            'min-h-screen flex flex-col items-center justify-center pb-10',
            isDarkMode ? 'bg-[#0f172a]' : 'bg-[#faf7f5]'
        )}>
            <h1 className={cn(
                'text-4xl font-bold aboreto-regular py-4 mt-25 sm:text-4xl md:text-6xl',
                isDarkMode ? 'text-slate-100' : 'text-[#323743]'
            )}>
                    Contents
            </h1>
            <div className="w-full px-8 md:px-8 sm:px-8 space-y-10">
                <section>
                    <CarouselComp data={imageProjectsData} />
                </section>
                <section>
                    <CarouselComp data={projectsData} />
                </section>
            </div>
        </div>
    );
}