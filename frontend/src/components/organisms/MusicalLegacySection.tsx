"use client"
import TitleSplitColors from "../atoms/TitleSplitColors"
import Section from "../atoms/Section"
import Container from "../atoms/Container"
import Button from "../atoms/Button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import Link from "next/link"
import { motion } from "framer-motion"
import { staggerContainer, fadeUp, blurScale } from "@/src/lib/variants"

const MusicalLegacySection = () => {
    return (
        <Section>
            <Container>
                <motion.div 
                    className="flex flex-col px-7 md:px-15"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, amount: 0.4}}
                >
                    <motion.div
                        variants={blurScale}
                    >
                        <TitleSplitColors
                            firstTitle="A Legacy of Musical"
                            secondTitle="& Cultural Pride"
                        />
                    </motion.div>
                    <motion.p 
                        className="mt-15 text-fg-gray text-base lg:text-lg"
                        variants={fadeUp}
                    >
                        The Eastern Musical Regiment is more than just a musical organization — we 
                        are a family united by rhythm, harmony, and shared cultural heritage. 
                        Founded to preserve and celebrate musical traditions while embracing 
                        modern innovation.
                    </motion.p>
                    <motion.p 
                        className="mt-8 text-fg-gray section-description-text"
                        variants={fadeUp}    
                    >
                        Our diverse ensemble of brass, wind, and percussion musicians performs at 
                        cultural events, competitions, and community celebrations, bringing 
                        people together through the universal language of music.
                    </motion.p>
                    <motion.div
                        variants={fadeUp}
                    >
                        <Link href="/about#journey">
                            <Button
                                content={
                                    <p className="text-gold bg-grow z-0 hover:px-5 py-2 hover:text-fg-black transition-all duration-500">
                                        <span>Learn Our Story</span> 
                                        <span>
                                            <FontAwesomeIcon icon={faArrowRight} className="ml-4" />
                                        </span>
                                    </p>
                                }
                                ariaLabel="learn our story button"
                                classname="button font-inter text-left mt-15 text-base lg:text-lg"
                            />
                        </Link>
                    </motion.div>
                </motion.div>      
            </Container>
        </Section>
    )
}

export default MusicalLegacySection