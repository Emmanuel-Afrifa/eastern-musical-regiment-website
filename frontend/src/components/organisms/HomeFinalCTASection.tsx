"use client"
import Section from "../atoms/Section"
import Container from "../atoms/Container"
import TitleSplitColors from "../atoms/TitleSplitColors"
import { motion } from "framer-motion"
import { staggerContainer, spinScaleSide, blurScale, fadeUp } from "@/src/lib/variants"

const HomeFinalCTASection = () => {
    return (
        <Section classname="band-bg-parallax">
            <Container>
                <motion.div 
                    className="flex flex-col items-center"
                    initial="hidden"
                    variants={staggerContainer}
                >
                    <motion.div 
                        className="text-center"
                        variants={blurScale}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: true, amount: 0.3}}
                    >
                        <TitleSplitColors
                            firstTitle="Ready to Make Music"
                            secondTitle="With Us?"
                        />
                    </motion.div>
                    <motion.p 
                        className="text-fg-gray section-description-text mt-12 text-center px-4"
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: true, amount: 0.3}}
                    >
                        Whether you&apos;re an experienced musician or just starting your journey, 
                        there&apos;s a place for you in the Eastern Musical Regiment family.
                    </motion.p>
                    <motion.a
                        href="https://forms.gle/iCQtqZY2sEUtLZCt5"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="button bg-gold font-montserrat px-10 py-3 text-sm md:text-base 2xl:text-lg text-fg-black border-2 border-transparent mt-12 btn-hover"
                        aria-label="join the regiment today button"
                        variants={spinScaleSide}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: true}}
                    >
                        Join the Regiment Today
                    </motion.a>
                </motion.div>
            </Container>
        </Section>
    )
}

export default HomeFinalCTASection