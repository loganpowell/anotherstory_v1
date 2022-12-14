import { EquivMap } from "@thi.ng/associative"
import {
    $store$,
    run$,
    registerRouterDOM,
    API,
    URL2obj,
    SET_STATE,
    DOMnavigated$,
    registerCMD,
} from "@-0/browser"
//import { __DOM_URL__ROUTE } from "@-0/browser/lib/tasks/routing"
//import { Err_missing_props } from "@-0/utils"
//import { URL_DATA, URL_PAGE } from "@-0/keys"
import fetch from "node-fetch"
import { items } from "../misc/data"
import { Magic, Move, Stub, Home } from "../pages"

export const router = async URL => {
    const match = URL2obj(URL)
    const { DOMN, FURL, HASH, PATH, QERY, SUBD } = match

    const [_1, _2, _3] = PATH
    // FIXME: weird hack fix for issue
    //window.scrollTo({ top: 0 })
    const { page, data } = new EquivMap([
        [
            { ...match, PATH: [] },
            {
                page: () => {
                    //window.scrollTo({ top: 0 })
                    return Home
                },

                data: async () => {
                    return await { items }
                },
            },
        ],
        [
            { ...match, PATH: ["magic-move"] },
            {
                // 🤔 needs to be `() => Home` if read from Global store 🤷
                page: () => Magic,
                data: async () => await items,
            },
        ],
        [
            { ...match, [PATH.length === 2 && "PATH"]: ["magic-move", _2] },
            {
                page: () => Move,
                data: async () => await items,
            },
        ],
    ]).get(match) || {
        page: d => console.log("404 Page:", d),
        data: () => Promise.resolve({}),
    }

    const res = await data()
    //console.log({ res })
    return {
        [API.URL_DATA]: res,
        [API.URL_PAGE]: page,
    }
}

export const _NAVIGATE = registerRouterDOM(router)
