import React from "react";
import useWindowSize from "../../hooks/useWindowSize";

export default function CursorEl() {
    const [position, setPosition] = React.useState({ x: 0, y: 0 });
    const { width } = useWindowSize();

    React.useEffect(() => {

        const onMouseMove = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        document.addEventListener("mousemove", onMouseMove);

        return () => {
            document.removeEventListener("mousemove", onMouseMove);
        };

    }, [width]);

    return (
        <div className={`cursor-dot h-3 w-3 bg-white/70 shadow-md shadow-black/25 xl:block hidden`} style={{ left: `${position.x}px`, top: `${position.y}px` }}/>
    );
}
