import { render, screen } from "@testing-library/react";
import LeaderCard from "./LeaderCard";

const mockData = {
    id: "00",
    name: "leader name",
    role: "leader role",
    bio: "leader bio",
    email: "leaderemail@example.com",
    phone: "233XXXXXXXXX",
    image: {
        src: "/images/EMR_LOGO.svg",
        alt: "leader image"
    },
    socials: {
        facebook: "abcd",
        instagram: "abcd",
        whatsapp: "abcd",
        x: "abcd",
        linkedin: "abcd",
        tiktok: "abcd",
        youtube: "abcd"
    }
}

const socialLinks = [
    {name: /leader role's facebook page/i, domain: "facebook.com"},
    {name: /leader role's X, (formerly twitter) page/i, domain: "x.com"},
    {name: /leader role's linkedin page/i, domain: "linkedin.com"},
    {name: /leader role's instagram page/i, domain: "instagram.com"},
    {name: /leader role's youtube page/i, domain: "youtube.com"},
    {name: /leader role's tiktok page/i, domain: "tiktok.com"},
    {name: /leader role's whatsapp contact/i, domain: "wa.me"},
]

describe("Leader Card component", () => {

    beforeEach(() => {
        render(<LeaderCard leaderInfo={mockData}/>)
    })

    it("Renders image, name, role and bio", () => {
        expect(screen.getByRole("img")).toBeInTheDocument()
        expect(screen.getByRole("heading", {level: 3})).toBeInTheDocument()
        expect(screen.getByText(/leader role/i)).toBeInTheDocument()
        expect(screen.getByText(/leader bio/i)).toBeInTheDocument()
    })

    it("Renders phone number if provided and have the necessary attributes", () => {
        const phoneLink = screen.queryByRole("link", {name: /leader role's phone number/i})
        if (phoneLink) {
            expect(phoneLink).toBeInTheDocument()
            expect(phoneLink).toHaveAttribute("href", expect.stringMatching(/^tel:/))
            expect(phoneLink).toHaveAttribute("target", "_blank")
            expect(phoneLink).toHaveAttribute("rel", "noopener noreferrer")
        }
    })

    it("Renders email if provided and have the necessary attributes", () => {
        const emailLink = screen.queryByRole("link", {name: /leader role's email address/i})
        if (emailLink) {
            expect(emailLink).toBeInTheDocument()
            expect(emailLink).toHaveAttribute("href", expect.stringMatching(/^mailto:/))
            expect(emailLink).toHaveAttribute("target", "_blank")
            expect(emailLink).toHaveAttribute("rel", "noopener noreferrer")
        }
    })

    it("Renders available social media links and have the necessary attributes", () => {
        socialLinks.forEach(({name, domain}) => {
            const mediaLink = screen.queryByRole("link", { name })
            if (mediaLink) {
                expect(mediaLink).toBeInTheDocument()
                expect(mediaLink).toHaveAttribute("href", expect.stringContaining(domain))
                expect(mediaLink).toHaveAttribute("target", "_blank")
                expect(mediaLink).toHaveAttribute("rel", "noopener noreferrer")
            }
        })
    })


})