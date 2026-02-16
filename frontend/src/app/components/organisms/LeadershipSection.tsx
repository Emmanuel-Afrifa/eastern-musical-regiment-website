import Section from "../atoms/Section"
import Container from "../atoms/Container"
import data from "../../../../public/data/data.json"
import LeaderCard from "../molecules/LeaderCard"

const LeadershipSection = () => {

    const leadersData = data.leaders

    return (
        <Section bgColor="bg-fg-black">
            <Container>
                <div className="flex flex-col items-center px-6 md:px-10">
                    <h2 className="text-white section-header-text mb-6 text-center">Meet Our Leadership</h2>
                    <p className="text-fg-gray section-description-text mb-16 text-center">The passionate individuals guiding our musical journey</p>
                    <div className="flex flex-wrap justify-center items-center gap-16">
                        {leadersData.map(leader => {
                            return (
                                <LeaderCard key={leader.id} leaderInfo={leader}/>
                            )
                        })}
                    </div>
                </div>
            </Container>
        </Section>
    )
}

export default LeadershipSection