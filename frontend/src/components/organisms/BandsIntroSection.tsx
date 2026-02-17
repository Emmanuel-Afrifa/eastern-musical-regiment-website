import Section from "../atoms/Section"
import Container from "../atoms/Container"
import TitleSplitColors from "../atoms/TitleSplitColors"

const BandsIntroSection = () => {
    return (
        <Section classname="py-70">
            <Container>
                <div className="flex flex-col items-center px-6 md:px-10 text-center">
                    <TitleSplitColors
                        firstTitle="Affiliated Bands &"
                        secondTitle="Musical Groups"
                    />
                    <p className="text-fg-gray mt-14 text-center section-description-text">
                        Discover the diverse ensembles that make up the Eastern Musical Regiment 
                        family, each bringing unique talents and musical traditions.
                    </p>
                </div>
            </Container>
        </Section>
    )
}

export default BandsIntroSection