import { Button } from "@/components/ui/button";

export function AboutMe() {
    const handleDownloadCV = () => {
        const link = document.createElement('a');
        link.href = '/Carl-Nataño-Resume-WD.pdf';
        link.download = 'Carl-Nataño-Resume-WD.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="bg-[#f2ebe5] min-h-screen flex flex-col items-center justify-center">
            <span className="text-center flex flex-col items-center gap-10">
                <h1 className="text-4xl font-bold aboreto-regular text-[#bd6d5d] sm:text-4xl md:text-6xl">
                    About Me
                </h1>
                <p className="afacad-flux text-[#323743] text-lg px-10 max-w-6xl sm:text-lg md:text-2xl sm:px-30">
                    An aspiring web developer and graphic designer who enjoys creating clean, visually appealing, and user-friendly digital
                     experiences. With a background in front-end development and graphic design, I focus on building engaging websites that
                      connect with users. My goal is to combine technical skills and creativity to turn ideas into meaningful digital 
                      solutions.
                </p>
                <Button className="p-5 afacad-flux text-md" onClick={handleDownloadCV}>
                    Download CV
                </Button>
            </span>
        </div>
    );
}