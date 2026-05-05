import { ChartBarDemoAxis } from "@/components/skillsComponents/graph";
import { cn } from "@/lib/utils";
import { useDarkMode } from "@/hooks/useDarkMode";

export function Skills() {
    const { isDarkMode } = useDarkMode();

    return(
        <div className={cn(
            'min-h-screen flex flex-col items-center justify-center px-4 md:px-0',
            isDarkMode ? 'bg-[#0f172a]' : 'bg-[#faf7f5]'
        )}>
            <ChartBarDemoAxis/>
        </div>
    );
}