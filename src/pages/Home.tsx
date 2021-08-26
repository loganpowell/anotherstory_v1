import React, { useContext } from "react"
import { AnimatePresence } from "framer-motion"
import { URL2obj } from "@-0/browser"
import { CTX } from "../context"
import { Header, Item, List } from "../components"

export const Home = ({ data }) => {
    const { user, setUser } = useContext(CTX)
    const imageHasLoaded = true
    const { QERY } = URL2obj(window.location.href)

    //console.log({ QERY })
    const { id } = QERY
    return (
        <>
            <List selectedId={id} items={data} />
            <AnimatePresence>
                {id && imageHasLoaded && <Item id={id} data={data} key="item" />}
            </AnimatePresence>
        </>
    )
}
