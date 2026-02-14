"use client"
import Button from "../atoms/Button"
import { useState } from "react"
import playIcon from "../../../../public/images/play-icon.svg"
import Image from "next/image"

const YoutubeCard = ({videoId}: {videoId: string}) => {

    const [play, setPlay] = useState<boolean>(false)

    return (
        <div className="relative cursor-pointer group rounded-2xl md:rounded-4xl overflow-hidden aspect-video">
            {!play && (
                <>
                    <Image
                        src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
                        alt="thumbnail image"
                        fill
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-all duration-1000"
                    />

                    <div className="absolute inset-0 bg-fg-black/20 group-hover:bg-fg-black/40 transition"></div>

                    <Button
                        content={
                            <div className="w-12 h-12 md:w-14 md:h-14 bg-gold group-hover:scale-110 z-5 rounded-full flex items-center justify-center shadow-lg transition duration-1000">
                                <Image
                                    src={playIcon}
                                    alt="play icon"
                                    width={20}
                                    height={20}
                                    className="ml-1"
                                />
                            </div>
                        }
                        ariaLabel="play button"
                        classname="absolute inset-0 z-20 flex items-center justify-center cursor-pointer"
                        handleClick={() => setPlay(true)}
                    />
                </>
            )}

            {play && (
                <iframe 
                    title="Youtube video"
                    src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
                    allowFullScreen
                    allow="autoplay; encrypted-media; picture-in-picture"
                    className="absolute inset-0 w-full h-full"
                />
            )}
        </div>
    )
}

export default YoutubeCard