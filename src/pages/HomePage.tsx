import CursorEl from "../components/elements/CursorEl";
import CTA from "../components/layouts/home/CTA";
import Hero from "../components/layouts/home/Hero";
import Projects from "../components/layouts/home/Projects";
import Reviews from "../components/layouts/home/Reviews";
import Page from "../components/utilty/Pages";

export default function HomePage() {
    return (
        <Page>
            <Hero/>
            <Projects/>
            <Reviews/>
            <CTA/>
            <CursorEl />
        </Page>
    )
}