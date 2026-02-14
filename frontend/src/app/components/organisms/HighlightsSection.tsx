import Section from "../atoms/Section"
import Container from "../atoms/Container"
import YoutubeCard from "../molecules/YoutubeCard"

const HighlightsSection = () => {

    type HighlightVideo = {
        id: string;
        videoId: string;
        eventName: string
    }

    const highlightVideos: HighlightVideo[] = [
        {id: "01", videoId: "BcvKtseRi7Y", eventName: "Annual Brass Festival"},
        {id: "02", videoId: "BcvKtseRi7Y", eventName: "Annual Brass Festival"},
        {id: "03", videoId: "BcvKtseRi7Y", eventName: "Annual Brass Festival"},
        {id: "04", videoId: "BcvKtseRi7Y", eventName: "Annual Brass Festival"},
    ]

    return (
        <Section bgColor="bg-fg-black">
            <Container>
                <div className="flex flex-col items-center">
                    <h2 className="text-fg-fade-white section-header-text mb-6 text-center">
                        Recent Highlights
                    </h2>
                    <p className="text-fg-fade-white mb-16 px-4 text-base lg:text-lg text-center">
                        Experience the energy and artistry of our performances in some of our  most recent activities
                    </p>
                    <div className="flex flex-wrap gap-16 xl:gap-10 justify-center">
                        {highlightVideos.map(video => {
                            return (
                                <div 
                                    key={video.id}
                                    className="w-full max-w-xl flex flex-col items-center px-4 mb-8"
                                >
                                    <div className="w-full rounded-2xl md:rounded-4xl border border-gold/40 ">
                                        <YoutubeCard videoId={video.videoId}/>
                                    </div>
                                    <p className="text-xl md:text-2xl lg:text-3xl text-center text-white mt-4">{video.eventName}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </Container>
        </Section>
    )
}

export default HighlightsSection