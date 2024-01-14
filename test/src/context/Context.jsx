import React from 'react'

import {createContext , useState } from 'react';


export const Contexto = createContext("");
export const ContextProvider = ({children}) => {
    const [cssColor, setCssColor] = useState("#000000");
    return (
        <Contexto.Provider value={{cssColor, setCssColor}}>
            {children}
        </Contexto.Provider>
    )
}