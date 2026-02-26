"use client"
import Container from "../atoms/Container"
import { motion } from "framer-motion"
import { staggerContainer, blurScale, openUp } from "@/src/lib/variants"

const HeroSection = () => {
    return (
        <section id="hero" className="w-full min-h-screen center home-bg py-28 md:py-14">
            <Container>
                <motion.div 
                    className="w-full flex flex-col items-center pt-10 px-4"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true}}
                >
                    <motion.h1 
                        className="text-white text-4xl md:text-6xl xl:text-[80px] 2xl:text-9xl text-center mb-8 md:mb-10 2xl:mb-16"
                        variants={openUp}
                        style={{transformPerspective: 1000}}
                    >
                        Where Rhythm <br />
                        <span className="text-gold">Meets Culture</span>
                    </motion.h1>
                    <motion.p 
                        className="font-montserrat text-base md:text-lg 2xl:xl text-white max-w-[55ch] text-center mb-8 md:mb-10 2xl:mb-16 px-6 md:px-15"
                        variants={blurScale}
                    >
                        Join the Eastern Musical Regiment. A vibrant community celebrating musical 
                        excellence and cultural heritage through brass, wind and percussion
                    </motion.p>
                    <div className="flex flex-wrap justify-center gap-6">
                        <motion.a
                            href="https://forms.gle/iCQtqZY2sEUtLZCt5"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-gold border-2 border-transparent button inline-block font-montserrat px-10 py-3 text-sm md:text-base 2xl:text-lg text-fg-black btn-hover btn-gold"
                            aria-label="join regiment link"
                            initial={{opacity: 0, x: -20, scale: 0.8}}
                            animate={{opacity: 1, x: 0, scale: 1}}
                            transition={{duration: 0.1, ease: "easeInOut", delay: 2.1}}
                        >
                            Join the Regiment
                        </motion.a>
                        <motion.a
                            href="https://forms.gle/vQjddpKKPpGrGD6s8"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="button px-10 py-3 font-montserrat text-sm md:text-base 2xl:text-lg bg-fg-black text-fg-gray border-2 border-fg-gray btn-hover"
                            aria-label="request a band link"
                            initial={{opacity: 0, x: 20, scale: 0.8}}
                            animate={{opacity: 1, x: 0, scale: 1}}
                            transition={{duration: 0.1, ease: "easeInOut", delay: 2.8}}
                        >
                            Request a Band
                        </motion.a>
                    </div>
                </motion.div>
            </Container>
        </section>
    )
}

export default HeroSection