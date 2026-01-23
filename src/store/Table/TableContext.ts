import { createContext, useContext } from "react";
import type { TableContextProps } from "../../utils/types";

export const TableContext = createContext<TableContextProps | undefined>(undefined)

export const useTable = () => {
    const context = useContext(TableContext)
    if (!context) throw new Error('Check table context')
    return context
}