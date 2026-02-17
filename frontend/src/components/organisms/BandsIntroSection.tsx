import Section from "../atoms/Section"
import Container from "../atoms/Container"
import Button from "../atoms/Button"
import TitleSplitColors from "../atoms/TitleSplitColors"

const BandsIntroSection = () => {
    return (
        <Section classname="py-50">
            <Container>
                <div className="flex flex-col items-center px-6 md:px-10 text-center">
                    <TitleSplitColors
                        firstTitle="Affiliated Bands &"
                        secondTitle="Musical Groups"
                    />
                    <p className="text-fg-gray mt-8 lg:mt-14 text-center section-description-text">
                        Discover the diverse ensembles that make up the Eastern Musical Regiment 
                        family, each bringing unique talents and musical traditions.
                    </p>
                    <Button
                        content="Request a Band"
                        ariaLabel="request band button"
                        classname="button text-fg-gray border-2 border-fg-gray px-10 py-2 mt-10"
                    />
                </div>
            </Container>
        </Section>
    )
}

export default BandsIntroSection