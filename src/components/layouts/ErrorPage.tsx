import React from "react";
import Section from "../utilty/Section";
import { randomNumberText } from "../../hooks/useRandomNumber";
import { Link } from "react-router-dom";
import ButtonEl from "../elements/ButtonEl";

export default function ErrorPage() {
    const [num404, setNum404] = React.useState("0000");

    React.useEffect(() => {
        randomNumberText("404", setNum404);
    }, []);

    return (
        num404 !== "0000" && (
            <Section height="100vh">
                <div className="h-full flex items-center justify-center flex-col text-center">
                    <h1 className="mb-2 text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold">{`{ Error : ${num404} }`}</h1>
                    <p className="text-sm sm:text-base md:text-lg text-paragraph">Sorry, looks like that page is missing!&nbsp;&nbsp;</p>
                    <ButtonEl type="button" variant="secondary">
                        <Link to={"/"}>Go Home</Link>
                    </ButtonEl>
                </div>
            </Section>
        )
    )
}