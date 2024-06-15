import React from "react";
import Navigation from "../global/Navigation";
import Footer from "../global/Footer";


export default function Page({ children }: { children: React.ReactNode }) {

    return (
        <main className="relative top-0 left-0 right-0 z-[9999]">
            <div className="flex flex-col items-center justify-center">
                <Navigation />
                {children}
                <Footer/>
            </div>
        </main>
    )
}