//import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import {projectsData} from "@/data/projectSampleData"
import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { FaHtml5, FaCss3, FaJava, FaReact } from "react-icons/fa"
import { BsTypescript, BsJavascript } from "react-icons/bs"
import { SiFirebase, SiThreedotjs, SiCanva  } from "react-icons/si"



const techIconMap: Record<string, React.ReactNode> = {
  html5: <FaHtml5 size={20} className="text-[#565d6d]" />,
  css3: <FaCss3 size={20} className="text-[#565d6d]" />,
  javascript: <BsJavascript size={20} className="text-[#565d6d]" />,
  java: <FaJava size={20} className="text-[#565d6d]" />,
  react: <FaReact size={20} className="text-[#565d6d]" />,
  firebase: <SiFirebase size={20} className="text-[#565d6d]" />,
  typescript: <BsTypescript size={20} className="text-[#565d6d]" />,
  threejs: <SiThreedotjs size={20} className="text-[#565d6d]" />,
  canva: <SiCanva size={20} className="text-[#565d6d]" />
}

export function ProjectCard(projectsdata: typeof projectsData[0]) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  
  const media = projectsdata.videoUrl 
    ? [{type: 'video', url: projectsdata.videoUrl}, ...projectsdata.images.map(img => ({type: 'image', url: img}))]
    : projectsdata.images.map(img => ({type: 'image', url: img}))
  
  const handlePrevious = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? media.length - 1 : prev - 1))
  }
  
  const handleNext = () => {
    setCurrentImageIndex((prev) => (prev === media.length - 1 ? 0 : prev + 1))
  }

  const currentMedia = media[currentImageIndex]

  return (
    <Card className="relative mx-auto w-full max-w-2xl pt-0 shadow-lg afacad-flux text-[#323743] transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 cursor-pointer">
      <div className="relative aspect-video group">
        {currentMedia.type === 'video' ? (
          <iframe
            width="100%"
            height="100%"
            src={currentMedia.url}
            title={projectsdata.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute top-0 left-0 rounded-t-lg md:rounded-t-lg"
          ></iframe>
        ) : (
          <img
            src={currentMedia.url}
            alt={projectsdata.title}
            className="relative z-20 aspect-video w-full object-cover rounded-t-lg md:rounded-t-lg"
          />
        )}
        <button
          onClick={handlePrevious}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-30 bg-black/50 hover:bg-black/70 text-white p-1 md:p-2 rounded-full opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity cursor-pointer"
        >
          <ChevronLeft size={20} className="md:w-6 md:h-6" />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-30 bg-black/50 hover:bg-black/70 text-white p-1 md:p-2 rounded-full opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity cursor-pointer"
        >
          <ChevronRight size={20} className="md:w-6 md:h-6" />
        </button>
      </div>
      <CardHeader>
        <CardTitle className="flex flex-col items-start justify-between px-2 sm:flex-col sm:items-start md:flex-row md:px-4 pb-4 text-lg md:text-lg">
          {projectsdata.title}
          <div className="flex gap-2 flex-wrap justify-start min-w-35 justify-end sm:justify-start md:justify-end pt-1">
            <TooltipProvider>
              {projectsdata.technologies?.map((tech) => (
                <Tooltip key={tech}>
                  <TooltipTrigger asChild>
                    <div className="flex items-center gap-1 cursor-help">
                      {projectsdata.customIcons?.[tech] ? (
                        <img 
                          src={projectsdata.customIcons[tech]} 
                          alt={tech}
                          className="w-4 md:w-5 h-4 md:h-5 object-contain"
                        />
                      ) : (
                        techIconMap[tech.toLowerCase()]
                      )}
                    </div>
                  </TooltipTrigger>
                  <TooltipContent side="bottom" className="bg-slate-900 text-white">
                    <span className="capitalize text-sm">{tech}</span>
                  </TooltipContent>
                </Tooltip>
              ))}
            </TooltipProvider>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="px-2 md:px-4 space-y-2 transition-opacity duration-300 text-sm md:text-base">
          <p>{projectsdata.description[currentImageIndex]}</p>
        </CardDescription>
      </CardContent>
      <CardFooter className="p-2 md:p-6">
        {projectsdata.id === 1 && (
          <Button className="w-full" onClick={() => window.open(projectsdata.projectUrl, '_blank')}>
            View Link
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}
