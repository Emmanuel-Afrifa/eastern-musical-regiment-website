import Section from "../atoms/Section"
import Container from "../atoms/Container"
import TitleSplitColors from "../atoms/TitleSplitColors"


const AboutIntroSection = () => {
    return (
        <Section classname="py-50 lg:py-70">
            <Container>
                <div className="flex flex-col items-center px-6 md:px-10 text-center">
                    <TitleSplitColors
                        firstTitle="Building a Musical"
                        secondTitle="Legacy Together"
                    />
                    <p className="text-fg-gray mt-8 lg:mt-14 text-center section-description-text">
                        For nearly three decades, the Eastern Musical Regiment has been at the 
                        forefront of cultural and musical expression, uniting communities 
                        through the power of brass, wind, and percussion.
                    </p>
                </div>
            </Container>
        </Section>
    )
}

export default AboutIntroSection