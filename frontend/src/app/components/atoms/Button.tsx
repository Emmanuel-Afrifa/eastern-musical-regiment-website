"use client"

type ButtonProps = {
    content: string | React.ReactNode;
    classname: string;
    ariaLabel: string;
    type?: "submit" | "button" | "reset";
    disabled?: boolean;
    handleClick?: () => void
}

const Button = ({content, classname, ariaLabel, type = "button", handleClick = () => {}, disabled = false}: 
    ButtonProps) => 
{
    return (
        <button
            aria-label={ariaLabel}
            className={classname}
            type={type}
            disabled={disabled}
            onClick={handleClick}
        >
            {content}
        </button>
    )
}

export default Button