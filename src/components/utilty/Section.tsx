export default function Section({ children, maxWidth = '1280px', height = '700px', className }: TypeProps) {
    return (
        <section className={`${className} w-full relative top-0 left-0 right-0 px-3`} style={{ maxWidth: maxWidth, height: height, zIndex: '0' }}>
            {children}
        </section>
    )
}

type TypeProps = {
    children: React.ReactNode,
    maxWidth?: string,
    height?: string,
    className?: string
}