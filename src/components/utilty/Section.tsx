export default function Section({ children, maxWidth = '1280px', minHeight = '700px' }: { children: React.ReactNode, maxWidth?: string, minHeight?: string }) {
    return (
        <section className="w-full relative top-0 left-0 right-0 p-2 border" style={{ maxWidth: maxWidth, minHeight: minHeight }}>
            {children}
        </section>
    )
}