
"use client"

import { TopBar } from "./TopBar";
import { AboutMe } from "./AboutMe";
import { Introduction } from "./Introduction";
import { Services } from "./Services";
import { Skills } from "./Skills";
import { Projects } from "./Projects";
import { motion } from "framer-motion";
import { useEffect } from "react";



export function Homepage() {
    useEffect(() => {
                const introElement = document.getElementById('introduction');
                if (introElement) {
                    introElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
    }, []);
    return (
        <>
            <TopBar />
            <main>
                <section 
                    id="introduction"
                >
                        <Introduction/>
                </section>
                <motion.section    
                    id="about"
                    initial={{ opacity: 0}}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <AboutMe/>
                </motion.section>
                <motion.section
                    id="projects"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <Projects/>
                </motion.section>
                <motion.section
                    id="services"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <Services/>
                </motion.section>
                <motion.section
                    id="skills"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <Skills/>
                </motion.section>
            </main>
        </>
    );
}