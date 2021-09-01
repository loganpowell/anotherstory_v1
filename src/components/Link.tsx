import React, { useRef } from "react"
import { _NAVIGATE } from "../router"
import { run$, API } from "@-0/browser"
//import { registerCMD, run$ } from "@-0/spool"
import { URL2obj, obj2URL } from "@-0/utils"
//import { CMD, DOM_NODE, URL, URL_FULL } from "@-0/keys"
import { motion } from "framer-motion"
//import styled from "@emotion/styled"

export const Link = ({ href, children = "", ...props }) => {
    const me = useRef()
    const h = window.location.href
    const { PATH: href_path } = URL2obj(href)
    const { PATH: wind_path } = URL2obj(h)

    const here = x => x === "."
    const move = x => x === ".."

    const r_path = href_path.some(here) // relative to current dir
        ? wind_path.concat(href_path[1] ? href_path[1] : []).join("/")
        : href_path.some(move) // reltative navigate up the dir chain
        ? [
              "", // prepend to give space for root-relative /
              ...wind_path
                  .slice(0, -href_path.filter(move).length)
                  .concat(href_path.filter(x => !move(x))),
          ].join("/")
        : href // absolute href

    return (
        <a
            ref={me}
            {...props}
            onClick={e => {
                e.preventDefault()
                //console.log({
                //    href: e.currentTarget.href,
                //    location: window.location.href,
                //    r_path,
                //    me: me.current,
                //})
                run$.next({
                    ..._NAVIGATE,
                    [API.CMD_ARGS]: {
                        [API.URL_FULL]: e.currentTarget.href,
                        [API.DOM_NODE]: me.current,
                    },
                })
            }}
            href={r_path}
        >
            {children}
        </a>
    )
}

//export const Link = styled
