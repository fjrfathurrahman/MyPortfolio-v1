import { createContext, useState, ReactNode, Dispatch, SetStateAction } from "react";

// Definisikan tipe untuk konteks
interface MenuContextType {
    isOpenMenu: boolean;
    setIsOpenMenu: Dispatch<SetStateAction<boolean>>;
}

// Nilai default untuk konteks
const defaultValue: MenuContextType = {
    isOpenMenu: false,
    setIsOpenMenu: () => {}, // Fungsi noop untuk setIsOpenMenu default
};

// Membuat konteks dengan nilai default
export const MenuContext = createContext<MenuContextType>(defaultValue);

// Komponen provider untuk menyediakan konteks
export const MenuContextProvider = ({ children }: { children: ReactNode }) => {
    const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);

    return (
        <MenuContext.Provider value={{ isOpenMenu, setIsOpenMenu }}>
            {children}
        </MenuContext.Provider>
    );
};
