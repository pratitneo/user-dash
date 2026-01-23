import { createContext, useContext } from "react";
import type { NewUserModalContextProps } from "../../utils/types";

export const NewUserModalContext = createContext<NewUserModalContextProps | undefined>(undefined)

export const useNewUserModal = () => {
    const context = useContext(NewUserModalContext)
    if (!context) throw new Error('Check new user modal context')
    return context
}