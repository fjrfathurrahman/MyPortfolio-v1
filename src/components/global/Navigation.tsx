import { NavLink } from "react-router-dom"
import ToggleNavigationMobile from "./NavigationMobile"
import React from "react"
import { MenuContext } from "../../hooks/MenuContext";
import useWindowSize from "../../hooks/useWindowSize";
import { dataNavigation } from "../../data/global";

export default function Navigation() {
    const { isOpenMenu, setIsOpenMenu } = React.useContext(MenuContext)
    const { width } = useWindowSize();

    React.useEffect(() => {
        if (width >= 640) {
            return setIsOpenMenu(false);
        }

        {isOpenMenu ? document.body.style.overflowY = 'hidden' : document.body.style.overflowY = 'auto'}
    }, [isOpenMenu, width])

    return (
        <>
            <nav className="w-full relative top-0 left-0 right-0 py-6 border-b border-white/15" style={{ maxWidth: '1280px', zIndex: '999' }}>
                <div className="w-full flex justify-between items-center">
                    <Logo />
                    <MenuNavigation />
                    <ToggleNavigationMobile />
                </div>

            </nav>
            {/* Menu Navigation Mobile */}
            {isOpenMenu &&
                <div className="Modal fixed w-full h-full bottom-0 left-0 right-0 bg-black/50 backdrop-blur-[2px]" style={{ zIndex: '99' }}>
                    <div className="Menu h-full flex flex-col justify-center items-center gap-3 font-semibold text-xl">
                        {dataNavigation.Menu.map((item: any) => (
                            <NavLink key={item.tittle} to={item.path} className={({ isActive }) => isActive ? "text-primary" : "text-paragraph hover:text-white duration500"}>
                                {item.tittle}
                            </NavLink>
                        ))}
                    </div>
                </div>
            }
        </>
    )
}

const Logo = () => {
    return (
        <div className="Logo flex items-center cursor-pointer">
            {dataNavigation.Logo.split('').map((letter: any, index: number) => (
                <h1 className="font-bold font-Tiny5 text-2xl sm:text-3xl hover:text-primary hover:-mt-1 duration500" key={index}>{letter}</h1>
            ))}
        </div>
    )
}

const MenuNavigation = () => {
    return (
        <div className="hidden sm:block">
            <div className="Menu flex items-center gap-6 font-semibold text-base md:text-lg">
                {dataNavigation.Menu.map((item: any) => (
                    <NavLink key={item.tittle} to={item.path} className={({ isActive }) => isActive ? "text-primary border-b-2 border-primary" : "text-paragraph hover:text-white duration500"}>
                        {item.tittle}
                    </NavLink>
                ))}
            </div>
        </div>
    )
}