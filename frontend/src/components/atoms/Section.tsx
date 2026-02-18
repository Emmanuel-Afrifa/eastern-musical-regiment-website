import { cn } from "@/src/lib/cn";

const Section = ({children, classname, bgColor = "bg-bg-black", id = ""}: {
    children: React.ReactNode; bgColor?: string, classname?: string; id?: string;
}) => {
    return (
        <section id={id} className={cn("w-full center py-28", bgColor, classname)}>
            {children}
        </section>
    )
}

export default Section