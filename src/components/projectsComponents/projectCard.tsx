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
import { Spinner } from "@/components/ui/spinner"
import { ChevronLeft, ChevronRight, Play, X } from "lucide-react"
import { Button } from "../ui/button"

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

function getProjectMedia(project: Pick<ProjectCardSlideProps, 'videoUrl' | 'images'>) {
  const imageMedia = project.images?.map((img) => ({ type: 'image' as const, url: img })) ?? []
  return project.videoUrl
    ? [
        {
          type: 'video' as const,
          url: project.videoUrl,
          native: isNativeVideoSource(project.videoUrl),
        },
        ...imageMedia,
      ]
    : imageMedia
}

function getMediaPreview(project: ProjectCardSlideProps) {
  const media = getProjectMedia(project)[0]
  if (!media) return null
  if (media.type === 'image') return media

  if (project.thumbnailUrl) {
    return {
      type: 'image' as const,
      url: project.thumbnailUrl,
    }
  }

  const [baseUrl, query] = media.url.split('?')
  const transform = project.thumbnailTime != null ? `so_${project.thumbnailTime}` : ''
  const transformedUrl = transform
    ? baseUrl.replace('/video/upload/', `/video/upload/${transform}/`)
    : baseUrl
  const previewUrl = `${transformedUrl}.jpg${query ? `?${query}` : ''}`

  return {
    type: 'image' as const,
    url: previewUrl,
  }
}

function LoadingOverlay() {
  return (
    <div className="absolute inset-0 z-20 flex items-center justify-center rounded-[2rem] bg-slate-950/80">
      <div className="flex flex-col items-center gap-2 rounded-2xl border border-white/10 bg-slate-900/90 px-4 py-3 text-sm text-slate-100 shadow-lg">
        <Spinner className="h-10 w-10 border-slate-500 border-t-white" />
        <span>Loading media…</span>
      </div>
    </div>
  )
}

function ProjectCardSlide(projectsdata: ProjectCardSlideProps) {
  const { isDarkMode } = useDarkMode();
  const media = getProjectMedia(projectsdata)
  const currentMedia = media[0]
  const previewMedia = getMediaPreview(projectsdata)

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
        {previewMedia ? (
          <img
            src={previewMedia.url}
            alt={projectsdata.title}
            loading="lazy"
            decoding="async"
            className="absolute top-0 left-0 h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-slate-700 text-slate-200">
            No media available
          </div>
        )}

        {media.length > 1 && (
          <div className="absolute right-3 top-3 rounded-full bg-black/70 px-3 py-1 text-xs font-semibold text-white shadow-sm">
            {media.length} slides
          </div>
        )}

        {currentMedia?.type === 'video' && (
          <div className="pointer-events-none absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0081b8] p-3 text-slate-900 shadow-lg">
            <Play size={24} fill="white" stroke="white"/>
          </div>
        )}

        {currentMedia?.type === 'image' && (
          <div className="absolute bottom-0 left-0 w-full bg-black/70 p-3 text-left text-sm text-slate-100 backdrop-blur-sm">
            <p className="mt-1 text-xs leading-5 text-slate-200">
              {projectsdata.description?.[0] ?? 'A short project image.'}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

interface CarouselCompProps {
  data: typeof projectsData
}

export function CarouselComp({ data }: CarouselCompProps) {
  const [dialogOpen, setDialogOpen] = useState(false)
  const [selectedProjectMedia, setSelectedProjectMedia] = useState<{
    type: 'video' | 'image'
    url: string
    native?: boolean
  }[] | null>(null)
  const [selectedMediaIndex, setSelectedMediaIndex] = useState(0)
  const [isMediaLoading, setIsMediaLoading] = useState(false)

  const openMedia = (
    media: { type: 'video' | 'image'; url: string; native?: boolean }[],
    index = 0
  ) => {
    setSelectedProjectMedia(media)
    setSelectedMediaIndex(index)
    setIsMediaLoading(true)
    setDialogOpen(true)
  }

  const showPrevious = () => {
    if (!selectedProjectMedia) return
    setIsMediaLoading(true)
    setSelectedMediaIndex((prev) => (prev - 1 + selectedProjectMedia.length) % selectedProjectMedia.length)
  }

  const showNext = () => {
    if (!selectedProjectMedia) return
    setIsMediaLoading(true)
    setSelectedMediaIndex((prev) => (prev + 1) % selectedProjectMedia.length)
  }

  const selectedMedia = selectedProjectMedia?.[selectedMediaIndex] ?? null

  const handleMediaLoad = () => {
    setIsMediaLoading(false)
  }

  return (
    <>
      <Carousel className="relative w-full">
        <CarouselPrevious />
        <CarouselContent>
          {data.map((project) => {
            const projectMedia = getProjectMedia(project)
            const firstMedia = projectMedia[0]

            return (
              <CarouselItem key={project.id} className="basis-[100%] sm:basis-[100%] md:basis-[40%] lg:basis-[24%] pl-1">
                <div className="p-1">
                  <ProjectCardSlide
                    {...project}
                    onClick={firstMedia ? () => openMedia(projectMedia, 0) : undefined}
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

            {isMediaLoading && <LoadingOverlay />}

            {selectedMedia?.type === 'video' ? (
              selectedMedia.native ? (
                <video
                  controls
                  muted
                  loop
                  onLoadedData={handleMediaLoad}
                  src={selectedMedia.url}
                  className="h-full w-full object-cover"
                />
              ) : (
                <iframe
                  width="100%"
                  height="100%"
                  onLoad={handleMediaLoad}
                  src={selectedMedia.url}
                  title="Project media"
                  frameBorder="0"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="h-full w-full object-cover"
                />
              )
            ) : selectedMedia ? (
              <img
                src={selectedMedia.url}
                alt="Project media"
                onLoad={handleMediaLoad}
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-slate-700 text-slate-200">
                No media available
              </div>
            )}
          </div>

          {selectedProjectMedia && selectedProjectMedia.length > 1 && (
            <div className="mt-3 flex items-center justify-between px-3 py-2">
              <Button
                type="button"
                onClick={showPrevious}
                className="cursor-pointer rounded-full bg-slate-900/90 px-3 py-2 text-white shadow transition hover:bg-slate-900"
                aria-label="Previous media"
              >
                <ChevronLeft size={18} />
              </Button>
              <div className="text-xs font-semibold text-slate-100">
                {selectedMediaIndex + 1}/{selectedProjectMedia.length}
              </div>
              <Button
                type="button"
                onClick={showNext}
                className="cursor-pointer rounded-full bg-slate-900/90 px-3 py-2 text-white shadow transition hover:bg-slate-900"
                aria-label="Next media"
              >
                <ChevronRight size={18} />
              </Button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}
