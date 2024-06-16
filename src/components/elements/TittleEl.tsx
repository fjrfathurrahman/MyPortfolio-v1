export default function TittleEl({children} : {children: React.ReactNode}) {
    return (
        <div className="my-12 text-center lg:text-start space-y-3 lg:space-y-0 lg:flex flex-row-reverse items-center justify-center gap-6">
            <div className="w-1/3 lg:w-full h-1.5 mx-auto bg-primary rounded-lg"></div>
            <h1 className="w-full text-nowrap lg:max-w-max text-2xl sm:text-3xl font-bold">{children}</h1>
        </div>
    )
}