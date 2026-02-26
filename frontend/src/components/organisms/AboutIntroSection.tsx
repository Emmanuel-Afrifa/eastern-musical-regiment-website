"use client"
import Section from "../atoms/Section"
import Container from "../atoms/Container"
import TitleSplitColors from "../atoms/TitleSplitColors"
import { motion } from "framer-motion"
import { staggerContainer, blurScale, fadeUp } from "@/src/lib/variants"
import Image from "next/image"
import trumpetImg from "../../../public/images/trumpet-img-bg.webp"

const AboutIntroSection = () => {
    return (
        <Section classname="h-screen 2xl:h-auto 2xl:py-70 intro-bg-design relative">
            <Container>
                <motion.div 
                    className="flex flex-col items-center px-6 md:px-10 text-center"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true}}
                >
                    <div className="absolute inset-0 w-full xl:w-[85vw] 2xl:max-h-205 h-screen rounded-br-full z-0 overflow-hidden opacity-35">
                       <div className="relative aspect-video w-full h-full">
                             <Image
                                src={trumpetImg}
                                alt="trumper image"
                                fill
                                className="w-full h-full object-cover"
                            />
                       </div>
                    </div>


                    <motion.div
                        variants={blurScale}
                        className="z-8"
                    >
                        <TitleSplitColors
                            firstTitle="Building a Musical"
                            secondTitle="Legacy Together"
                            secondColor="text-white"
                            classname="custom-text-shadow"
                        />
                    </motion.div>
                    <motion.p 
                        className="text-white z-8 mt-8 lg:mt-14 text-center section-description-text"
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