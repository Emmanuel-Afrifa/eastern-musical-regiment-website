type TimelineProps = {
    timelineDetails: {
        id: string;
        title: string;
        year: string;
        description: string;
    }
    index: number
}

const TimelineItem = ({timelineDetails, index}: TimelineProps) => {

    const isLeft = index % 2 === 0

    return (
        <div className="relative w-full grid md:grid-cols-2 items-center my-14 md:my-8">
            {/* Item Placement */}
            <div
                className={`${isLeft ? "md:col-start-1 md:text-right": "md:col-start-2 md:text-left"}`}
            >
                <div className={`flex flex-col items-center ${isLeft ? "md:flex-row-reverse": "md:flex-row"}`}>
                    <div className={`hidden md:flex justify-center ${isLeft ? "md:translate-x-1/2" : "md:-translate-x-1/2"}`}>
                        <div className="w-4 h-4 rounded-full bg-gold z-5"></div>
                    </div>
                    <div className={`${isLeft ? "md:mr-5 lg:mr-10" : "md:ml-5 lg:ml-10"}`}>
                        <p className="text-base lg:text-lg">
                            <span className="inline-block px-6 py-1 rounded-full bg-gold text-fg-black font-semibold">
                                {timelineDetails.year}
                            </span>
                        </p>
                        <h4 className="font-semibold font-inter text-white text-xl md:text-2xl lg:text-3xl xl:text-4xl my-4 md:my-6">
                            {timelineDetails.title}
                        </h4>
                        <p className="text-fg-gray text-sm md:text-base lg:text-lg mb-6 md:mb-0">
                            {timelineDetails.description}
                        </p>
                    </div>

                    <div className="md:hidden block w-full h-0.5 bg-fg-gray/20"></div>
                </div>
            </div>

            {/* Center Circle */}
            
        </div>
    )
}

export default TimelineItem