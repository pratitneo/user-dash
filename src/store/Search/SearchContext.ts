import { createContext, useContext } from "react";
import type { SearchContextProps } from "../../utils/types";

export const SearchContext = createContext<SearchContextProps | undefined>(undefined)

export const useSearch = () => {
    const context = useContext(SearchContext)
    if (!context) throw new Error('check search context')
    return context
}