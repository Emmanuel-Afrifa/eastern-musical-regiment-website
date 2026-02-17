import BandsIntroSection from "../organisms/BandsIntroSection"
import BandsListSection from "../organisms/BandsListSection"
import BandCTASection from "../organisms/BandCTASection"

const BandsPageTemplate = () => {
    return (
        <section>
            <BandsIntroSection />
            <BandsListSection />
            <BandCTASection />
        </section>
    )
}

export default BandsPageTemplate