import type { UserState } from "../utils/types"

// ACTIONS
export const setAllUsers = 'setAllUsers'
export const setSearchValue = 'setSearchValue'
export const clearSearch = 'clearSearch'
export const addUser = 'addUser'

// INITIAL STATE
const initialState: UserState = {
    allUsers: [],
    searchValue: ''
}

// REDUCER FUNCTION
export const usersReducer = (state = initialState, action: any): UserState => {
    switch (action.type) {
        case setAllUsers: return { ...state, allUsers: action.payload }
        case setSearchValue: return { ...state, searchValue: action.payload }
        case clearSearch: return { ...state, searchValue: '' }
        case addUser: return { ...state, allUsers: [...state.allUsers, action.payload] }

        default: return state;
    }
}