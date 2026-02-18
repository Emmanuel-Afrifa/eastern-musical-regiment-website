"use client"
import { useState, useEffect, useMemo } from "react"
import Image from "next/image"
import { cn } from "@/src/lib/cn"
import { useToggle } from "@/src/hooks/useToggle"

const SlideShow = () => {

    const [index, setIndex] = useState<number>(0)
    const [paused, setPaused] = useToggle(false)

    const images: string[] = useMemo(() => {
        return (
            [
                "/images/img-1.jpg",
                "/images/img-2.jpg",
                "/images/img-3.jpg",
                "/images/img-4.jpg",
                "/images/img-5.jpg",
                "/images/img-6.jpg",
                "/images/img-7.jpg",
            ]
        )
    }, [])

    useEffect(() => {
        if (paused) return

        const interval = setInterval(() => {
            setIndex(prevIndex => (prevIndex + 1) % images.length)
        }, 2500);

        return () => clearInterval(interval)

    }, [paused, index, setIndex, images])

    return (
        <div 
            className="relative overflow-hidden aspect-video w-full md:w-[85%] h-auto max-h-screen mx-auto md:rounded-3xl cursor-pointer"
            onMouseEnter={setPaused}
            onMouseLeave={setPaused}
        >
            {images.map((image, i) => {
                return (
                    <Image
                        key={i}
                        src={image}
                        alt="regiment performance image"
                        fill
                        className={cn(
                            "absolute inset-0 transition-all duration-1000 object-cover w-full h-full md:rounded-3xl",
                            i === index ? "opacity-100" : "opacity-0"
                        )}
                    />
                )
            })}
        </div>
    )
}

export default SlideShow