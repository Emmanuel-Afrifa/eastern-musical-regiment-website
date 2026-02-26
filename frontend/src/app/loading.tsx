export default function Loading() {
    return (
        <div className='w-full h-screen flex items-center justify-center bg-bg-black'>
            <div className="flex flex-col items-center">
                <h2 className=" overflow-hidden whitespace-nowrap tracking-[6px] text-5xl md:text-6xl text-fg-black font-montserrat font-bold animate-text-reveal text-shadow-lg text-shadow-gold/60">
                    EMR
                </h2>
                <div
                    className="mt-3 w-40 h-1 bg-gold/75 animate-line-reveal opacity-0"
                ></div>
            </div>
        </div>
    )
}
