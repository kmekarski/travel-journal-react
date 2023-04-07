import React from "react";
import Card from "./Card";
import data from "../data.js"

export default function MainContent() {

    const cards = data.map( (el, i, arr) => {
        return arr.length-1 === i ? <Card item={el} last={true}/> : <Card item={el} last={false}/>
    })

    return (
        <div className="main">
            {cards}
        </div>
    )
}