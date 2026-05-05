import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useDarkMode } from "@/hooks/useDarkMode";

export function AboutMe() {
    const { isDarkMode } = useDarkMode();

    const handleDownloadCV = () => {
        const link = document.createElement('a');
        link.href = '/Carl-Nataño-Resume-WD.pdf';
        link.download = 'Carl-Nataño-Resume-WD.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className={cn(
            'min-h-screen flex flex-col items-center justify-center',
            isDarkMode ? 'bg-slate-950' : 'bg-[#f2ebe5]'
        )}>
            <span className="text-center flex flex-col items-center gap-10">
                <h1 className={cn(
                    'text-4xl font-bold aboreto-regular sm:text-4xl md:text-6xl',
                    isDarkMode ? 'text-[#0081b8]' : 'text-[#7d9995]'
                )}>
                    About Me
                </h1>
                <p className={cn(
                    'afacad-flux text-lg px-10 max-w-6xl sm:text-lg md:text-2xl sm:px-30',
                    isDarkMode ? 'text-slate-300' : 'text-[#323743]'
                )}>
                    An aspiring web developer and graphic designer who enjoys creating clean, visually appealing, and user-friendly digital
                     experiences. With a background in front-end development and graphic design, I focus on building engaging websites that
                      connect with users. My goal is to combine technical skills and creativity to turn ideas into meaningful digital 
                      solutions.
                </p>
                <Button className={cn(
                    'p-5 afacad-flux text-md',
                    isDarkMode ? 'bg-[#0081b8] text-white' : 'bg-[#7d9995] text-white'
                )} onClick={handleDownloadCV}>
                    Download CV
                </Button>
            </span>
        </div>
    );
}