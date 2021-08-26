import React from "react"
import { AnimateSharedLayout, AnimatePresence } from "framer-motion"
import { Header, Item, List } from "./components"
import { View } from "./view"
import { Provider } from "./context"
import { log$ } from "@-0/browser"
import { out$ } from "@-0/spool"
import { trace } from "@thi.ng/rstream"
//import { BrowserRouter as Router, Route } from "react-router-dom";

// log$.subscribe(trace("log$:"))

//console.log("all subs:", out$.topics.entries())

export default function App() {
    return (
        <div className="container">
            <Provider>
                <AnimateSharedLayout type="crossfade">
                    <Header />
                    <View />
                </AnimateSharedLayout>
            </Provider>
        </div>
    )
}
