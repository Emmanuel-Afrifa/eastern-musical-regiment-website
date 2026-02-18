import Section from "../atoms/Section"
import Container from "../atoms/Container"
import TimelineItem from "../molecules/TimelineItem"
import data from "../../../public/data/data.json"

const JournerSection = () => {

    const timelineData = data.milestones

    return (
        <Section id="journey">
            <Container>
                <div className="flex flex-col items-center">
                    <h2 
                        className="text-white section-header-text mb-6 text-center">
                        Our Journey
                    </h2>
                    <p 
                        className="text-fg-dark-gray section-description-text mb-2 text-center"
                    >
                        Milestones that shaped our musical legacy
                    </p>
                </div>
                <div className="relative w-full px-4 md:px-6 lg:px-10">
                    {/* Vertical Line */}
                    <div
                        className="hidden md:block absolute left-1/2 top-0 -translate-x-1/2 h-full w-0.5 bg-fg-dark-gray"
                    >
                    </div>
                    {timelineData.map((milestone, index) => {
                        return (
                            <TimelineItem
                                timelineDetails={milestone}
                                index={index}
                                key={milestone.id}
                            />
                        )
                    })}
                </div>
            </Container>
        </Section>
    )
}

export default JournerSection