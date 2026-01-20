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
export interface TopUserProps {
    name?: string
    netWorth?: string
    place?: string
}
export interface UserCardProps {
    rank?: number
    name?: string
    networth?: string
    place?: string
}