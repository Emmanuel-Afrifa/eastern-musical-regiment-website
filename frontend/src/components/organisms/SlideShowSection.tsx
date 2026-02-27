"use client"
import Section from "../atoms/Section"
import Container from "../atoms/Container"
import SlideShow from "../molecules/SlideShow"
import { motion } from "framer-motion"
import { staggerContainer } from "@/src/lib/variants"

const SlideShowSection = () => {
    return (
        <Section classname="py-0">
            <Container>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    variants={staggerContainer}
                    viewport={{once: true, amount: 0.7}}
                >
                    <motion.div
                        initial={{opacity: 0, scale: 0.3}}
                        whileInView={{opacity: 1, scale: 1}}
                        transition={{duration: 1, ease: "easeInOut"}}
                        viewport={{once: true}}
                    >
                        <SlideShow/>
                    </motion.div>
                </motion.div>
            </Container>
        </Section>
    )
}

export default SlideShowSection