import * as React from 'react';
import { createContext, useState } from "react";

export const filterCreate = createContext()

export default function FilterProvider({children}) {
    const [filterType, setFilterType] = useState({
        pages : [40, 1200],
        genre : "all"
    })

    return(
        <filterCreate.Provider value={{
            filterType, setFilterType
        }}>            
            {children}
        </filterCreate.Provider>
    )
}

