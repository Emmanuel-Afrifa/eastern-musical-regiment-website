import { render, screen, fireEvent } from "@testing-library/react";
import BandCard from "./BandCard";

const mockDataFull = {
    name: "new band",
    image: "/images/EMR_LOGO.svg",
    description: "this band is great",
    location: "ghana",
    genres: ["jazz", "gospel"],
    bandMedia: [
        {src: "/images/EMR_LOGO.svg", type: "image"},
        {src: "sYynXFGsNYo", type: "video"}
    ]
}

describe("Band Card component", () => {
    it("Renders image, name, description and location", () => {
        render(<BandCard bandItem={mockDataFull} />)

        expect(screen.getByRole("img", {name: /band image/i})).toBeInTheDocument()
        expect(screen.getByRole("heading", {level: 3, name: "new band"})).toBeInTheDocument()
        expect(screen.getByText(/this band is great/i)).toBeInTheDocument()
        expect(screen.getByText(/ghana/i)).toBeInTheDocument()
    })

    it("Renders genre list if it exists", () => {
        render(<BandCard bandItem={mockDataFull} />)

        expect(screen.getByText(/jazz/i)).toBeInTheDocument()
        expect(screen.getByText(/gospel/i)).toBeInTheDocument()
    })

    it("Does not render genre list if it does not exist", () => {
        const mockDataWithoutGenre = {...mockDataFull, genres: []}
        render(<BandCard bandItem={mockDataWithoutGenre}/>)

        expect(screen.queryByText(/jazz/i)).not.toBeInTheDocument()
        expect(screen.queryByText(/gospel/i)).not.toBeInTheDocument()
    })

    it("Renders media overlay when image is clicked and closes when closed button is clicked", () => {
        render(<BandCard bandItem={mockDataFull}/>)

        const mainBandImg = screen.getByRole("img", {name: /band image/i})
        fireEvent.click(mainBandImg)

        // close button renders
        const closeButton = screen.getByRole("button", {name: /close button/i}) 
        expect(closeButton).toBeInTheDocument()

        // buttons renders
        expect(screen.getByRole("button", {name: /previous button/i})).toBeInTheDocument()
        expect(screen.getByRole("button", {name: /next button/i})).toBeInTheDocument()

        // image renders on overlay (as it's the first type in the bandMedia)
        expect(screen.getByRole("img", {name: /band performance image/i})).toBeInTheDocument()

        // overlay closes after close button is clicked
        fireEvent.click(closeButton)

        // close button does not render again
        expect(screen.queryByRole("button", {name: /close button/i})).not.toBeInTheDocument()
    })

    it("Previous and next buttons do not render when there's no media", () => {
        const mockDataWithoutMedia = {...mockDataFull, bandMedia: []}
        render(<BandCard bandItem={mockDataWithoutMedia}/>)

        const mainBandImg = screen.getByRole("img", {name: /band image/i})
        fireEvent.click(mainBandImg)

        //previous and next buttons do not render
        expect(screen.queryByRole("button", {name: /previous button/i})).not.toBeInTheDocument()
        expect(screen.queryByRole("button", {name: /next button/i})).not.toBeInTheDocument()

        // no preview text renders
        expect(screen.getByText(/no media to preview/i)).toBeInTheDocument()
    })

    it("Previous and next buttons work when the overlay is opened and there's media", () => {
        render(<BandCard bandItem={mockDataFull}/>)

        const mainBandImg = screen.getByRole("img", {name: /band image/i})
        fireEvent.click(mainBandImg)

        const previousButton = screen.getByRole("button", {name: /previous button/i})
        const nextButton = screen.getByRole("button", {name: /next button/i})

        // Initially image shows
        expect(screen.getByRole("img", {name: /band performance image/i})).toBeInTheDocument()

        // Image goes away for youtube card to appear when next button is clicked
        fireEvent.click(nextButton)
        expect(screen.queryByRole("img", {name: /band performance image/i})).not.toBeInTheDocument()

        // Clicking previous button goes back to the image
        fireEvent.click(previousButton)
        expect(screen.getByRole("img", {name: /band performance image/i})).toBeInTheDocument()
    })
})

