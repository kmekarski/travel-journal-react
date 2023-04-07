import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Navbar() {
    return (
        <nav>
            <FontAwesomeIcon className="navbar--icon" icon={["fas","earth-americas"]} />
            <h2 className="navbar--title">my travel journal.</h2>
        </nav>
    )
}