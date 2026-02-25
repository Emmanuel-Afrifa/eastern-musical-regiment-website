import Section from "../atoms/Section"
import Container from "../atoms/Container"
import TitleSplitColors from "../atoms/TitleSplitColors"
import Button from "../atoms/Button"

const BandCTASection = () => {
    return (
        <Section>
            <Container>
                <div className="flex flex-col items-center px-6 md:px-10 text-center">
                    <TitleSplitColors
                        firstTitle="Find Your"
                        secondTitle="Musical Home"
                    />
                    <p className="text-fg-gray mt-14 text-center section-description-text">
                        Planning something unforgettable? Whether it&apos;s a wedding, corporate 
                        gathering, private celebration or public event, our executive team will 
                        carefully match you with a band that fits your vision, audience, and 
                        atmosphere.
                    </p>
                    <p className="text-fg-gray mt-6 text-center section-description-text">
                        Reach out today and let us help you create a performance worth remembering.
                    </p>
                                        <a
                        href="https://forms.gle/vQjddpKKPpGrGD6s8"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="button text-fg-gray inline-block border-2 border-fg-gray px-10 py-3 mt-10 btn-hover"
                        aria-label="request band link"
                    >
                        Request a Band
                    </a>
                    {/* <Button
                        content="Request a Band"
                        ariaLabel="request band button"
                        classname="button text-fg-gray border-2 border-fg-gray px-10 py-3 mt-10 btn-hover"
                    /> */}
                </div>
            </Container>
        </Section>
    )
}

export default BandCTASection