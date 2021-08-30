import React from "react"
//import { items } from "../misc/data"
import { Link } from "./Link"
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion"
import { useRef } from "react"

function Card({ id, title, category, theme }) {
    //console.log(`Card: card-container-${id}`)
    //const me = useRef()
    return (
        <li className={`card ${theme}`}>
            <div className="card-content-container">
                <motion.div className="card-content" layoutId={`card-container-${id}`}>
                    <motion.div
                        className="card-image-container"
                        layoutId={`card-image-container-${id}`}
                        // 🤔 this is needed to trigger magic-move on first route 🤷
                        exit={{
                            opacity: 0,
                        }}
                    >
                        <img
                            className="card-image"
                            src={process.env.PUBLIC_URL + `images/${id}.jpg`}
                            alt={`rando ${id}`}
                        />
                    </motion.div>
                    <motion.div className="title-container" layoutId={`title-container-${id}`}>
                        <span className="category">{category}</span>
                        <h2>{title}</h2>
                    </motion.div>
                </motion.div>
            </div>
            <Link href={`/?id=${id}`} className={`card-open-link`} />
        </li>
    )
}

export function List({ selectedId, data, ...props }) {
    const me = useRef()
    return (
        <ul className="card-list">
            {data.map(card => {
                return <Card key={card.id} {...card} isSelected={card.id === selectedId} />
            })}
        </ul>
    )
}
