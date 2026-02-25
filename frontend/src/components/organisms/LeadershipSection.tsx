"use client"
import Section from "../atoms/Section"
import Container from "../atoms/Container"
import data from "../../../public/data/data.json"
import LeaderCard from "../molecules/LeaderCard"
import { motion } from "framer-motion"
import { staggerContainer, blurScale, fadeUp, scaleUp } from "@/src/lib/variants"

const LeadershipSection = () => {

    const leadersData = data.leaders

    return (
        <Section bgColor="bg-fg-black">
            <Container>
                <motion.div 
                    className="flex flex-col items-center px-6 md:px-10"
                    variants={staggerContainer}
                    initial="hidden"
                >
                    <motion.h2 
                        className="text-white section-header-text mb-6 text-center"
                        variants={blurScale}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: false, amount: 0.3}}
                    >
                        Meet Our Leadership
                    </motion.h2>
                    <motion.p  
                        className="text-fg-gray section-description-text mb-16 text-center"
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: false, amount: 0.3}}
                    >
                        The passionate individuals guiding our musical journey
                    </motion.p>
                    <div className="flex flex-wrap justify-center items-center gap-16">
                        {leadersData.map(leader => {
                            return (
                                <motion.div 
                                    key={leader.id}
                                    variants={scaleUp}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{once: false, amount: 0.3}}
                                >
                                    <LeaderCard leaderInfo={leader}/>
                                </motion.div>
                            )
                        })}
                    </div>
                </motion.div>
            </Container>
        </Section>
    )
}

export default LeadershipSection