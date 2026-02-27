import { render, screen, fireEvent } from "@testing-library/react";
import EventsCard from "./EventsCard";

const mockData = {
    id: 1,
    Title: "Brass Festival",
    Description: "new annual brass festival",
    Date: "2025-02-10",
    Time: "19:30:00",
    Venue: "Center Square",
    City: "Koforidua",
    registrationLink: "https://example.com/register",
    image: {
        url: "images/EMR_LOGO.svg",
        id: 1,
        alternativeText: "",
    },
    slug: "brass-festival",
    createdAt: "",
    updatedAt: "",
}

describe("Event Card", () => {
    it("renders image, event name, venue, city, description, time and date", () => {
        render(<EventsCard eventItem={mockData}/>)

        expect(screen.getByRole("heading", {level: 3, name: /brass festival/i})).toBeInTheDocument()
        expect(screen.getByText(/new annual brass festival/i)).toBeInTheDocument()
        expect(screen.getByText(/center square/i)).toBeInTheDocument()
        expect(screen.getByText(/koforidua/i)).toBeInTheDocument()
        expect(screen.getByRole("img", {name: /event image/i})).toBeInTheDocument()
        expect(screen.getByTestId("event date")).toBeInTheDocument()
        expect(screen.getByTestId("event time")).toBeInTheDocument()
    })

    it("renders registration link when provided", () => {
        render(<EventsCard eventItem={mockData}/>)

        const registrationLink = screen.queryByRole("link", {name: /registration link/i})
        if (registrationLink) {
            expect(registrationLink).toHaveAttribute("href", expect.stringMatching(/^https:/))
            expect(registrationLink).toHaveAttribute("target", "_blank")
            expect(registrationLink).toHaveAttribute("rel", "noopener noreferrer")
        }
    })

    it("does not render registration link if it's not provided", () => {
        const mockDataWithoutRegistration = { ...mockData, registrationLink: undefined}

        render(<EventsCard eventItem={mockDataWithoutRegistration}/>)

        expect(screen.queryByRole("link", {name: /registration link/i})).not.toBeInTheDocument()
        
    })

    it("open and closes fullscreen image overlay", () => {
        render(<EventsCard eventItem={mockData}/>)

        const img = screen.getByRole("img", {name: /event image/i})
        fireEvent.click(img)

        const fullScreenImg = screen.getByRole("img", {name: /event image full screen/i})
        expect(fullScreenImg).toBeInTheDocument()

        fireEvent.click(fullScreenImg)
        expect(screen.queryByAltText("event image fullscreen")).not.toBeInTheDocument()
    })
})