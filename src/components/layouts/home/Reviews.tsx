import { dataReview } from "../../../data/global";
import TittleEl from "../../elements/TittleEl";
import Section from "../../utilty/Section";

export default function Reviews() {
    return (
        <Section className="mt-36" height="max-content">
            <TittleEl>
                Why People Love <br className="md:hidden block" /> My Work.
            </TittleEl>
            <div className="parent grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <CardComent dataArray={dataReview.Reviews} />
            </div>
        </Section>
    )
}

const CardComent = ({ dataArray = [], }: { dataArray?: any[] }) => {
    return (

        dataArray.map((item: any, index: number) => (
            <div key={index} className={`relative p-5 w-full border-2 border-white/15 rounded-xl duration500 group hover:border-primary/70 bg-bg`}>
                <div className="profile mb-4 flex items-center gap-3">
                    <img src={item.image} className="w-9 h-9 md:w-10 md:h-10 rounded-full" alt={item.name} />
                    <h3 className="font-medium text-base md:text-lg">{item.name}</h3>
                </div>
                <p className="text-xs md:text-sm text-paragraph text-pretty tracking-wide">"{item.description}"</p>

                <i className="fa-solid fa-quote-left absolute -bottom-6 -left-3 text-4xl -rotate-6 -z-50 text-white/50 group-hover:text-white duration500 md:hidden"></i>
                <i className="fa-solid fa-quote-right absolute -top-4 -right-3 text-4xl rotate-6 text-primary"></i>
            </div>

        ))

    )
}