import Section from "../../utilty/Section";
import imgTittle from "../../../assets/global/imgTittleCTA.png"
import imgMain from "../../../assets/global/imgMainCTA.png";
import ButtonEl from "../../elements/ButtonEl";
import { Link } from "react-router-dom";

export default function CTA() {
    return (
        <Section className="pt-20" height="max-content">
            <div className="mb-12 lg:mb-16 relative flex flex-col items-center justify-center">
                <img src={imgTittle} className="w-1/2 sm:w-2/5 md:w-1/3 lg:w-1/4 mb-6" />
                <h1 className="w-full text-wrap text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center tracking-tight sm:tracking-wide">Interested in <br /> Working Together?</h1>
                <ButtonEl type="button" variant="primary" className="flex items-center gap-3">
                    <Link to={"/contact"}>Get It Touch</Link>
                    <i className="fa-solid fa-angle-right animateX"></i>
                </ButtonEl>
            </div>
            <div className="relative">
                <img src={imgMain} className="w-full" />
                <div className="absolute top-0 left-0 right-0 w-full h-full bg-gradient-to-b from-transparent to-bg"></div>
            </div>
        </Section>
    )
} 