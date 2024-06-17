import CursorEl from "../elements/CursorEl"

export default function Section({ children, maxWidth = '1280px', height = '700px', className }: TypeProps) {
    return (
        <>
            <section className={`${className} w-full relative top-0 left-0 right-0 overflow`} style={{ maxWidth: maxWidth, height: height, zIndex: '0' }}>
                {children}
                <CursorEl />
            </section>
        </>
    )
}

type TypeProps = {
    children: React.ReactNode,
    maxWidth?: string,
    height?: string,
    className?: string
}