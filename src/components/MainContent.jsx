import React from "react";
import Card from "./Card";
import data from "../data.js"

export default function MainContent() {

    const cards = data.map( el => <Card item={el}/> )

    return (
        <div className="main">
            {cards}
        </div>
    )
}