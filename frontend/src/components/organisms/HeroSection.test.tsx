import { render, screen } from "@testing-library/react"
import HeroSection from "./HeroSection"

describe("Hero Section", () => {

    beforeEach(() => {
        render(<HeroSection />)
    })

    it("Renders heading element", () => {
        expect(screen.getByRole("heading", {level: 1})).toBeInTheDocument()
    })

    it("Renders the two links", () => {
        expect(screen.getByRole("link", { name: /join regiment link/i})).toBeInTheDocument()
        expect(screen.getByRole("link", { name: /request a band link/i})).toBeInTheDocument()
    })

    it("Links have the required attributes", () => {
        const names = [/join regiment link/i, /request a band link/i]

        names.forEach(name => {
            const link = screen.getByRole("link", { name })
            expect(link).toHaveAttribute("href")
            expect(link).toHaveAttribute("target", "_blank")
            expect(link).toHaveAttribute("rel", "noopener noreferrer")
            expect(link.getAttribute("href")).toMatch(/^https?:\/\//)
        })
    })
})