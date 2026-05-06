import { FaFacebook, FaTiktok, FaInstagram } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { useDarkMode } from '@/hooks/useDarkMode';
import { DarkModeSwitch } from '@/components/ui/dark-mode-switch';
import { GlitchImage } from '@/components/ui/glitch-image';

const images = [
    'mitsy-pic.jpg',
    'carl-pic.jpg'
];

export function Introduction() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [nextIndex, setNextIndex] = useState<number | null>(null);
    const [isGlitching, setIsGlitching] = useState(false);
    const { isDarkMode, setIsDarkMode } = useDarkMode();
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    useEffect(() => {
        return () => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
        };
    }, []);

    return (
        <div className={cn(
            'min-h-screen flex flex-col md:flex-row items-center justify-center gap-10 p-6',
            isDarkMode ? 'bg-[#0f172a]' : 'bg-[#faf7f5]'
        )}>
            <div className={cn('flex flex-col items-center gap-4')}>
                {/* Image container with glitch effect */}
                <motion.div
                    className="relative h-60 w-60 sm:h-80 sm:w-80 md:h-120 md:w-120 rounded-lg overflow-hidden flex-shrink-0"
                    initial={{ opacity: 0, x: 140 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    <GlitchImage
                        images={images}
                        currentIndex={currentIndex}
                        nextIndex={nextIndex}
                        isGlitching={isGlitching}
                        alt="Carl Nataño"
                        className="absolute inset-0 h-full w-full"
                    />
                </motion.div>

                <DarkModeSwitch
                    checked={isDarkMode}
                    onCheckedChange={(checked) => {
                        if (timeoutRef.current) {
                            clearTimeout(timeoutRef.current);
                        }

                        const next = (currentIndex + 1) % images.length;
                        setNextIndex(next);
                        setIsGlitching(true);
                        setIsDarkMode(checked);

                        timeoutRef.current = window.setTimeout(() => {
                            setCurrentIndex(next);
                            setNextIndex(null);
                            setIsGlitching(false);
                        }, 500);
                    }}
                    className={cn(
                        isDarkMode
                            ? 'border-slate-700 bg-slate-900/80 text-slate-200'
                            : 'border-input bg-muted/50 text-slate-700'
                    )}
                />
            </div>

            <motion.div
                className={cn(
                    'flex flex-col items-center md:items-start text-center md:text-left',
                    isDarkMode ? 'text-white' : 'text-[#323743]'
                )}
                initial={{ opacity: 0, x: -140 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                <div className="flex flex-col text-5xl font-bold aboreto-regular mb-4 gap-2 sm:text-5xl md:text-8xl">
                    <span>Carl</span>
                    <span>Nataño</span>
                </div>
                <span className={cn(
                    'text-xl afacad-flux sm:text-xl md:text-3xl',
                    isDarkMode ? 'text-[#cbd5e1]' : 'text-[#565d6d]'
                )}>
                    Digital Content Creator | Cosplayer | Drag Artist
                </span>
                <span className='py-6 flex gap-4'>
                    <FaTiktok
                        size={32}
                        className={cn(
                            'cursor-pointer',
                            isDarkMode ? 'text-[#0081b8] hover:text-white' : 'text-[#7d9995] hover:text-[#323743]'
                        )}
                        onClick={() => window.open('https://www.tiktok.com/@mitsycunning?_r=1&_t=ZS-964mI9YVx2b', '_blank')}
                    />
                    <FaInstagram
                        size={32}
                        className={cn(
                            'cursor-pointer',
                            isDarkMode ? 'text-[#0081b8] hover:text-white' : 'text-[#7d9995] hover:text-[#323743]'
                        )}
                        onClick={() => window.open('https://www.instagram.com/mitsycunning?igsh=Ymw3bDU1bzY0eGZw', '_blank')}
                    />
                    <FaFacebook
                        size={32}
                        className={cn(
                            'cursor-pointer',
                            isDarkMode ? 'text-[#0081b8] hover:text-white' : 'text-[#7d9995] hover:text-[#323743]'
                        )}
                        onClick={() => window.open('https://www.facebook.com/profile.php?id=61551459497880', '_blank')}
                    />
                </span>
            </motion.div>
        </div>
    );
}