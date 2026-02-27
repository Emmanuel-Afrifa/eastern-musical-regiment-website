import { render, screen, fireEvent } from "@testing-library/react";
import EventsSection from "./EventsSection";

const mockData = [
    {
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
    },
    {
        id: 2,
        Title: "Drums Festival",
        Description: "annual drum off",
        Date: "2025-01-10",
        Time: "19:30:00",
        Venue: "Church",
        City: "Koforidua",
        registrationLink: "https://example.com/register",
        image: {
            url: "images/EMR_LOGO.svg",
            id: 1,
            alternativeText: "",
        },
        slug: "drums-festival",
        createdAt: "",
        updatedAt: "",
    }
]

describe("Events Section component", () => {

    beforeEach(() => {
        render(<EventsSection events={mockData} />)
    })

    it("Renders previous and next buttons", () => {
        expect(screen.getByRole("button", {name: /previous button/i})).toBeInTheDocument()
        expect(screen.getByRole("button", {name: /next button/i})).toBeInTheDocument()
    })

    it("Clicking the previous and next buttons changes the media and updates the counter accordingly", () => {
        const previousButton = screen.getByRole("button", {name: /previous button/i})
        const nextButton = screen.getByRole("button", {name: /next button/i})

        // Initially shows the first event and counter 
        expect(screen.getByRole("heading", {level: 3, name: /brass festival/i})).toBeInTheDocument()
        expect(screen.getByText("1/2")).toBeInTheDocument()

        // Clicking the next button navigates to the next (second) event and updates the counter
        fireEvent.click(nextButton)
        expect(screen.getByRole("heading", {level: 3, name: /drums festival/i})).toBeInTheDocument()
        expect(screen.getByText("2/2")).toBeInTheDocument()

        // Clicking the previous button navigates to the previous (first) event and updates the counter
        fireEvent.click(previousButton)
        expect(screen.getByRole("heading", {level: 3, name: /brass festival/i})).toBeInTheDocument()
        expect(screen.getByText("1/2")).toBeInTheDocument()


    })
})