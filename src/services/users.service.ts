import axios from "axios"
import { API_URLS } from "../config/api"
import type { NewUserDataType, UserProps, UserRowProps } from "../utils/types"

export const fetchUsers = async (): Promise<UserRowProps[]> => {
    const { data } = await axios.get(API_URLS.users)

    return data.users.map((user: UserProps) => ({
        rank: user.id,
        fullName: `${user.firstName} ${user.lastName}`,
        email: user.email,
        role: user.company?.title,
    }))
}

export const createUser = async (newUserData: NewUserDataType, nextRank: number): Promise<UserRowProps> => {
    await axios.post(API_URLS.postUser, newUserData)

    return {
        rank: nextRank,
        fullName: newUserData.fullName ?? '-',
        email: newUserData.email ?? '-',
        role: newUserData.role ?? '-',
    }
}
