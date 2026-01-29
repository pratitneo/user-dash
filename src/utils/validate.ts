import type { NewUserDataType } from "./types"

export const validateNewUser = (data: NewUserDataType) => {
    const errors: NewUserDataType = {
        fullName: data.fullName ? '' : 'please check full name',
        email: data.email ? '' : 'please check email',
        role: data.role ? '' : 'please select a role',
    }

    const isValid = Object.values(errors).every(err => !err)

    return { errors, isValid }
}
