import { render, screen, fireEvent } from "@testing-library/react";
import HeaderNavLinks from "./HeaderNavLinks";

jest.mock("next/navigation", () => ({
    usePathname: () => "/"
}))

describe("Header Navigation Links", () => {
    beforeEach(() => {
        // simulate mobile width
        Object.defineProperty(window, "innerWidth", {
            writable: true,
            configurable: true,
            value: 375,
        })
        window.dispatchEvent(new Event("resize"))

        render(<HeaderNavLinks />)
    })

    it("renders all navigation links", () => {
        expect(screen.getByRole("link", {name: /home/i})).toBeInTheDocument()
        expect(screen.getByRole("link", {name: /about us/i})).toBeInTheDocument()
        expect(screen.getByRole("link", {name: /our bands/i})).toBeInTheDocument()
        expect(screen.getByRole("link", {name: /events/i})).toBeInTheDocument()
    })

    it("all links have the correct attributes and work as expected", () => {
        expect(screen.getByRole("link", {name: /home/i})).toHaveAttribute("href", "/")
        expect(screen.getByRole("link", {name: /about us/i})).toHaveAttribute("href", "/about")
        expect(screen.getByRole("link", {name: /our bands/i})).toHaveAttribute("href", "/bands")
        expect(screen.getByRole("link", {name: /events/i})).toHaveAttribute("href", "/events")
    })

    it("hamburger menu opens and closes", () => {
        const hamburgerButton = screen.getByRole("button", {name: /navbar open button/i})
        fireEvent.click(hamburgerButton)

        const closeButton = screen.getByRole("button", {name: /navbar close button/i})
        expect(closeButton).toBeInTheDocument()

        fireEvent.click(closeButton)
        expect(hamburgerButton).toBeInTheDocument()
    })
})