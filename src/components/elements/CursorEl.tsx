import React from "react";

export default function CursorEl() {
    React.useEffect(() => {
        const cursor = document.querySelector('.custom-cursor') as HTMLElement;

        const moveCursor = (e: MouseEvent) => {
            cursor.style.left = `${e.pageX}px`;
            cursor.style.top = `${e.pageY}px`;
        };

        document.addEventListener('mousemove', moveCursor);

        return () => {
            document.removeEventListener('mousemove', moveCursor);
        };
    }, []);

    return (
        <div className="custom-cursor"></div>
    )
} 