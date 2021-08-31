import React, { useContext, useRef } from "react"
import { AnimatePresence } from "framer-motion"
import { URL2obj } from "@-0/browser"
import { CTX } from "../context"
import { Header, Item, List } from "../components"

export const Home = ({ data: { items } }) => {
    //const me = useRef()
    //const { user, setUser } = useContext(CTX)
    //const imageHasLoaded = true
    const { QERY } = URL2obj(window.location.href)

    //console.log({ QERY })
    const { id } = QERY
    return <List key={id} selectedId={id} data={items} />
}
