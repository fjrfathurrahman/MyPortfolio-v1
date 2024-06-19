import { iconsSkills } from "../../../data/global";
import { iconDesign } from "../../../data/iconDesign";
import Section from "../../utilty/Section";

export default function AboutMe() {
    return (
        <Section height="max-content" maxWidth="100%" className="relative">
            <div style={{ maxWidth: '1280px' }} className="mx-auto space-y-12 my-12">
                <ComponentAbout />
                <ComponentGoals />
                <MySkills />
            </div>

            <div className="w-full h-full absolute *:absolute top-0 left-0 hidden xl:block">
                <div className="top-28 left-44 -rotate-12">
                    <i className={`fa-solid fa-${iconDesign.iconCodeBranch} text-9xl text-white/5`}></i>
                </div>
                <div className="top-72 right-44 -rotate-12">
                    <i className={`fa-solid fa-${iconDesign.iconFile} text-8xl text-white/5`}></i>
                </div>
                <div className="bottom-6 right-32 -rotate-12">
                    <i className={`fa-solid fa-${iconDesign.iconQR} text-9xl text-white/5`}></i>
                </div>
                <div className="bottom-1/3 left-16 rotate-12">
                    <i className={`fa-solid fa-${iconDesign.iconFolder} text-8xl text-white/5`}></i>
                </div>
                <div className="bottom-24 left-1/3 rotate-12">
                    <i className={`fa-solid fa-${iconDesign.iconComputer} text-8xl text-white/5`}></i>
                </div>
            </div>
        </Section>
    )
}

const Tittle = ({ text, icon }: { text: string, icon: string }) => {
    return (
        <div className="flex gap-3 lg:gap-6 items-center">
            <i className={`${icon} text-primary text-2xl md:text-3xl`}></i>
            <h1 className="font-bold text-2xl md:text-4xl ">{text}</h1>
        </div>
    )
}

const ComponentAbout = () => {
    return (
        <div className="space-y-3">
            <Tittle text="About Me" icon={`fa-solid fa-${iconDesign.iconUser}`} />
            <p className="text-sm md:text-base text-pretty text-paragraph leading-relaxed tracking-wide">
                Hello, I am <span className="underline-offset-2 underline decoration-indigo-500 font-bold text-white">Fajar Fathurrahman</span>, born in <span className="underline-offset-2 underline decoration-sky-500 font-bold text-white">Bandung, September 25, 2006</span>. I am a vocational student who wants to become a Front-End Developer and Web Designer. With high passion and dedication to learn, I strive to create visually appealing and user-friendly websites.
            </p>
            <p className="text-sm md:text-base text-pretty text-paragraph leading-relaxed tracking-wide">
                My interest in web development and design started to grow when I entered vocational school. I started learning about <span className="text-orange-700 font-bold">HTML</span>, <span className="text-sky-300 font-bold">CSS</span>, and <span className="text-yellow-300 font-bold">JavaScript</span>, and became more interested when I saw how code could be transformed into visually appealing displays. As time went on, I started to explore further into web design. I learned to use design tools like Figma to create wireframes and prototypes. In addition, I started to understand the importance of responsive design and how to make sure websites look good on various devices, from desktops to smartphones. Currently, I have started some more complex personal projects. I've been working with frameworks like React.js to create interactive web applications. I've also learned about web performance optimization, ensuring that the sites I create are not only visually appealing but also fast and efficient.
            </p>
        </div>
    )
}

const ComponentGoals = () => {
    return (
        <div className="space-y-3">
            <Tittle text="Future Goals." icon={`fa-solid fa-${iconDesign.iconRocket}`} />
            <p className="text-sm md:text-base text-pretty text-paragraph leading-relaxed tracking-wide">
                My goal for the future is to continue developing skills in frontend development and web design. I would like to take an active role in projects that allow me to combine design creativity with technical expertise in the creation of innovative and efficient websites. I am also interested in exploring progressive web technologies and modern design concepts.
            </p>
        </div>
    )
}

const MySkills = () => {

    return (
        <div className="py-12 border-t border-white/15">
            <Tittle text="My Skills." icon={`fa-solid fa-${iconDesign.iconCode}`} />
            <div className="lg:flex justify-between">
                <h3 className="w-full mt-3 mb-9 font-mono font-bold text-lg md:text-2xl">I got the experience.<br /> Here is my toolbelt for success.</h3>
                <div className="w-full grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 xl:grid-cols-6 gap-y-6 lg:gap-x-6">
                    {iconsSkills.map((item: any) => (
                        <div key={item.tittle} className="w-full text-center">
                            <img src={item.icon} alt={item.tittle} className="w-9 h-9 md:w-12 md:h-12 mx-auto object-contain" />
                            <p className="mt-3 font-semibold text-sm ms:text-base">{item.tittle}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
