import TitleSplitColors from "../atoms/TitleSplitColors"
import Section from "../atoms/Section"
import Container from "../atoms/Container"
import Button from "../atoms/Button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"

const MusicalLegacySection = () => {
    return (
        <Section>
            <Container>
                <div className="flex flex-col px-8 md:px-15">
                    <TitleSplitColors
                        firstTitle="A Legacy of Musical"
                        secondTitle="& Cultural Pride"
                    />
                    <p className="mt-15 text-fg-gray text-base lg:text-lg">
                        The Eastern Musical Regiment is more than just a musical organization — we 
                        are a family united by rhythm, harmony, and shared cultural heritage. 
                        Founded to preserve and celebrate musical traditions while embracing 
                        modern innovation.
                    </p>
                    <p className="mt-8 text-fg-gray section-description-text">
                        Our diverse ensemble of brass, wind, and percussion musicians performs at 
                        cultural events, competitions, and community celebrations, bringing 
                        people together through the universal language of music.
                    </p>
                    <Button
                        content={
                            <p className="text-gold">
                                Learn Our Story 
                                <span>
                                    <FontAwesomeIcon icon={faArrowRight} className="ml-4" />
                                </span>
                            </p>
                        }
                        ariaLabel="learn our story button"
                        classname="button font-inter text-left mt-15 text-base lg:text-lg"
                    />
                </div>      
            </Container>
        </Section>
    )
}

export default MusicalLegacySection