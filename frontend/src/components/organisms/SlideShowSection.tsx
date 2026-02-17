import Section from "../atoms/Section"
import Container from "../atoms/Container"
import SlideShow from "../atoms/SlideShow"

const SlideShowSection = () => {
    return (
        <Section>
            <Container>
                <div>
                    <SlideShow/>
                </div>
            </Container>
        </Section>
    )
}

export default SlideShowSection