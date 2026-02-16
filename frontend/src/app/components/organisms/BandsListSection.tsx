import Section from "../atoms/Section"
import Container from "../atoms/Container"
import data from "../../../../public/data/data.json"
import BandCard from "../molecules/BandCard"

const BandsListSection = () => {

    const bandsData = data.bands

    const stats = [
        {name: "Affiliated Bands", value: bandsData.length},
        {name: "Years of Experience", value: 8}
    ]

    return (
        <Section classname="px-6 md:px-10 bg-fg-black">
            <Container>
                <div className="flex flex-col items-center w-full">
                    <div className="flex flex-wrap justify-center gap-5 md:gap-10 mb-16">
                        {stats.map((stat, index) => {
                            return (
                                <div 
                                    key={index}
                                    className="flex flex-col items-center"
                                >
                                    <p className="section-header-text text-gold mb-2">{stat.value}</p>
                                    <p className="section-description-text text-white">{stat.name}</p>
                                </div>
                            )
                        })}
                    </div>
                    <div className="w-full flex flex-col gap-20 xl:gap-12">
                        {bandsData.map(band => {
                            return (
                                <BandCard key={band.id} bandItem={band} />
                            )
                        })}
                    </div>
                </div>
            </Container>
        </Section>
    )
}

export default BandsListSection