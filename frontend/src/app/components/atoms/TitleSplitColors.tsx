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
        <h2 className={cn("section-header-text", firstColor, classname)}>
            {firstTitle} <br />
            <span className={cn(secondColor)}>{secondTitle}</span>
        </h2>
    )
}

export default TitleSplitColors