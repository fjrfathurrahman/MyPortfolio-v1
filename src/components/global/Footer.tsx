 import { Link } from "react-router-dom";
import { dataFooter, dataNavigation } from "../../data/global";
import Section from "../utilty/Section";
import React from "react";

export default function Footer() {

    React.useEffect(() => {
        // Fungsi untuk mengubah warna ikon secara acak antara putih dan biru
        const ChangeColors = () => {
            const iconElements = document.querySelectorAll('.icon');
            iconElements.forEach(icon => {
                const newColorClass = Math.random() > 0.3 ? 'text-white/15' : 'text-primary';
                icon.classList.remove('text-white/15', 'text-primary');
                icon.classList.add(newColorClass);
            });
        };

        // Mengatur interval untuk memanggil fungsi changeColors setiap 1 detik (2000 ms)
        const interval = setInterval(ChangeColors, 2000);

        // Membersihkan interval saat komponen tidak lagi digunakan
        return () => clearInterval(interval);
    });

    return (
        <Section height="max-content" className="border-t border-white/15 ">
            <div className="w-full h-full flex flex-row items-start justify-center mb-3 py-6">
                <Component tittle="PAGES" array={dataNavigation.Menu} />
                <Component tittle="SOSIAL" array={dataFooter.Sosial} />
                <DesignSosialMedia className="w-1/2 hidden sm:flex" array={dataFooter.DesignSosialMedia} />
            </div>
            <DesignSosialMedia className="w-full py-3 border-t border-white/15 flex sm:hidden" array={dataFooter.DesignSosialMedia} />
            <Copyright />
        </Section>
    )
}

const Component = ({ tittle, className = "w-1/2", array = [] }: TypePropsComponent) => {
    return (
        <div className={`${className}`}>
            <h1 className="text-main font-bold mb-3 sm:text-base">{tittle}</h1>
            {array.map((item: any, index) => (
                <div key={index} className="flex flex-row items-center gap-2">
                    {item.icon && <i className={`${item.icon} text-primary text-base sm:text-lg`}></i>}
                    <Link to={item.path} className="text-paragraph hover:text-white duration500 text-sm font-semibold sm:text-base">{item.tittle}</Link>
                </div>
            ))}
        </div>
    )
}

const DesignSosialMedia = ({ className, array }: { className: string, array: [] }) => {
    return (
        <div className={`${className} h-full my-auto justify-center items-center flex-row flex-wrap gap-3`}>
            {array?.map((item? : any, index? : number) => (
                <i key={index} className={`fa-brands fa-${item.icon} icon text-base sm:text-xl md:text-2xl lg:text-3xl duration500 cursor-pointer`}></i>
            ))}
        </div>
    )
}

type TypePropsComponent = {
    className?: string,
    tittle?: string,
    array?: []
}

const Copyright = () => {
    return (
        <div className="w-full py-6 border-t border-white/15 text-center text-xs">
            <div className="w-full pb-1 flex flex-row items-center justify-center gap-1.5">
                <span className="font-bold sm:text-base">MADE WITH</span>
                <img src={dataFooter.Made[0]} className="w-4 h-4 sm:w-5 sm:h-5" />
                <img src={dataFooter.Made[1]} className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <p className="text-paragraph sm:text-sm">Copyright 2024 FjrFthrrhmn. <br className="block sm:hidden" /> All Rights Reserved</p>
        </div>
    )
}