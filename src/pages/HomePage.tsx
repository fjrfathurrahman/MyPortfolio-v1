import Hero from "../components/layouts/home/Hero";
import Reviews from "../components/layouts/home/Reviews";
import Page from "../components/utilty/Pages";

export default function HomePage() {
    return (
        <Page>
            <Hero/>
            <Reviews/>
        </Page>
    )
}