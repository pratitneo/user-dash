import { TableContext } from './TableContext'
import type { ContextProps } from '../../utils/types'
import { useState } from 'react'

export const TableProvider = ({ children }: ContextProps) => {
    const [getLoading, setGetLoading] = useState(false)
    const [postLoading, setPostLoading] = useState(false)

    const updateGetLoading = (value: boolean) => {
        setGetLoading(value)
    }
    const updatePostLoading = (value: boolean) => {
        setPostLoading(value)
    }
    return (
        <TableContext.Provider value={{ getLoading, postLoading, updateGetLoading, updatePostLoading }}>{children}</TableContext.Provider>
    )
}

