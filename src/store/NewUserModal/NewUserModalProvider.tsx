import { useState } from 'react'
import type { ContextProps, NewUserDataType } from '../../utils/types'
import { NewUserModalContext } from './NewUserModalContext'
import { initialFormState } from '../../utils/userRoles'

export const NewUserModalProvider = ({ children }: ContextProps) => {

    const [modalVisible, setModalVisible] = useState(false)
    const [newUserData, setNewUserData] = useState<NewUserDataType>({ rank: '', fullName: '', email: '', role: '' })
    const [newCustErrors, setNewCustErrors] = useState(initialFormState)
    const [addUserLoader, setAddUserLoader] = useState(false)
    const [successMsg, setSuccessMsg] = useState(false)

    const updateSuccessMsg = (value: boolean) => {
        setSuccessMsg(value)
    }

    const updateAddUserLoader = (value: boolean) => {
        setAddUserLoader(value)
    }

    const updateNewUserData = <K extends keyof NewUserDataType>(key: K, value: NewUserDataType[K]) => {
        setNewUserData(prev => ({
            ...prev,
            [key]: value
        }))
    }
    const clearNewUserData = () => {
        setNewUserData(initialFormState);
    };
    const updateModalVisible = (value: boolean) => setModalVisible(value)

    return (
        <NewUserModalContext.Provider value={{ successMsg, updateSuccessMsg, addUserLoader, updateAddUserLoader, newCustErrors, setNewCustErrors, clearNewUserData, newUserData, updateNewUserData, modalVisible, updateModalVisible }}>
            {children}
        </NewUserModalContext.Provider>
    )
}