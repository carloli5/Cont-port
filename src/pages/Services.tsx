import { Card, CardContent } from "@/components/ui/card";
import { FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa';
import { cn } from '@/lib/utils';
import { useDarkMode } from '@/hooks/useDarkMode';

export function Services() {
    const { isDarkMode } = useDarkMode();

    return (
        <div className={cn(
            'min-h-screen py-30 px-6 sm:px-10',
            isDarkMode ? 'bg-slate-950 text-slate-100' : 'bg-[#f2ebe5] text-[#323743]'
        )}>
            <div className="flex flex-col gap-10 h-full">
                <div className="flex flex-col md:flex-row min-h-[30rem] md:h-50 gap-5">
                    <div className="flex flex-grow-1 flex-col p-2 justify-center items-center">
                            <h1 className={cn(
                            'text-4xl font-bold aboreto-regular py-2 sm:text-4xl md:text-4xl',
                            isDarkMode ? 'text-[#FFFFFF]' : 'text-[#7d9995]'
                            )}>
                            Content Creator
                            </h1>
                            <h1 className={cn(
                            'text-4xl font-bold aboreto-regular py-2 sm:text-4xl md:text-8xl',
                            isDarkMode ? 'text-[#0081b8]' : 'text-[#7d9995]'
                            )}>
                            Summary
                            </h1>
                    </div>
                    <div className='flex flex-grow-1 flex-col gap-8 pb-10'>
                        <Card className={cn(
                            'justify-center w-full md:w-auto',
                            isDarkMode
                                ? 'bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950'
                                : 'bg-gradient-to-r from-[#f2ebe5] to-[#faf7f5]'
                        )} >
                            <CardContent className={cn(
                                'flex flex-col md:flex-row justify-end items-center',
                                isDarkMode ? 'bg-transparent' : ''
                            )}>
                                <img src="makeup-img.png" alt="Content Creation" className="h-40 w-40 py-2 sm:h-80 sm:w-80 md:h-120 md:w-120" />
                                
                            </CardContent>
                        </Card>
                        <p className={cn(
                                    'afacad-flux text-base max-w-3xl sm:text-base md:text-lg',
                                    isDarkMode ? 'text-slate-300' : 'text-[#323743]'
                                )}>
                                Makeup transition content is a central focus of mine, and I consistently follow current trends—especially the popular transformation style where I shift from a male to a female persona, which continues to resonate widely with audiences.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row gap-5 h-auto md:h-50">
                    <Card className={cn(
                        'flex-grow-1 justify-center w-full md:w-auto',
                        isDarkMode ? 'bg-slate-900' : 'bg-[#faf7f5]'
                    )}>
                        <CardContent className="flex flex-col md:flex-row justify-between items-center">
                            <span className={cn(
                                'flex flex-col items-center md:items-left justify-center text-2xl md:text-3xl pl-0 md:pl-6 afacad-flux font-1000',
                                isDarkMode ? 'text-slate-100' : 'text-[#323743]'
                            )}>
                                <p>
                                15k+ views | 88.6k likes
                                </p>
                            </span>
                            <FaTiktok
                                className={cn(
                                    'h-40 w-40 py-2 sm:h-80 sm:w-80 md:h-40 md:w-40',
                                    isDarkMode ? 'text-[#c7beb2]' : 'text-[#7d9995]'
                                )}
                                aria-label="TikTok icon"
                            />
                        </CardContent>
                    </Card>
                    <Card className={cn(
                        'flex-grow-1 justify-center w-full md:w-auto',
                        isDarkMode ? 'bg-slate-900' : 'bg-[#faf7f5]'
                    )}>
                        <CardContent className="flex flex-col md:flex-row justify-between items-center">
                            <span className={cn(
                                'flex flex-col items-center md:items-left justify-center text-2xl md:text-3xl pl-0 md:pl-6 afacad-flux font-1000',
                                isDarkMode ? 'text-slate-100' : 'text-[#323743]'
                            )}>
                                <p>
                                600+ followers | 50+ posts
                                </p>
                            </span>
                            <FaInstagram
                                className={cn(
                                    'h-40 w-40 py-2 sm:h-80 sm:w-80 md:h-40 md:w-40',
                                    isDarkMode ? 'text-[#c7beb2]' : 'text-[#7d9995]'
                                )}
                                aria-label="Instagram icon"
                            />
                        </CardContent>
                    </Card>
                    <Card className={cn(
                        'flex-grow-1 justify-center w-full md:w-auto',
                        isDarkMode ? 'bg-slate-900' : 'bg-[#faf7f5]'
                    )}>
                        <CardContent className="flex flex-col md:flex-row justify-between items-center">
                            <span className={cn(
                                'flex flex-col items-center md:items-left justify-center text-2xl md:text-3xl pl-0 md:pl-6 afacad-flux font-1000',
                                isDarkMode ? 'text-slate-100' : 'text-[#323743]'
                            )}>
                                <p>
                                1.5K followers | 59+ posts
                                </p>
                            </span>
                            <FaFacebook
                                className={cn(
                                    'h-40 w-40 py-2 sm:h-80 sm:w-80 md:h-40 md:w-40',
                                    isDarkMode ? 'text-[#c7beb2]' : 'text-[#7d9995]'
                                )}
                                aria-label="Facebook icon"
                            />
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}