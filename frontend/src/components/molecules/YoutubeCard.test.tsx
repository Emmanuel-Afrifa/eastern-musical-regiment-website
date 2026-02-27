import { render, screen, fireEvent } from "@testing-library/react";
import YoutubeCard from "./YoutubeCard";

describe("Youtube Card component", () => {
    beforeEach(() => {
        render(<YoutubeCard videoId="sYynXFGsNYo"/>)
    })

    it("Renders the play button", () => {
        expect(screen.getByRole("button", { name: /play button/i})).toBeInTheDocument()
    })

    it("Clicking play button reveals iframe", () => {
        // iframe initially not in the DOM
        expect(screen.queryByTitle("Youtube video")).not.toBeInTheDocument()

        const playButton = screen.getByRole("button", { name: /play button/i})
        fireEvent.click(playButton)

        // iframe appears in DOM after clicking play button
        expect(screen.queryByTitle("Youtube video")).toBeInTheDocument()
    })
})