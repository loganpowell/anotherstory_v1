import React from "react"
import styled from "@emotion/styled"
import { space, color, typography, layout } from "styled-system"
import { motion } from "framer-motion"

const Div = styled(motion.div)`
    ${space}
    ${color}
    position: absolute;
    top: 10px;
    right: 10px;
    width: fit-conte;
    height: fit-content;
    overflow: hidden;
    resize: both;
    background: blue;
    box-shadow: 0 0 0 200vmax red;
    clip-path: circle(71%);
    margin: 100px auto;
`

const StyMoDiv = styled(motion.div)(
    {
        position: "absolute",
        top: "10px",
        right: "10px",
        width: "fit-conte",
        height: "fit-content",
        overflow: "hidden",
        resize: "both",
        background: "blue",
        boxShadow: "0 0 0 200vmax red",
        clipPath: "circle(71%)",
        margin: "100px auto",
    },
    color,
    space,
    layout
)
export const NavColl = ({ children, ...props }) => {
    return (
        <div style={{ position: "relative" }}>
            <StyMoDiv {...props} color="warning">
                {children}
            </StyMoDiv>
        </div>
    )
}
