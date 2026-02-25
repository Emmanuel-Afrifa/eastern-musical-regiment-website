import Button from "../atoms/Button"
import Container from "../atoms/Container"

const HeroSection = () => {
    return (
        <section id="hero" className="w-full min-h-screen center home-bg py-28 md:py-14">
            <Container>
                <div className="w-full flex flex-col items-center pt-10 px-4">
                    <h1 className="text-white text-4xl md:text-6xl xl:text-8xl 2xl:text-9xl text-center mb-8 md:mb-10 2xl:mb-16">
                        Where Rhythm <br />
                        <span className="text-gold">Meets Culture</span>
                    </h1>
                    <p className="font-montserrat text-base md:text-lg 2xl:xl text-white max-w-[55ch] text-center mb-8 md:mb-10 2xl:mb-16">
                        Join the Eastern Musical Regiment. A vibrant community celebrating musical 
                        excellence and cultural heritage through brass, wind and percussion
                    </p>
                    <div className="flex flex-wrap justify-center gap-6">
                        <a
                            href="https://forms.gle/iCQtqZY2sEUtLZCt5"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-gold border-2 border-transparent button inline-block font-montserrat px-10 py-3 text-sm md:text-base 2xl:text-lg text-fg-black btn-hover btn-gold"
                            aria-label="join regiment link"
                        >
                            Join the Regiment
                        </a>
                        <Button
                            content="Request a Band"
                            ariaLabel="request a band button"
                            classname="button px-10 py-3 font-montserrat text-sm md:text-base 2xl:text-lg bg-fg-black text-fg-gray border-2 border-fg-gray btn-hover"
                        />
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default HeroSection