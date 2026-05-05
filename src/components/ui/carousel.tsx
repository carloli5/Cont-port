import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface CarouselProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

interface CarouselContextValue {
  contentRef: React.RefObject<HTMLDivElement | null>;
  scrollPrev: () => void;
  scrollNext: () => void;
}

const CarouselContext = React.createContext<CarouselContextValue | undefined>(undefined);

function useCarousel() {
  const context = React.useContext(CarouselContext);
  if (!context) {
    throw new Error("Carousel components must be used within a Carousel.");
  }
  return context;
}

export function Carousel({ className, children, ...props }: CarouselProps) {
  const contentRef = React.useRef<HTMLDivElement | null>(null);

  const scrollPrev = React.useCallback(() => {
    if (!contentRef.current) return;
    contentRef.current.scrollBy({ left: -contentRef.current.clientWidth, behavior: "smooth" });
  }, []);

  const scrollNext = React.useCallback(() => {
    if (!contentRef.current) return;
    contentRef.current.scrollBy({ left: contentRef.current.clientWidth, behavior: "smooth" });
  }, []);

  const value = React.useMemo(
    () => ({ contentRef, scrollPrev, scrollNext }),
    [scrollNext, scrollPrev]
  );

  return (
    <CarouselContext.Provider value={value}>
      <div className={cn("relative flex items-center gap-2", className)} {...props}>
        {children}
      </div>
    </CarouselContext.Provider>
  );
}

export function CarouselContent({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  const { contentRef } = useCarousel();

  return (
    <div
      ref={contentRef}
      className={cn(
        "flex-1 min-w-0 flex w-full gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory scroll-smooth py-4",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

type CarouselItemProps = React.HTMLAttributes<HTMLDivElement> & {
  index?: number;
};

export function CarouselItem({ className, children, ...props }: CarouselItemProps) {
  return (
    <div
      data-carousel-item
      className={cn("snap-start shrink-0", className)}
      {...props}
    >
      {children}
    </div>
  );
}

export function CarouselPrevious({ className, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const { scrollPrev } = useCarousel();

  return (
    <button
      type="button"
      onClick={scrollPrev}
      className={cn(
        "relative cursor-pointer flex-none rounded-full border border-slate-200 bg-white/90 p-2 text-slate-900 shadow-sm transition hover:bg-white dark:border-slate-700 dark:bg-slate-900/90 dark:text-slate-100",
        className
      )}
      aria-label="Previous"
      {...props}
    >
      <ChevronLeft size={18} />
    </button>
  );
}

export function CarouselNext({ className, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const { scrollNext } = useCarousel();

  return (
    <button
      type="button"
      onClick={scrollNext}
      className={cn(
        "relative cursor-pointer flex-none rounded-full border border-slate-200 bg-white/90 p-2 text-slate-900 shadow-sm transition hover:bg-white dark:border-slate-700 dark:bg-slate-900/90 dark:text-slate-100",
        className
      )}
      aria-label="Next"
      {...props}
    >
      <ChevronRight size={18} />
    </button>
  );
}
