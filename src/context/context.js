import { createContext } from "react"

export const access = {
    access : "NOT CONNECTED",
    user : null
}
export const AppContext = createContext(access);