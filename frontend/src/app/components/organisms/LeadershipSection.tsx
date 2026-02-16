import Section from "../atoms/Section"
import Container from "../atoms/Container"
import data from "../../../../public/data/data.json"
import LeaderCard from "../molecules/LeaderCard"

const LeadershipSection = () => {

    const leadersData = data.leaders

    return (
        <Section bgColor="bg-fg-black">
            <Container>
                <div>
                    <h2 className="text-white">Meet Our Leadership</h2>
                    <p className="text-fg-gray">The passionate individuals guiding our musical journey</p>
                    <div>
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