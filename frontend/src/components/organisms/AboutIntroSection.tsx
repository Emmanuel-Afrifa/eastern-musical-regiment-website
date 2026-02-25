"use client"
import Section from "../atoms/Section"
import Container from "../atoms/Container"
import TitleSplitColors from "../atoms/TitleSplitColors"
import { motion } from "framer-motion"
import { staggerContainer, blurScale, fadeUp } from "@/src/lib/variants"

const AboutIntroSection = () => {
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
                            firstTitle="Building a Musical"
                            secondTitle="Legacy Together"
                        />
                    </motion.div>
                    <motion.p 
                        className="text-fg-gray mt-8 lg:mt-14 text-center section-description-text"
                        variants={fadeUp}    
                    >
                        For nearly three decades, the Eastern Musical Regiment has been at the 
                        forefront of cultural and musical expression, uniting communities 
                        through the power of brass, wind, and percussion.
                    </motion.p>
                </motion.div>
            </Container>
        </Section>
    )
}

export default AboutIntroSection