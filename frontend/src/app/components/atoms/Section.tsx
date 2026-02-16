import { cn } from "@/src/lib/cn";

const Section = ({children, bgColor = "bg-bg-black", classname}: {
    children: React.ReactNode; bgColor?: string, classname?: string
}) => {
    return (
        <section className={cn("w-full center py-28", bgColor, classname)}>
            {children}
        </section>
    )
}

export default Section