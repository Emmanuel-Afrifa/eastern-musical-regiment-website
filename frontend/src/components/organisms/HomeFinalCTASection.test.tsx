import { render, screen } from "@testing-library/react";
import HomeFinalCTASection from "./HomeFinalCTASection";

describe("Home Final CTA Section component", () => {
    beforeEach(() => {
        render(<HomeFinalCTASection />)
    })

    it("Renders the heading and link", () => {
        expect(screen.getByRole("heading", {level: 2})).toBeInTheDocument()
        expect(screen.getByRole("link", { name: /join the regiment today link/i})).toBeInTheDocument()
    })

    it("Link has required attributes", () => {
        const joinLink = screen.getByRole("link", { name: /join the regiment today link/i})
        expect(joinLink).toHaveAttribute("href")
        expect(joinLink).toHaveAttribute("target", "_blank")
        expect(joinLink).toHaveAttribute("rel", "noopener noreferrer")
        expect(joinLink.getAttribute("href")).toMatch(/^https?:\/\//)
    })
})