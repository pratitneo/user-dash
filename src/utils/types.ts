import type { IconType } from "react-icons"

export interface SearchProps {
    placeholder?: string
    inputName?: string
}
export interface HeaderProps {
    appName?: string
}
export interface SideLinkType {
    name?: string
    url?: string
    icon?: IconType
}