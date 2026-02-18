import Section from "../atoms/Section"
import Container from "../atoms/Container"
import TitleSplitColors from "../atoms/TitleSplitColors"

const EventsIntroSection = () => {
    return (
        <Section classname="h-screen 2xl:py-70">
            <Container>
                <div className="flex flex-col items-center px-6 md:px-10 text-center">
                    <TitleSplitColors
                        firstTitle="Events &"
                        secondTitle="Performances"
                    />
                    <p className="text-fg-gray mt-8 lg:mt-14 text-center section-description-text">
                        Join us for unforgettable musical experiences throughout the year
                    </p>
                </div>
            </Container>
        </Section>
    )
}

export default EventsIntroSection