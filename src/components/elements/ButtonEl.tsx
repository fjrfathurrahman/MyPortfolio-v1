const style = {
    primary: "py-3 lg:py-3.5 px-6 lg:px-8 my-6 lg:my-8 border-2 rounded-xl group hover:bg-primary hover:border-primary text-white text-sm sm:text-base md:text-lg xl:text-xl font-semibold",
    secondary: "py-3 lg:py-3.5 px-6 lg:px-8 my-6 lg:my-8 border-2 border-primary rounded-xl hover:scale-95 text-primary text-sm sm:text-base md:text-lg xl:text-xl font-semibold",
    none: ""
}

export default function ButtonEl({ children, className, onClick = () => console.log("clicked"), type, variant = "none" } : TypeProps) {
    const classNameVariant = style[variant]

    return (
        <button onClick={onClick} type={type} className={`${className} ${classNameVariant} duration500 `}>
            {children}
        </button>
    )
}

type TypeProps = {
    children: React.ReactNode,
    className?: string,
    onClick?: () => void,
    type: "button" | "submit" | "reset",
    variant?: "primary" | "secondary" | "none"
}