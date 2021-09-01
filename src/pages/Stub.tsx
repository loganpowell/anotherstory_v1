import React from "react"
import { Link } from "../components"

export const Stub = ({ data }) => (
    <div style={{}}>
        <pre
            style={{
                color: "gray",
            }}
        >
            {JSON.stringify(data, null, 4)}
        </pre>
        <Link href="magic-move">Go Somewhere</Link>
    </div>
)
