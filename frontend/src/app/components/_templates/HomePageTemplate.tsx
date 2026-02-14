import HeroSection from "../organisms/HeroSection"
import MusicalLegacySection from "../organisms/MusicalLegacySection"
import SlideShowSection from "../organisms/SlideShowSection"
import HighlightsSection from "../organisms/HighlightsSection"
import HomeFinalCTASection from "../organisms/HomeFinalCTASection"

const HomePageTemplate = () => {
    return (
        <section>
            <HeroSection />
            <MusicalLegacySection />
            <SlideShowSection />
            <HighlightsSection />
            <HomeFinalCTASection />
        </section>
    )
}

export default HomePageTemplate