import { Card, CardContent } from "@/components/ui/card";
import { FaTiktok } from 'react-icons/fa';
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
                    <div className="flex flex-grow-1 p-2">
                        <div className="flex h-full flex-col justify-center gap-10">
                            <h1 className={cn(
                            'text-4xl font-bold aboreto-regular py-2 sm:text-4xl md:text-6xl',
                            isDarkMode ? 'text-[#0081b8]' : 'text-[#7d9995]'
                            )}>
                            Summary
                            </h1>
                            <p className={cn(
                                'afacad-flux text-base max-w-3xl sm:text-base md:text-lg',
                                isDarkMode ? 'text-slate-300' : 'text-[#323743]'
                            )}>
                            Makeup transition content is a central focus of mine, and I consistently follow current trends—especially the popular transformation style where I shift from a male to a female persona, which continues to resonate widely with audiences.
                            </p>
                        </div>
                    </div>
                    <div className='flex flex-grow-1 flex-col gap-8 pb-10'>
                        <Card className={cn(
                            'justify-center w-full md:w-auto',
                            isDarkMode
                                ? 'bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border border-slate-800'
                                : 'bg-gradient-to-r from-[#f2ebe5] to-[#faf7f5]'
                        )} >
                            <CardContent className={cn(
                                'flex flex-col md:flex-row justify-between items-center',
                                isDarkMode ? 'bg-transparent' : ''
                            )}>
                                <span className={cn(
                                    'flex flex-col items-center md:items-left justify-center text-2xl md:text-4xl pl-0 md:pl-6 afacad-flux font-1000',
                                    isDarkMode ? 'text-slate-100' : 'text-[#323743]'
                                )}>
                                    <p>
                                    UI/UX Design
                                    </p>
                                </span>
                                <FaTiktok
                                    className={cn(
                                        'h-60 w-60 sm:h-80 sm:w-80 md:h-100 md:w-100',
                                        isDarkMode ? 'text-[#7dd3fc]' : 'text-[#7d9995]'
                                    )}
                                    aria-label="TikTok icon"
                                />
                                
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
                        isDarkMode ? 'bg-slate-950 border border-slate-700' : 'bg-[#faf7f5]'
                    )}>
                        <CardContent className="flex flex-col md:flex-row justify-between items-center">
                            <span className={cn(
                                'flex flex-col items-center md:items-left justify-center text-2xl md:text-4xl pl-0 md:pl-6 afacad-flux font-1000',
                                isDarkMode ? 'text-slate-100' : 'text-[#323743]'
                            )}>
                                <p>
                                Front - end
                                </p>
                                <p>
                                Development
                                </p>
                            </span>
                            <FaTiktok
                                className={cn(
                                    'h-60 w-60 sm:h-80 sm:w-80 md:h-100 md:w-100',
                                    isDarkMode ? 'text-[#7dd3fc]' : 'text-[#7d9995]'
                                )}
                                aria-label="TikTok icon"
                            />
                        </CardContent>
                    </Card>
                    <Card className={cn(
                        'flex-grow-1 justify-center w-full md:w-auto',
                        isDarkMode ? 'bg-slate-950 border border-slate-700' : 'bg-[#faf7f5]'
                    )}>
                        <CardContent className="flex flex-col md:flex-row justify-between items-center">
                            <span className={cn(
                                'flex flex-col items-center md:items-left justify-center text-2xl md:text-4xl pl-0 md:pl-6 afacad-flux font-1000',
                                isDarkMode ? 'text-slate-100' : 'text-[#323743]'
                            )}>
                                <p>
                                Back - end
                                </p>
                                <p>
                                Development
                                </p>
                            </span>
                            <FaTiktok
                                className={cn(
                                    'h-60 w-60 sm:h-80 sm:w-80 md:h-100 md:w-100',
                                    isDarkMode ? 'text-[#7dd3fc]' : 'text-[#7d9995]'
                                )}
                                aria-label="TikTok icon"
                            />
                        </CardContent>
                    </Card>
                    <Card className={cn(
                        'flex-grow-1 justify-center w-full md:w-auto',
                        isDarkMode ? 'bg-slate-950 border border-slate-700' : 'bg-[#faf7f5]'
                    )}>
                        <CardContent className="flex flex-col md:flex-row justify-between items-center">
                            <span className={cn(
                                'flex flex-col items-center md:items-left justify-center text-2xl md:text-4xl pl-0 md:pl-6 afacad-flux font-1000',
                                isDarkMode ? 'text-slate-100' : 'text-[#323743]'
                            )}>
                                <p>
                                Database
                                </p>
                                <p>
                                Management
                                </p>
                            </span>
                            <FaTiktok
                                className={cn(
                                    'h-60 w-60 sm:h-80 sm:w-80 md:h-100 md:w-100',
                                    isDarkMode ? 'text-[#7dd3fc]' : 'text-[#7d9995]'
                                )}
                                aria-label="TikTok icon"
                            />
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}