
import { FaLinkedin, FaGithub, FaFacebook } from 'react-icons/fa';
import { motion } from 'framer-motion';

export function Introduction() {
    return (
        <div className="bg-[#faf7f5] min-h-screen flex flex-col md:flex-row items-center justify-center gap-10 p-6">
            <motion.img 
                src='carl-pic.png' 
                className="h-60 w-60 sm:h-80 sm:w-80 md:h-120 md:w-120 object-cover rounded-lg" 
                alt="Carl Nataño"
                initial={{ opacity: 0, x: 140 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
            />
            <motion.div 
                className="flex flex-col items-center md:items-start text-center md:text-left"
                initial={{ opacity: 0, x: -140 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                <div className="flex flex-col text-5xl font-bold aboreto-regular text-[#323743] mb-4 gap-2 sm:text-5xl md:text-8xl">
                    <span>
                        Carl
                    </span>
                    <span>
                        Nataño
                    </span>
                </div>
                <span className="text-xl text-[#565d6d] afacad-flux sm:text-xl md:text-3xl">
                    Web Developer | Graphic Designer
                </span>
                <span className='py-6 flex gap-4'>
                    <FaLinkedin size={32} className="text-[#bd6d5d] cursor-pointer hover:text-[#323743]" onClick={() => window.open('https://www.linkedin.com/in/carl-nataño-87b760233', '_blank')} />
                    <FaGithub size={32} className="text-[#bd6d5d] cursor-pointer hover:text-[#323743]" onClick={() => window.open('https://github.com/carloli5', '_blank')} />
                    <FaFacebook size={32} className="text-[#bd6d5d] cursor-pointer hover:text-[#323743]" onClick={() => window.open('https://www.facebook.com/carloli05', '_blank')} />
                </span>
            </motion.div>
        </div>
    );
}    