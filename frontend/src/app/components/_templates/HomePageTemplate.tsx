import HeroSection from "../organisms/HeroSection"
import MusicalLegacySection from "../organisms/MusicalLegacySection"
import SlideShowSection from "../organisms/SlideShowSection"

const HomePageTemplate = () => {
    return (
        <section>
            <HeroSection />
            <MusicalLegacySection />
            <SlideShowSection />
        </section>
    )
}

export default HomePageTemplate