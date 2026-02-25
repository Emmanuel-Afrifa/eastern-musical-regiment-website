"use client"
import Section from "../atoms/Section"
import Container from "../atoms/Container"
import TitleSplitColors from "../atoms/TitleSplitColors"
import { motion } from "framer-motion"
import { staggerContainer, blurScale, spinScaleSide, fadeUp } from "@/src/lib/variants"

const BandsIntroSection = () => {
    return (
        <Section classname="h-screen 2xl:h-auto 2xl:py-70">
            <Container>
                <motion.div 
                    className="flex flex-col items-center px-6 md:px-10 text-center"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true}}
                >
                    <motion.div
                        variants={blurScale}
                    >
                        <TitleSplitColors
                            firstTitle="Affiliated Bands &"
                            secondTitle="Musical Groups"
                        />
                    </motion.div>
                    <motion.p 
                        className="text-fg-gray mt-8 lg:mt-14 text-center section-description-text"
                        variants={fadeUp}
                    >
                        Discover the diverse ensembles that make up the Eastern Musical Regiment 
                        family, each bringing unique talents and musical traditions.
                    </motion.p>
                    <motion.a
                        href="https://forms.gle/vQjddpKKPpGrGD6s8"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="button text-fg-gray inline-block border-2 border-fg-gray px-10 py-3 mt-10 btn-hover"
                        aria-label="request a band link"
                        variants={spinScaleSide}
                    >
                        Request a Band
                    </motion.a>
                </motion.div>
            </Container>
        </Section>
    )
}

export default BandsIntroSection