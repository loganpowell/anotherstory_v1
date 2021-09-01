import React, { useContext } from "react"
import { AnimatePresence } from "framer-motion"
import { URL2obj } from "@-0/browser"
import { CTX } from "../context"
import { Header, Item } from "../components"

export const Move = ({ data }) => {
    //console.log({ focusItemData: data })
    //const { user, setUser } = useContext(CTX)
    //const imageHasLoaded = true
    const { QERY, PATH } = URL2obj(window.location.href)

    //console.log({ QERY })
    const [, id] = PATH
    return <Item id={id} data={data} key="item" />
}
