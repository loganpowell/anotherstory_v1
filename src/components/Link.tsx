import React, { useRef } from "react"
import { _NAVIGATE } from "../router"
import { run$, API } from "@-0/browser"
//import { registerCMD, run$ } from "@-0/spool"
//import { URL2obj } from "@-0/utils"
//import { CMD, DOM_NODE, URL, URL_FULL } from "@-0/keys"
import { motion } from "framer-motion"
//import styled from "@emotion/styled"

export const Link = ({ href, children = "", ...props }) => {
    const me = useRef()
    //console.log("me:", me.current)
    return (
        <a
            //whileHover={{
            //    //textDecoration: 2,
            //    scale: 1.2,
            //}}
            ref={me}
            {...props}
            onClick={e => {
                e.preventDefault()
                console.log({
                    e: e.currentTarget.href,
                    me: me.current,
                })
                run$.next({
                    ..._NAVIGATE,
                    [API.CMD_ARGS]: {
                        [API.URL_FULL]: href,
                        [API.DOM_NODE]: me.current,
                    },
                })
            }}
            href={href}
        >
            {children}
        </a>
    )
}

//export const Link = styled
