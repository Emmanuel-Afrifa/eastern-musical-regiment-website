"use client"
import Section from "../atoms/Section"
import Container from "../atoms/Container"
import data from "../../../public/data/data.json"
import BandCard from "../molecules/BandCard"
import { motion } from "framer-motion"
import { staggerContainer, scaleUp } from "@/src/lib/variants"

const BandsListSection = () => {

    const bandsData = data.bands

    const stats = [
        {name: "Affiliated Bands", value: bandsData.length},
        {name: "Years of Experience", value: 8}
    ]

    return (
        <Section classname="px-6 md:px-10 bg-fg-black">
            <Container>
                <motion.div 
                    className="flex flex-col items-center w-full"
                    variants={staggerContainer}
                    initial="hidden"
                >
                    <div className="flex flex-wrap justify-center gap-5 md:gap-10 mb-16">
                        {stats.map((stat, index) => {
                            return (
                                <motion.div 
                                    key={index}
                                    className="flex flex-col items-center"
                                    variants={scaleUp}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{once: true}}
                                >
                                    <p className="section-header-text text-gold mb-2">{stat.value}</p>
                                    <p className="section-description-text text-white">{stat.name}</p>
                                </motion.div>
                            )
                        })}
                    </div>
                    <div className="w-full flex flex-col gap-20 xl:gap-12">
                        {bandsData.map(band => {
                            return (
                                <motion.div 
                                    key={band.id}
                                    variants={scaleUp}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{once: false, amount: 0.5}}
                                >
                                    <BandCard  bandItem={band} />
                                </motion.div>
                            )
                        })}
                    </div>
                </motion.div>
            </Container>
        </Section>
    )
}

export default BandsListSection