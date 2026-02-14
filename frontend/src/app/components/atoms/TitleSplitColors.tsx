import { cn } from "@/src/lib/cn"

type TitleProps = {
    firstTitle: string;
    secondTitle: string;
    firstColor?: string;
    secondColor?: string;
    classname?: string;
}

const TitleSplitColors = ({firstTitle, secondTitle, firstColor = "text-white", secondColor = "text-gold", classname = ""}: 
    TitleProps
) => {
    return (
        <h2 className={cn("text-4xl md:text-5xl lg:text-6xl", firstColor, classname)}>
            {firstTitle} <br />
            <span className={cn(secondColor)}>{secondTitle}</span>
        </h2>
    )
}

export default TitleSplitColors