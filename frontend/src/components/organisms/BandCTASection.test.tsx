import { render, screen } from "@testing-library/react";
import BandCTASection from "./BandCTASection";

describe("Band CTA Section", () => {
    beforeEach(() => {
        render(<BandCTASection />)
    })

    it("Renders title and link", () => {
        expect(screen.getByRole("heading", {level: 2})).toBeInTheDocument()
        expect(screen.getByRole("link", {name: /request a band link/i})).toBeInTheDocument()
    })

    it("Link has the necessary attributes", () => {
        const requestBandLink = screen.getByRole("link", {name: /request a band link/i})
        expect(requestBandLink).toHaveAttribute("href")
        expect(requestBandLink).toHaveAttribute("target", "_blank")
        expect(requestBandLink).toHaveAttribute("rel", "noopener noreferrer")
        expect(requestBandLink.getAttribute("href")).toMatch(/^https?:\/\//)
    })
})