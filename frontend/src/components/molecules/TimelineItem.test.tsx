import { render, screen } from "@testing-library/react";
import TimelineItem from "./TimelineItem";

const mockData = {
    title: "foundation",
    year: "2020",
    description: "milestone description"
}

describe("Timeline Item component", () => {
    beforeEach(() => {
        render(<TimelineItem timelineDetails={mockData} index={0} />)
    })

    it("Renders the title, year and description", () => {
        expect(screen.getByRole("heading", {level: 3, name: /foundation/i})).toBeInTheDocument()
        expect(screen.getByText(/2020/i)).toBeInTheDocument()
        expect(screen.getByText(/milestone description/i)).toBeInTheDocument()
    })
})