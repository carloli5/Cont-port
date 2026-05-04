import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ContactForm } from "@/components/topBarComponents/ContactForm";
import { NotificationContainer } from "@/components/NotificationContainer";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navigation = [
    { name: 'Home', href: '#introduction' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' }
    // { name: 'Achievements', href: '#achievements' },
]

export function TopBar() {
    const [activeTab, setActiveTab] = useState('introduction');
    const [isContactOpen, setIsContactOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
            <header className="bg-[#faf7f5] flex sticky top-0 z-100 items-center justify-between">
                <span>
                    <img src="cn-logo.png" alt="Logo" className="h-20 w-auto pl-2 sm:h-20 sm:w-auto md:h-30 md:w-30 object-cover sm:pl-2 md:pl-6" />
                </span>
                <nav className="hidden md:flex flex-row gap-12 items-center pr-15 py-4">
                    {navigation.map((item) => (
                        <a
                        key= {item.name}
                        href= {item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`text-[#565d6d] afacad-flux text-xl pb-1 transition-colors ${
                            activeTab === item.href.slice(1)
                                ? 'border-b-2 border-[#bd6d5d] font-semibold text-[#bd6d5d]'
                                : 'hover:text-[#bd6d5d]'
                        }`}
                        >
                            {item.name}
                        </a>
                    ))}
                    <span>
                        <Button 
                            onClick={() => setIsContactOpen(true)}
                            className="p-5 afacad-flux text-md"
                        >
                            Contact Me
                        </Button>
                    </span>
                </nav>
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="md:hidden p-4 text-[#bd6d5d] cursor-pointer"
                >
                    {isMobileMenuOpen ? <X size={30} /> : <Menu size={30} />}
                </button>
            </header>
            
            {isMobileMenuOpen && (
                <div className="fixed top-[100px] left-0 right-0 md:hidden bg-[#faf7f5] border-b border-gray-200 z-150">
                    <nav className="flex flex-col gap-4 p-4">
                        {navigation.map((item) => (
                            <a
                            key={item.name}
                            href={item.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className={`text-[#565d6d] afacad-flux text-lg pb-2 transition-colors ${
                                activeTab === item.href.slice(1)
                                    ? 'border-b-2 border-[#bd6d5d] font-semibold text-[#bd6d5d]'
                                    : 'hover:text-[#bd6d5d]'
                            }`}
                            >
                                {item.name}
                            </a>
                        ))}
                        <Button 
                            onClick={() => {
                                setIsContactOpen(true);
                                setIsMobileMenuOpen(false);
                            }}
                            className="p-5 afacad-flux text-md w-full"
                        >
                            Contact Me
                        </Button>
                    </nav>
                </div>
            )}

            <Dialog open={isContactOpen} onOpenChange={setIsContactOpen}>
                <DialogContent className="sm:max-w-[500px]">
                    <DialogHeader>
                        <DialogTitle className="flex text-[#323743] aboreto-regular text-2xl items-center justify-center">Contact Me</DialogTitle>
                    </DialogHeader>
                    <ContactForm onClose={() => setIsContactOpen(false)} />
                </DialogContent>
            </Dialog>
            <NotificationContainer />
        </>
    );
}