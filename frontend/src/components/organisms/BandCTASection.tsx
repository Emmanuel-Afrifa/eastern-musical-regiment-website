"use client"
import Section from "../atoms/Section"
import Container from "../atoms/Container"
import TitleSplitColors from "../atoms/TitleSplitColors"
import { motion } from "framer-motion"
import { staggerContainer, scaleUp, fadeUp, spinScaleSide } from "@/src/lib/variants"

const BandCTASection = () => {
    return (
        <Section>
            <Container>
                <motion.div 
                    className="flex flex-col items-center px-6 md:px-10 text-center"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: false}}    
                >
                    <motion.div
                        variants={scaleUp}
                    >
                        <TitleSplitColors
                            firstTitle="Find Your"
                            secondTitle="Musical Home"
                        />
                    </motion.div>
                    <motion.p 
                        className="text-fg-gray mt-14 text-center section-description-text"
                        variants={fadeUp}
                    >
                        Planning something unforgettable? Whether it&apos;s a wedding, corporate 
                        gathering, private celebration or public event, our executive team will 
                        carefully match you with a band that fits your vision, audience, and 
                        atmosphere.
                    </motion.p>
                    <motion.p 
                        className="text-fg-gray mt-6 text-center section-description-text"
                        variants={fadeUp}
                    >
                        Reach out today and let us help you create a performance worth remembering.
                    </motion.p>
                    <motion.a
                        variants={spinScaleSide}
                        href="https://forms.gle/vQjddpKKPpGrGD6s8"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="button text-fg-gray inline-block border-2 border-fg-gray px-10 py-3 mt-10 btn-hover"
                        aria-label="request band link"
                    >
                        Request a Band
                    </motion.a>
                </motion.div>
            </Container>
        </Section>
    )
}

export default BandCTASection