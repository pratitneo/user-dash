import { usersReducer } from "./useReducer";
import { legacy_createStore as createStore } from "redux";

export const store = createStore(usersReducer)