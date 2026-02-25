import Section from "../atoms/Section"
import Container from "../atoms/Container"
import data from "../../../public/data/data.json"
import CoreStatementItem from "../molecules/CoreStatementItem"

const CoreStatementsSection = () => {

    const statementsData = data.coreStatements

    return (
        <Section bgColor="bg-fg-black border-b-1 border-b-fg-dark-gray/30">
            <Container>
                <div className="flex flex-wrap justify-center px-6 md:px-10 gap-16">
                    <CoreStatementItem
                        statement={statementsData}
                    />
                </div>
            </Container>
        </Section>
    )
}

export default CoreStatementsSection