import { Link } from "react-router-dom";
import Section from "../../utilty/Section";
import ButtonEl from "../../elements/ButtonEl";
import { iconDesign } from "../../../data/iconDesign";

export default function Hero() {
    const hello = <h3 className="text-sm sm:text-base md:text-lg xl:text-xl mb-1">Hello, I'm Fajar Fathurrahman.</h3>
    const headline = <h1 className="text-4xl md:text-5xl xl:text-7xl font-[900]">I enjoy <span className="text-primary">building</span> and <br className="hidden sm:block" /> <span className="text-primary">designing</span> for the web.</h1>
    
    return (
        <Section className="heroELememt overflow-hidden" maxWidth="100%">
            <div className="w-full h-full flex flex-col justify-center items-center text-center">
                {hello}
                {headline}
                <ButtonEl type="button" variant="primary">
                    <Link to="/about" className="">Find Out More<i className="ms-2 fa-solid fa-arrow-trend-up"></i></Link>
                </ButtonEl>
            </div>

            <div className="absolute top-0 left-0 right-0 w-full h-full">
                <IconAbsolute icon={iconDesign.iconPuzzle} position="top-[9%] left-[9%] xl:left-[20%]" rotate="rotate-12"/>
                <IconAbsolute icon={iconDesign.iconShapes} position="top-[5%] right-[5%] xl:right-[18%]" rotate="-rotate-[28deg]" />
                <IconAbsolute icon={iconDesign.iconQR} position="bottom-[9%] right-[9%] xl:right-[20%]" rotate="rotate-45"/>
                <IconAbsolute icon={iconDesign.iconCodeBranch} position="bottom-[5%] left-[7%] xl:left-[18%]" rotate="rotate-12" />

                <IconAbsolute icon={iconDesign.iconCode} position="top-[13%] right-[24%] xl:right-[32%]" className="text-primary/70 text-7xl sm:text-8xl" rotate="-rotate-[28deg]" />
                <IconAbsolute icon={iconDesign.iconGhost} position="bottom-[24%] left-[10%] xl:left-[32%]" className="text-primary/70 text-7xl sm:text-8xl" rotate="rotate-[28deg]" />
                <IconAbsolute icon={iconDesign.iconGamepad} position="bottom-[20%] right-[10%] xl:right-[28%]" className="text-primary/70 text-7xl sm:text-8xl" rotate="-rotate-[28deg]" />
            </div>
        </Section>
    )
}

const IconAbsolute = ({position, icon, className = "text-white/10 text-8xl md:text-9xl", rotate} : {position : string, icon : string, className? : string, rotate? : string}) => {
    return (
        <div className={`${position} sqD absolute -z-50`}>
            <i className={`fa-solid fa-${icon} ${className} ${rotate}`}></i>
        </div>
    )
}