import React, { useContext, useLayoutEffect, useEffect } from "react"
import { getIn } from "@thi.ng/paths"
//import { isFunction } from "@thi.ng/checks"
import { $store$, API } from "@-0/browser"
import { createCursor } from "../hooks"
import { useState } from "react"

export const DefaultLoader = (
    <div className="spinner_container" style={{ marginTop: "64px" }}>
        <div className="spinner">
            <h1> fetching data... </h1>
        </div>
    </div>
)

// TODO: @-0/react
//                                                 d8    d8b
//   e88~~8e  Y88b  /  888-~88e   e88~-_  888-~\ _d88__ !Y88!
//  d888  88b  Y88b/   888  888b d888   i 888     888    Y8Y
//  8888__888   Y88b   888  8888 8888   | 888     888     8
//  Y888    ,   /Y88b  888  888P Y888   ' 888     888     e
//   "88___/   /  Y88b 888-_88"   "88_-~  888     "88_/  "8"
//                     888
//
export const View = ({ store = $store$, Loader = DefaultLoader }) => {
    const useCursor = createCursor(store)
    //const [LastPage, setLastPage] = useState(() => loader)
    const [Page, pageCursor] = useCursor([API.$$_VIEW], "View Page")
    const [loading, loadingCursor] = useCursor([API.$$_LOAD], "View loading")
    const [path, pathCursor] = useCursor([API.$$_PATH], "Route Path")

    useLayoutEffect(() => {
        // re-render when loading state changes
        console.log("re-rendered Page:", { loading })
        // cleanup
        return () => {
            //log("cleaning up:", { loading, Page })
            loadingCursor.release()
            pathCursor.release()
            pageCursor.release()
        }
    }, [loadingCursor, pathCursor, pageCursor, Page, loading, path])

    const state = store.deref()

    //console.log({ state })

    const is_home = !state[API.$$_PATH].length
    // @ts-ignore
    const data = is_home ? getIn(state, ["data"]) : getIn(state, path)
    //console.log({ Page, data })

    return loading || !Page || !data ? Loader : <Page data={data} />
}
