"use client"
import Section from "../atoms/Section"
import Container from "../atoms/Container"
import TimelineItem from "../molecules/TimelineItem"
import data from "../../../public/data/data.json"
import { motion } from "framer-motion"
import { staggerContainer, fadeUp } from "@/src/lib/variants"

const JourneySection = () => {

    const timelineData = data.milestones

    return (
        <Section id="journey">
            <Container>
                <motion.div 
                    className="flex flex-col items-center"
                    variants={staggerContainer}
                    initial="hidden"
                >
                    <motion.h2 
                        className="overflow-hidden whitespace-nowrap text-white section-header-text mb-6 text-center py-1.5"
                        initial={{width: 0}}
                        whileInView={{ width: "100%"}}
                        transition={{duration: 2, ease: "easeInOut"}}
                        viewport={{once: false}}
                    >
                        Our Journey
                    </motion.h2>
                    <motion.p 
                        className="text-fg-dark-gray section-description-text mb-2 text-center"
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: false}}
                    >
                        Milestones that shaped our musical legacy
                    </motion.p>
                </motion.div>
                <div 
                    className="relative w-full px-6 lg:px-10"
                >
                    {/* Vertical Line */}
                    <div
                        className="hidden md:block absolute left-1/2 top-0 -translate-x-1/2 h-full w-0.5 bg-fg-dark-gray"
                    >
                    </div>
                    {timelineData.map((milestone, index) => {
                        return (
                            <TimelineItem
                                key={milestone.id}
                                timelineDetails={milestone}
                                index={index}
                            />
                        )
                    })}
                </div>
            </Container>
        </Section>
    )
}

export default JourneySection