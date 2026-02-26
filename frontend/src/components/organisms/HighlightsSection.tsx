"use client"
import Section from "../atoms/Section"
import Container from "../atoms/Container"
import YoutubeCard from "../molecules/YoutubeCard"
import { motion } from "framer-motion"
import { staggerContainer, scaleUp, fadeUp } from "@/src/lib/variants"

const HighlightsSection = () => {

    type HighlightVideo = {
        id: string;
        videoId: string;
        eventName: string
    }

    const highlightVideos: HighlightVideo[] = [
        {id: "01", videoId: "BcvKtseRi7Y", eventName: "Annual Brass Festival"},
        {id: "02", videoId: "BcvKtseRi7Y", eventName: "Annual Brass Festival"},
        {id: "03", videoId: "BcvKtseRi7Y", eventName: "Annual Brass Festival"},
        {id: "04", videoId: "BcvKtseRi7Y", eventName: "Annual Brass Festival"},
    ]

    return (
        <Section bgColor="bg-fg-black">
            <Container>
                <motion.div 
                    className="flex flex-col items-center md:px-15"
                    variants={staggerContainer}
                    initial="hidden"
                >
                    <motion.h2 
                        className="overflow-hidden whitespace-nowrap text-fg-fade-white section-header-text mb-6 text-center py-1.5"
                        initial={{width: 0}}
                        whileInView={{ width: "100%"}}
                        transition={{duration: 2, ease: "easeInOut"}}
                        viewport={{once: true}}
                    >
                        Recent Highlights
                    </motion.h2>
                    <motion.p 
                        className="text-fg-fade-white mb-16 px-7 text-base lg:text-lg text-center"
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: true, amount: 0.3}}
                    >
                        Experience the energy and artistry of our performances in some of our  most recent activities
                    </motion.p>
                    <div className="flex flex-wrap gap-16 xl:gap-10 justify-center">
                        {highlightVideos.map((video) => {
                            return (
                                <motion.div 
                                    key={video.id}
                                    className="w-full max-w-xl flex flex-col items-center px-4 mb-5 lg:mb-8"
                                    variants={scaleUp}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{once: true, amount: 0.45}}
                                >
                                    <div className="w-full rounded-2xl md:rounded-4xl border border-gold/40 ">
                                        <YoutubeCard videoId={video.videoId}/>
                                    </div>
                                    <p className="text-xl md:text-2xl lg:text-3xl text-center text-white mt-4">{video.eventName}</p>
                                </motion.div>
                            )
                        })}
                    </div>
                </motion.div>
            </Container>
        </Section>
    )
}

export default HighlightsSection