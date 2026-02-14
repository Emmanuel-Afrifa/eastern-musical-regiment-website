import { cn } from "@/src/lib/cn";

const Section = ({children, bgColor = "bg-bg-black"}: {
    children: React.ReactNode; bgColor?: string
}) => {
    return (
        <section className={cn("w-full center py-28", bgColor)}>
            {children}
        </section>
    )
}

export default Section