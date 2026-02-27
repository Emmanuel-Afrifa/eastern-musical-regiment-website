import { render, screen } from "@testing-library/react"
import Footer from "./Footer"

describe("Footer Section component", () => {
    beforeEach(() => {
        render(<Footer/>)
    })

    it("Renders all quick links", () => {
        expect(screen.getByRole("link", {name: /home/i})).toBeInTheDocument()
        expect(screen.getByRole("link", {name: /about us/i})).toBeInTheDocument()
        expect(screen.getByRole("link", {name: /our bands/i})).toBeInTheDocument()
        expect(screen.getByRole("link", {name: /events/i})).toBeInTheDocument()
    })

    it("All links have the correct attributes and work as expected", () => {
        expect(screen.getByRole("link", {name: /home/i})).toHaveAttribute("href", "/#hero")
        expect(screen.getByRole("link", {name: /about us/i})).toHaveAttribute("href", "/about")
        expect(screen.getByRole("link", {name: /our bands/i})).toHaveAttribute("href", "/bands")
        expect(screen.getByRole("link", {name: /events/i})).toHaveAttribute("href", "/events")
    })


    it("Renders Phone number and Email Address", () => {
        const contactDetails = [
            {name: /phone contact/i, hrefStart: /^tel:/i },
            {name: /email address/i, hrefStart: /^mailto:/i }
        ]

        contactDetails.forEach(({name, hrefStart}) => {
            const contactLink = screen.getByRole("link", { name })
            expect(contactLink).toBeInTheDocument()
            expect(contactLink).toHaveAttribute("href", expect.stringMatching( hrefStart ))
            expect(contactLink).toHaveAttribute("target", "_blank")
            expect(contactLink).toHaveAttribute("rel", "noopener noreferrer")
        })
    })
})