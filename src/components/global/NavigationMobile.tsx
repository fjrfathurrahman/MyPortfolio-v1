import React from "react";
import { MenuContext } from "../../hooks/MenuContext";

export default function NavigationMobile() {
    const {isOpenMenu, setIsOpenMenu} = React.useContext(MenuContext);

    const toggleMenu = () => {
        setIsOpenMenu(!isOpenMenu);
    }

    return (
        <div className="toggle block sm:hidden text-lg">
            { isOpenMenu ?
                <button onClick={toggleMenu}>
                    <i className="fa-solid fa-xmark"></i>
                </button> :
                <button onClick={toggleMenu}>
                    <i className="fa-solid fa-bars"></i>
                </button>
            }
        </div>
    )
}