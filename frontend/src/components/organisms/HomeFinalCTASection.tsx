import Section from "../atoms/Section"
import Container from "../atoms/Container"
import TitleSplitColors from "../atoms/TitleSplitColors"

const HomeFinalCTASection = () => {
    return (
        <Section>
            <Container>
                <div className="flex flex-col items-center">
                    <div className="text-center">
                        <TitleSplitColors
                            firstTitle="Ready to Make Music"
                            secondTitle="With Us?"
                        />
                    </div>
                    <p className="text-fg-gray section-description-text mt-12 text-center px-4">
                        Whether you&apos;re an experienced musician or just starting your journey, 
                        there&apos;s a place for you in the Eastern Musical Regiment family.
                    </p>
                    <a
                        href="https://forms.gle/iCQtqZY2sEUtLZCt5"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="button bg-gold font-montserrat px-10 py-3 text-sm md:text-base 2xl:text-lg text-fg-black border-2 border-transparent mt-12 btn-hover"
                        aria-label="join the regiment today button"
                    >
                        Join the Regiment Today
                    </a>
                </div>
            </Container>
        </Section>
    )
}

export default HomeFinalCTASection