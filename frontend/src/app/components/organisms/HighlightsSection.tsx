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
        <Section>
            <Container>
                <div>
                    {highlightVideos.map(video => {
                        return (
                            <div key={video.id}>
                                <div>
                                    <YoutubeCard videoId={video.videoId}/>
                                </div>
                                <p>{video.eventName}</p>
                            </div>
                        )
                    })}
                </div>
            </Container>
        </Section>
    )
}

export default HighlightsSection