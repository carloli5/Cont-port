import { projectsData } from "@/data/projectSampleData"
import { useState } from "react"
import { useDarkMode } from "@/hooks/useDarkMode"
import { cn } from "@/lib/utils"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Dialog, DialogClose, DialogContent } from "@/components/ui/dialog"
import { X } from "lucide-react"

function isNativeVideoSource(url: string) {
  try {
    const parsed = new URL(url)
    return /\.(mp4|webm|ogg)(?:$|\?)/i.test(parsed.pathname + parsed.search)
  } catch {
    return /\.(mp4|webm|ogg)(?:$|\?)/i.test(url)
  }
}


type ProjectCardSlideProps = typeof projectsData[0] & {
  onClick?: () => void
}

type MediaItem =
  | { type: 'image'; url: string }
  | { type: 'video'; url: string; native: boolean }

function ProjectCardSlide(projectsdata: ProjectCardSlideProps) {
  const { isDarkMode } = useDarkMode();
  const media = projectsdata.videoUrl
    ? [
        {
          type: 'video' as const,
          url: projectsdata.videoUrl,
          native: isNativeVideoSource(projectsdata.videoUrl),
        },
        ...projectsdata.images.map((img) => ({ type: 'image' as const, url: img })),
      ]
    : projectsdata.images.map((img) => ({ type: 'image' as const, url: img }))
  const currentMedia = media[0] as MediaItem

  return (
    <div
      onClick={projectsdata.onClick}
      className={cn(
        'relative mx-auto w-full max-w-[22rem] aspect-[9/16] overflow-hidden rounded-[2rem] border p-0 afacad-flux transition-all duration-300 hover:-translate-y-2 cursor-pointer',
        isDarkMode
          ? 'border-slate-800 bg-slate-950 text-slate-100 shadow-2xl shadow-slate-950/20'
          : 'border-slate-200 bg-white text-[#323743] shadow-lg'
      )}
    >
      <div className="relative h-full w-full overflow-hidden rounded-[2rem] bg-slate-900">
        {currentMedia.type === 'video' ? (
          currentMedia.native ? (
            <video
              controls
              autoPlay
              muted
              loop
              src={currentMedia.url}
              className="absolute top-0 left-0 h-full w-full object-cover"
            />
          ) : (
            <iframe
              width="100%"
              height="100%"
              src={currentMedia.url}
              title={projectsdata.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute top-0 left-0 h-full w-full object-cover"
            ></iframe>
          )
        ) : (
          <img
            src={currentMedia.url}
            alt={projectsdata.title}
            className="absolute top-0 left-0 h-full w-full object-cover"
          />
        )}
      </div>
    </div>
  )
}

export function CarouselComp() {
  const [dialogOpen, setDialogOpen] = useState(false)
  const [selectedMedia, setSelectedMedia] = useState<{
    type: 'video' | 'image'
    url: string
    native?: boolean
  } | null>(null)

  const openMedia = (media: { type: 'video' | 'image'; url: string; native?: boolean }) => {
    setSelectedMedia(media)
    setDialogOpen(true)
  }

  return (
    <>
      <Carousel className="relative w-full">
        <CarouselPrevious />
        <CarouselContent>
          {projectsData.map((project) => {
            const firstMedia = project.videoUrl
              ? {
                  type: 'video' as const,
                  url: project.videoUrl,
                  native: isNativeVideoSource(project.videoUrl),
                }
              : { type: 'image' as const, url: project.images[0] }

            return (
              <CarouselItem key={project.id} className="basis-[100%] sm:basis-[100%] md:basis-[40%] lg:basis-[24%] pl-1">
                <div className="p-1">
                  <ProjectCardSlide
                    {...project}
                    onClick={() => openMedia(firstMedia)}
                  />
                </div>
              </CarouselItem>
            )
          })}
        </CarouselContent>
        <CarouselNext />
      </Carousel>

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="max-w-[22rem] overflow-hidden p-0 bg-transparent shadow-none border-none">
          <div className="relative h-[calc(22rem*16/9)] w-[22rem] rounded-[2rem] overflow-hidden bg-black">
            <DialogClose className="absolute right-3 top-3 z-10 rounded-full border border-white/20 bg-white/90 p-2 text-slate-900 shadow-sm transition hover:bg-white">
              <X size={18} />
            </DialogClose>
            {selectedMedia?.type === 'video' ? (
              selectedMedia.native ? (
                <video
                  controls
                  autoPlay
                  muted
                  loop
                  src={selectedMedia.url}
                  className="h-full w-full object-cover"
                />
              ) : (
                <iframe
                  width="100%"
                  height="100%"
                  src={selectedMedia.url}
                  title="Project media"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="h-full w-full object-cover"
                />
              )
            ) : (
              <img
                src={selectedMedia?.url ?? ''}
                alt="Project media"
                className="h-full w-full object-cover"
              />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
