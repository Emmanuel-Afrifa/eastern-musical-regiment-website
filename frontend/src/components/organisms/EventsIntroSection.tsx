import Container from "../atoms/Container"
import TitleSplitColors from "../atoms/TitleSplitColors"

const EventsIntroSection = () => {
    return (
        <section className="h-screen 2xl:h-auto 2xl:py-70 relative">
            <video 
                autoPlay
                muted
                playsInline
                loop
                className="absolute inset-0 w-full h-full object-cover opacity-80"
            >
                <source src="/videos/events-bg-vid.mp4" type="video/mp4" />
            </video>

            <div className="absolute inset-0 w-full h-full bg-black/60 z-5"></div>

            <div className="2xl:py-70 py-28 h-screen 2xl:h-auto center relative">
                <Container>
                    <div className="relative z-10 flex flex-col items-center px-6 md:px-10 text-center">
                        <TitleSplitColors
                            firstTitle="Events &"
                            secondTitle="Performances"
                        />
                        <p className="text-fg-gray mt-8 lg:mt-14 text-center section-description-text">
                            Join us for unforgettable musical experiences throughout the year
                        </p>
                    </div>
                </Container>
            </div>
        </section>
    )
}

export default EventsIntroSection