import { useState } from 'react'
import type { ContextProps } from '../../utils/types'
import { DropdownContext } from './DropdownContext'

export const DropdownProvider = ({ children }: ContextProps) => {

    const [dropdownValue, setDropdownValue] = useState('roles')
    const [optionsVisible, setOptionsVisible] = useState(false)

    const updateOptionsVisible = (value: boolean) => {
        setOptionsVisible(value)
    }
    const updateDropdownValue = (value: string) => setDropdownValue(value)

    return (
        <DropdownContext.Provider value={{ optionsVisible, updateOptionsVisible, dropdownValue, updateDropdownValue }}>
            {children}
        </DropdownContext.Provider>
    )
}

export default DropdownProvider