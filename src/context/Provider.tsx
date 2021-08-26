import React, { createContext, useState, useMemo } from "react"

export const CTX = createContext(null)

export const Provider = ({ children }) => {
    const [user, setUser] = useState(null)
    // TODO: session storage goes here
    //const [page, setPage] = useState(null)

    const mem = useMemo(
        () => ({
            user,
            setUser,
            //page,
            //setPage,
        }),
        [user, setUser /*, page, setPage */]
    )

    return <CTX.Provider value={mem}>{children}</CTX.Provider>
}
