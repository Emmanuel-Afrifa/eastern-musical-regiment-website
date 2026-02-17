const CoreStatementItem = ({title, description, selected, index, handleClick}: {
    title: string; description: string; selected: number; index: number; handleClick: () => void
}) => {
    return (
        <div 
            onClick={handleClick}
            className="w-full max-w-lg flex flex-col p-6 md:p-10 bg-bg-black rounded-3xl cursor-pointer"
        >
            <div className="flex justify-center items-center w-14 h-14 rounded-xl bg-bg-dark-gold mb-10 md:mb-12">
                <div className={`w-5 h-5 rounded-full border-2 ${selected === index ? "bg-gold border-transparent" : "bg-transparent border-gold"}`}></div>
            </div>
            <h4 className="text-white text-3xl md:text-4xl font-normal font-inter mb-8 md:mb-10">{title}</h4>
            <p className="text-fg-dark-gray text-base md:text-lg">{description}</p>
        </div>
    )
}

export default CoreStatementItem