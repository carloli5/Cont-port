import { FaFacebook, FaTiktok, FaInstagram } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { useDarkMode } from '@/hooks/useDarkMode';
import { DarkModeSwitch } from '@/components/ui/dark-mode-switch';

const images = [
    //'mitsy-pic.jpg',
    'carl-pic.jpg'
];

// Inject glitch keyframes once
const GLITCH_STYLE_ID = 'glitch-keyframes';
if (typeof document !== 'undefined' && !document.getElementById(GLITCH_STYLE_ID)) {
    const style = document.createElement('style');
    style.id = GLITCH_STYLE_ID;
    style.textContent = `
        @keyframes glitch-clip {
            0%   { clip-path: inset(0 0 95% 0); transform: translate(-4px, 0); opacity: 1; }
            10%  { clip-path: inset(30% 0 50% 0); transform: translate(4px, 0); }
            20%  { clip-path: inset(60% 0 20% 0); transform: translate(-3px, 2px); }
            30%  { clip-path: inset(10% 0 80% 0); transform: translate(3px, -2px); }
            40%  { clip-path: inset(80% 0 5%  0); transform: translate(-4px, 0); }
            50%  { clip-path: inset(45% 0 45% 0); transform: translate(4px, 1px); }
            60%  { clip-path: inset(5%  0 85% 0); transform: translate(-2px, -1px); }
            70%  { clip-path: inset(70% 0 15% 0); transform: translate(2px, 2px); }
            80%  { clip-path: inset(20% 0 65% 0); transform: translate(-4px, 0); }
            90%  { clip-path: inset(55% 0 35% 0); transform: translate(4px, -1px); }
            100% { clip-path: inset(0 0 95% 0); transform: translate(0, 0); opacity: 0; }
        }
        @keyframes glitch-clip2 {
            0%   { clip-path: inset(50% 0 30% 0); transform: translate(4px, 0) scaleX(1.02); opacity: 1; }
            15%  { clip-path: inset(10% 0 70% 0); transform: translate(-4px, 1px) scaleX(0.98); }
            30%  { clip-path: inset(75% 0 10% 0); transform: translate(3px, -2px); }
            45%  { clip-path: inset(25% 0 55% 0); transform: translate(-3px, 2px) scaleX(1.01); }
            60%  { clip-path: inset(60% 0 20% 0); transform: translate(4px, 0); }
            75%  { clip-path: inset(5%  0 80% 0); transform: translate(-2px, -1px) scaleX(0.99); }
            90%  { clip-path: inset(40% 0 40% 0); transform: translate(2px, 1px); }
            100% { clip-path: inset(50% 0 30% 0); transform: translate(0, 0); opacity: 0; }
        }
        @keyframes rgb-shift {
            0%   { transform: translate(-2px, 0); opacity: 0.6; }
            25%  { transform: translate(2px, 1px); opacity: 0.4; }
            50%  { transform: translate(-1px, -1px); opacity: 0.5; }
            75%  { transform: translate(1px, 0); opacity: 0.3; }
            100% { transform: translate(0, 0); opacity: 0; }
        }
        .glitch-layer-1 {
            animation: glitch-clip 0.45s steps(1) forwards;
            mix-blend-mode: screen;
            filter: hue-rotate(90deg) saturate(3);
        }
        .glitch-layer-2 {
            animation: glitch-clip2 0.45s steps(1) forwards;
            mix-blend-mode: screen;
            filter: hue-rotate(200deg) saturate(3);
        }
        .glitch-rgb-r {
            animation: rgb-shift 0.45s steps(1) forwards;
            mix-blend-mode: screen;
            filter: saturate(5) hue-rotate(0deg);
            opacity: 0;
        }
        .glitch-rgb-b {
            animation: rgb-shift 0.45s steps(1) 0.05s forwards;
            mix-blend-mode: screen;
            filter: saturate(5) hue-rotate(240deg);
            opacity: 0;
        }
    `;
    document.head.appendChild(style);
}

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
                {/* Current image (base) */}
                <img
                    src={images[currentIndex]}
                    className="absolute inset-0 h-full w-full object-cover rounded-full"
                    alt="Carl Nataño"
                />

                {/* Next image revealed underneath glitch */}
                {nextIndex !== null && (
                    <img
                        src={images[nextIndex]}
                        className="absolute inset-0 h-full w-full object-cover rounded-full"
                        alt="Carl Nataño"
                        style={{ zIndex: 1 }}
                    />
                )}

                {/* Glitch layers — only active during transition */}
                {isGlitching && (
                    <>
                        {/* Layer 1: hue-shifted glitch slice */}
                        <img
                            src={images[currentIndex]}
                            className="absolute inset-0 h-full w-full object-cover rounded-full glitch-layer-1"
                            alt=""
                            aria-hidden="true"
                            style={{ zIndex: 2 }}
                        />
                        {/* Layer 2: second hue-shifted slice */}
                        <img
                            src={images[currentIndex]}
                            className="absolute inset-0 h-full w-full object-cover rounded-full glitch-layer-2"
                            alt=""
                            aria-hidden="true"
                            style={{ zIndex: 3 }}
                        />
                        {/* RGB red channel ghost */}
                        <img
                            src={images[currentIndex]}
                            className="absolute inset-0 h-full w-full object-cover rounded-full glitch-rgb-r"
                            alt=""
                            aria-hidden="true"
                            style={{ zIndex: 4 }}
                        />
                        {/* RGB blue channel ghost */}
                        <img
                            src={images[currentIndex]}
                            className="absolute inset-0 h-full w-full object-cover rounded-full glitch-rgb-b"
                            alt=""
                            aria-hidden="true"
                            style={{ zIndex: 4 }}
                        />
                    </>
                )}
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