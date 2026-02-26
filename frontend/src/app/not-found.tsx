import Link from "next/link"
export default function NotFound() {
    return (
        <div className="w-full h-screen flex justify-center items-center px-10 bg-bg-black">
            <div className="flex flex-col gap-6">
                <h1 className="overflow-hidden whitespace-nowrap tracking-[8px] text-5xl md:text-6xl text-white animate-text-reveal text-shadow-lg text-shadow-gold/50">404</h1>
                <p className="text-fg-fade-white">Sorry, the page you requested is unavailable</p>
                <Link 
                    href="/"
                    className="font-inter text-gold"
                >
                    <span className="bg-grow z-0 hover:px-5 hover:text-fg-black inline-block duration-500">Let&apos;s take you home</span>
                </Link>
            </div>
        </div>
    )
}
