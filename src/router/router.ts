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
import { __DOM_URL__ROUTE } from "@-0/browser/lib/tasks/routing"
import { Err_missing_props } from "@-0/utils"
//import { URL_DATA, URL_PAGE } from "@-0/keys"
import fetch from "node-fetch"
import { items } from "../misc/data"
import { Home, FocusItem } from "../pages"

export const router = async URL => {
    const match = URL2obj(URL)
    const { DOMN, FURL, HASH, PATH, QERY, SUBD } = match

    //console.log({ match })
    const { page, data } = new EquivMap([
        [
            { ...match, PATH: [] },
            {
                // FIXME: needs to be `() => Home` if read from Global store 🤷
                page: () => Home,
                data: async () => {
                    return await { data: items }
                },
            },
        ],
        [
            { ...match, PATH: [], QERY: { id: QERY.id } },
            {
                page: () => FocusItem,
                data: async () => {
                    return await { data: items }
                },
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
