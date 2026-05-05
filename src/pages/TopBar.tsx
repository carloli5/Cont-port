import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ContactForm } from "@/components/topBarComponents/ContactForm";
import { NotificationContainer } from "@/components/NotificationContainer";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { useDarkMode } from "@/hooks/useDarkMode";

const navigation = [
    { name: 'Home', href: '#introduction' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Services', href: '#services' },
    { name: 'Skills', href: '#skills' }
    // { name: 'Achievements', href: '#achievements' },
]

export function TopBar() {
    const [activeTab, setActiveTab] = useState('introduction');
    const [isContactOpen, setIsContactOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { isDarkMode } = useDarkMode();

    useEffect(() => {
        const handleScroll = () => {
            const sections = navigation.map(item => item.href.slice(1));
            
            for (let section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 100 && rect.bottom >= 100) {
                        setActiveTab(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <header className={cn(
                'backdrop-blur-xl border-b fixed inset-x-0 top-0 z-100 flex items-center justify-between px-4 sm:px-6',
                isDarkMode
                    ? 'bg-slate-950/35 text-slate-200 border-slate-700/50'
                    : 'text-slate-900 border-slate-200/70'
            )}>
                <span>
                    {/*<img src="cn-logo.png" alt="Logo" className="h-20 w-auto pl-2 sm:h-20 sm:w-auto md:h-30 md:w-30 object-cover sm:pl-2 md:pl-6" />*/}
                </span>
                <nav className="hidden md:flex flex-row gap-12 items-center pr-15 py-4">
                    {navigation.map((item) => (
                        <a
                        key= {item.name}
                        href= {item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={cn(
                            'afacad-flux text-xl pb-1 transition-colors',
                            isDarkMode
                                ? 'text-slate-200 hover:text-[#0081b8]'
                                : 'text-slate-900 hover:text-[#7d9995]',
                            activeTab === item.href.slice(1) &&
                                (isDarkMode
                                    ? 'border-b-2 border-[#0081b8] font-semibold text-[#0081b8]'
                                    : 'border-b-2 border-[#7d9995] font-semibold text-[#7d9995]')
                        )}
                        >
                            {item.name}
                        </a>
                    ))}
                    <span>
                        <Button 
                            onClick={() => setIsContactOpen(true)}
                            className={cn(
                                'p-5 afacad-flux text-md w-full',
                                isDarkMode
                                    ? 'bg-[#0081b8] text-white hover:bg-[#00648F]'
                                    : 'bg-[#7d9995] text-white hover:bg-[#5c726f]'
                            )}
                        >
                            Contact Me
                        </Button>
                    </span>
                </nav>
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className={cn(
                        'md:hidden cursor-pointer p-2 ',
                        isDarkMode ? 'text-[#0081b8] hover:text-white' : 'text-[#7d9995] hover:text-[#323743]'
                    )}
                >
                    {isMobileMenuOpen ? <X size={30} /> : <Menu size={30} />}
                </button>
            </header>
            
            {isMobileMenuOpen && (
                <div className={cn(
                    'fixed top-[100px] left-0 right-0 md:hidden backdrop-blur-xl border-b z-150',
                    isDarkMode
                        ? 'bg-slate-950/90 border-slate-700/50'
                        : 'border-slate-200/70'
                )}>
                    <nav className="flex flex-col gap-4 p-4">
                        {navigation.map((item) => (
                            <a
                            key={item.name}
                            href={item.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className={cn(
                            'afacad-flux text-xl pb-1 transition-colors',
                            isDarkMode
                                ? 'text-slate-200 hover:text-[#0081b8]'
                                : 'text-slate-900 hover:text-[#7d9995]',
                            activeTab === item.href.slice(1) &&
                                (isDarkMode
                                    ? 'border-b-2 border-[#0081b8] font-semibold text-[#0081b8]'
                                    : 'border-b-2 border-[#7d9995] font-semibold text-[#7d9995]')
                            )}
                            >
                                {item.name}
                            </a>
                        ))}
                        <Button 
                            onClick={() => {
                                setIsContactOpen(true);
                                setIsMobileMenuOpen(false);
                            }}
                            className={cn(
                                'p-5 afacad-flux text-md w-full',
                                isDarkMode
                                    ? 'bg-[#0081b8] text-white hover:bg-[#00648F]'
                                    : 'bg-[#7d9995] text-white hover:bg-[#5c726f]'
                            )}
                        >
                            Contact Me
                        </Button>
                    </nav>
                </div>
            )}

            <Dialog open={isContactOpen} onOpenChange={setIsContactOpen}>
                <DialogContent className={cn(
                    'sm:max-w-[500px]',
                    isDarkMode ? 'bg-[#0f172a]' : ''
                )}>
                    <DialogHeader>
                        <DialogTitle className={cn(
                            'flex aboreto-regular text-2xl items-center justify-center',
                            isDarkMode ? 'text-slate-100' : 'text-[#323743]'
                        )}
                        >
                            Contact Me
                        </DialogTitle>
                    </DialogHeader>
                    <ContactForm onClose={() => setIsContactOpen(false)} />
                </DialogContent>
            </Dialog>
            <NotificationContainer />
        </>
    );
}