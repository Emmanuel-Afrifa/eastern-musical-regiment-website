import { render, screen } from "@testing-library/react"
import MusicalLegacySection from "./MusicalLegacySection"

describe("Legacy Section", () => {

    beforeEach(() => {
        render(<MusicalLegacySection />)
    })

    it("renders story button link", () => {
        expect(screen.getByRole("button", {name: /learn our story button/i})).toBeInTheDocument()
    })

    it("button link has href attribute", () => {
        expect(screen.getByRole("link")).toHaveAttribute("href", "/about#journey")
    })
})