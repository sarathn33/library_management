import React, { createContext, useContext, useState } from "react";
import { data } from "../Data/data";

const AppContext = createContext(null)

export default function AppProvider({children}){
    const[book,setBook] = useState(data)
    return(
        <AppContext.Provider
        value={{
            book,
            setBook
        }}
        >
            {children}
        </AppContext.Provider>
    )
}

export const AppState=()=>{
    return useContext(AppContext)
}