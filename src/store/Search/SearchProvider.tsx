import { useState } from "react"
import type { ContextProps, UserRowProps } from "../../utils/types"
import { SearchContext } from "./SearchContext"

export const SearchProvider = ({ children }: ContextProps) => {
    const [searchValue, setSearchValue] = useState('')
    const [filteredUsers, setFilteredUsers] = useState<UserRowProps[]>([])
    const updateFilteredUsers = (data: UserRowProps[]) => {
        setFilteredUsers(data)
    }
    const clearSearchValue = () => {
        setSearchValue('')
    }
    const updateSearchValue = (value: string) => setSearchValue(value)
    return (
        <SearchContext.Provider value={{ filteredUsers, updateFilteredUsers, searchValue, updateSearchValue, clearSearchValue }}>{children}</SearchContext.Provider>
    )
}
