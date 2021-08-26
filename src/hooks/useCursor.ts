import { $store$ } from "@-0/browser"
import { useState } from "react"
import { Cursor } from "@thi.ng/atom"
//import { log } from "../utils/data"

// TODO: @-0/react
//                                                 d8    d8b
//   e88~~8e  Y88b  /  888-~88e   e88~-_  888-~\ _d88__ !Y88!
//  d888  88b  Y88b/   888  888b d888   i 888     888    Y8Y
//  8888__888   Y88b   888  8888 8888   | 888     888     8
//  Y888    ,   /Y88b  888  888P Y888   ' 888     888     e
//   "88___/   /  Y88b 888-_88"   "88_-~  888     "88_/  "8"
//                     888
//
export const createCursor =
    (atom = $store$) =>
    (path, uid = `cursor-${Date.now()}`) => {
        const [state, setState] = useState(null)
        const cursor = new Cursor(atom, path)
        cursor.addWatch(uid, (id, bfr, aft) => {
            //log(`${id} cursor triggered`, { state })
            setState(aft)
        })
        return [state, cursor]
    }

export const useCursor = createCursor()
