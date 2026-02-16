"use client"
import Section from "../atoms/Section"
import Container from "../atoms/Container"
import data from "../../../../public/data/data.json"
import CoreStatementItem from "../molecules/CoreStatementItem"
import { useState } from "react"

const CoreStatementsSection = () => {

    const [selected, setSelected] = useState<number>(0)

    const statementsData = data.coreStatements

    return (
        <Section bgColor="bg-fg-black border-b-1 border-b-fg-dark-gray/30">
            <Container>
                <div className="flex flex-wrap justify-center px-6 md:px-10 gap-16">
                    {statementsData.map((statement, index) => {
                        return (
                            <CoreStatementItem
                                key={statement.id}
                                title={statement.title}
                                description={statement.description}
                                index={index}
                                selected={selected}
                                handleClick={() => setSelected(index)}
                            />
                        )
                    })}
                </div>
            </Container>
        </Section>
    )
}

export default CoreStatementsSection