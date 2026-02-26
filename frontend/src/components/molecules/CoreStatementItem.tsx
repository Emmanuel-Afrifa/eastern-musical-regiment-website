"use client"
import { useState } from "react"

type StatementProp = {
    title: string;
    description: string;
}

const CoreStatementItem = ({statement}: {statement: StatementProp[]}) => {
    const [selectedIndex, setSelectedIndex] = useState<number>(0)
    const selectedStatement = statement[selectedIndex]
    const itemsArray = Array.from({length: statement.length}, (_, index) => index)

    return (
        <div 
            className="w-full max-w-lg flex h-fit flex-col p-6 md:p-10 bg-bg-black rounded-3xl"
        >
            <div className="flex gap-8">
                {itemsArray.map((itemIndex) => {
                    return (
                        <div 
                            key={itemIndex} 
                            onClick={() => setSelectedIndex(itemIndex)}
                            className={`flex justify-center items-center w-14 h-14 rounded-xl cursor-pointer ${itemIndex === selectedIndex ? "bg-bg-dark-gold" : "bg-gray-700"}  mb-10 md:mb-12`}
                        >
                            <div className={`w-5 h-5 rounded-full border-2 ${itemIndex === selectedIndex ? "bg-gold border-transparent" : "bg-transparent border-white"}`}></div>
                        </div>
                    )
                })}
            </div>
            <h4 className="text-white text-3xl md:text-4xl font-normal font-inter mb-8 md:mb-10">{selectedStatement.title}</h4>
            <p className="text-fg-dark-gray text-base md:text-lg">{selectedStatement.description}</p>
        </div>
    )
}

export default CoreStatementItem