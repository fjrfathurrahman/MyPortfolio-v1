import { Link } from "react-router-dom";
import Section from "../../utilty/Section";
import ButtonEl from "../../elements/ButtonEl";

export default function Hero() {
    const hello = <h3 className="text-sm sm:text-base md:text-lg xl:text-xl mb-1">Hello, I'm Fajar Fathurrahman.</h3>
    const headline = <h1 className="text-4xl md:text-5xl xl:text-6xl font-[900] cursor-pointer">I enjoy <span className="text-primary">building</span> and <br className="hidden sm:block" /> <span className="text-primary">designing</span> for the web.</h1>
    
    return (
        <Section>
            <div className="w-full h-full flex flex-col justify-center items-center text-center">
                {hello}
                {headline}
                <ButtonEl type="button" variant="primary">
                    <Link to="/about" className="">Find Out More<i className="ms-2 fa-solid fa-arrow-trend-up"></i></Link>
                </ButtonEl>
            </div>
        </Section>
    )
}