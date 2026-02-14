import HeroSection from "../organisms/HeroSection"
import MusicalLegacySection from "../organisms/MusicalLegacySection"
import SlideShowSection from "../organisms/SlideShowSection"
import HighlightsSection from "../organisms/HighlightsSection"

const HomePageTemplate = () => {
    return (
        <section>
            <HeroSection />
            <MusicalLegacySection />
            <SlideShowSection />
            <HighlightsSection />
        </section>
    )
}

export default HomePageTemplate