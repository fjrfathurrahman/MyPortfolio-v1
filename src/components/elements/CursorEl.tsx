import React from "react";

export default function CursorEl() {
    const [position, setPosition] = React.useState({ x: 0, y: 0 });

    React.useEffect(() => {
        const onMouseMove = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        document.addEventListener("mousemove", onMouseMove);

        return () => {
            document.removeEventListener("mousemove", onMouseMove);
        };
    }, []);

    return (
        <div className="cursor-dot w-3 h-3 bg-white/50 hidden xl:block" style={{ left: `${position.x}px`, top: `${position.y}px` }}>
        </div>
    );
}
