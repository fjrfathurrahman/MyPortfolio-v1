import { Link } from "react-router-dom";
import { dataProjects } from "../../../data/global";
import TittleEl from "../../elements/TittleEl";
import Section from "../../utilty/Section";
import ButtonEl from "../../elements/ButtonEl";

export default function Projects() {
    return (
        <Section height="max-content">
            <TittleEl>Here Are My <br className="block lg:hidden" /> Favorite Projects.</TittleEl>

            <div className="parent sm:px-9 xl:px-0">
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                    {dataProjects.Projects.map((item: any, index: number) => (
                        <Project key={index}
                            img={item.img}
                            tittle={item.tittle}
                            description={item.description}
                            urlGithub={item.url.urlGithub}
                            urlWebsite={item.url.urlWebsite} />
                    ))}
                </div>
                <ButtonEl type="button" variant="secondary" className="w-full">
                    <Link to={"/projects"}>See More</Link>
                </ButtonEl>
            </div>
        </Section>
    )
}

const Project = ({ img, tittle, description, urlGithub, urlWebsite }: { img: string, tittle: string, description: string, urlGithub: string, urlWebsite: string }) => {
    return (
        <div className="project w-full p-3 xl:p-5 border-2 border-white/15 rounded-xl hover:border-primary/70 hover:scale-95 bg-bg duration500">
            <img src={img} className="rounded-xl w-full" />
            <div className="mt-5 mb-2 flex justify-between items-center">
                <h1 className="font-semibold text-base md:text-lg cursor-pointer">{tittle}</h1>
                <div className="flex gap-3 text-sm text-primary">
                    <Link to={urlGithub}><i className="fa-brands fa-github"></i></Link>
                    <Link to={urlWebsite}><i className="fa-solid fa-arrow-up-right-from-square"></i></Link>
                </div>
            </div>
            <p className="text-xs sm:text-sm text-paragraph text-pretty tracking-wide">{description}</p>
        </div>
    )
}