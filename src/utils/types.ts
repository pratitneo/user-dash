import type { IconType } from "react-icons"

export interface SearchProps {
    placeholder?: string
    inputName?: string
    getActionFn?: (InputEvent: React.ChangeEvent<HTMLInputElement>) => void
    inputValue?: string
    getClearSearch?: () => void
}
export interface HeaderProps {
    appName?: string
    links?: SideLinkType[]
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

// USERS
export interface UserProps {
    id?: number
    firstName?: string
    lastName?: string
    maidenName?: string
    age?: number
    gender?: string
    email?: string
    phone?: string
    username?: string
    password?: string
    birthDate?: string
    image?: string
    bloodGroup?: string
    height?: number
    weight?: number
    eyeColor?: string
    hair?: Hair
    ip?: string
    address?: Address
    macAddress?: string
    university?: string
    bank?: Bank
    company?: Company
    ein?: string
    ssn?: string
    userAgent?: string
    crypto?: Crypto
    role?: string
}
export interface Hair {
    color?: string
    type?: string
}
export interface Address {
    address?: string
    city?: string
    state?: string
    stateCode?: string
    postalCode?: string
    coordinates?: Coordinates
    country?: string
}
export interface Coordinates {
    lat?: number
    lng?: number
}
export interface Bank {
    cardExpire?: string
    cardNumber?: string
    cardType?: string
    currency?: string
    iban?: string
}
export interface Company {
    department?: string
    name?: string
    title?: string
    address?: Address2
}
export interface Address2 {
    address?: string
    city?: string
    state?: string
    stateCode?: string
    postalCode?: string
    coordinates?: Coordinates2
    country?: string
}
export interface Coordinates2 {
    lat?: number
    lng?: number
}
export interface Crypto {
    coin?: string
    wallet?: string
    network?: string
}
export interface UserRowProps {
    rank: number
    fullName: string
    email: string
    role?: string
}
export interface ButtonProps {
    trailingIcon?: React.ReactNode
    name?: string
    leadingIcon?: React.ReactNode
    variant?: ButtonVariant
    getActionFn?: () => void
}

export const buttonVariants = {
    primary: 'bg-colorPrime text-white',
    secondary: 'bg-gray-200 text-black',
    tertiary: 'bg-transparent text-bgPrime',
} as const;
export type ButtonVariant = keyof typeof buttonVariants;

export interface OverlayProps {
    children?: React.ReactNode
    getActionFn?: () => void
}
export interface InputProps {
    inpLabel?: string
    inpType?: string
    inpName?: string
    inpId?: string
    inpPlaceholder?: string
    inpErr?: string
    getValue?: string
    getChangeFn?: (inpEvent: React.ChangeEvent<HTMLInputElement>) => void
}
export interface DropDownOptionType {
    name?: string
    value?: string
}
export interface DropDownProps {
    options?: DropDownOptionType[]
    label?: string
    errorMsg?: string
}
export interface ContextProps {
    children: React.ReactNode
}
export interface DropdownContextProps {
    optionsVisible?: boolean
    updateOptionsVisible?: (value: boolean) => void
    dropdownValue?: string
    updateDropdownValue?: (value: string) => void
}
export interface NewUserModalContextProps {
    addUserLoader?: boolean
    updateAddUserLoader?: (value: boolean) => void
    newCustErrors?: NewUserDataType
    setNewCustErrors?: any
    newUserData?: NewUserDataType
    updateNewUserData?: UpdateNewUserDataFn
    modalVisible?: boolean
    updateModalVisible?: (value: boolean) => void
    clearNewUserData?: () => void
    successMsg?: boolean
    updateSuccessMsg?: (value: boolean) => void
}
export interface NewCustomerModalProps {
    heading?: string
    onSubmit?: (data: NewUserDataType) => void;
    addingUser?: boolean
}
export interface SectionHeadProps {
    head?: string
}
export interface SearchContextProps {
    allUsers?: UserRowProps[]
    updateAllUsers?: (data: UserRowProps[]) => void
    filteredUsers?: UserRowProps[]
    updateFilteredUsers?: (data: UserRowProps[]) => void
    searchValue?: string
    updateSearchValue?: (value: string) => void
}
export interface NewUserDataType {
    rank?: string
    fullName?: string
    email?: string
    role?: string
}
export interface TableContextProps {
    getLoading?: boolean
    postLoading?: boolean
    updateGetLoading?: (value: boolean) => void
    updatePostLoading?: (value: boolean) => void
}
export interface LinkProps {
    Icon?: IconType
    linkName?: string
    sizeValue?: number
}
export interface UserState {
    allUsers: UserRowProps[]
    searchValue: string
}
export interface SidebarProps {
    links?: SideLinkType[]
}
export type UpdateNewUserDataFn = <K extends keyof NewUserDataType>(key: K, value: NewUserDataType[K]) => void