import { createContext, useContext } from "react";
import type { DropdownContextProps } from "../../utils/types";

export const DropdownContext = createContext<DropdownContextProps | undefined>(undefined)

export const useDropdown = () => {
    const context = useContext(DropdownContext)
    if (!context) throw new Error('Check dropdown context')
    return context
}