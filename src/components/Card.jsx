import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function Card(props) {
    return (
        <div className={`card ${props.last? "card--last" : ""}`}>
            <img className="card--image" src={props.item.imageUrl} alt="" />
            <div className="card--text">
                <div className="card--location">
                    <FontAwesomeIcon className="card--location_icon" icon={["fas","location-dot"]} />
                    <p className="card--location_name">{props.item.location}</p>
                    <a href={props.item.googleMapsUrl} target="_blank" className="card--location_link">View on Google Maps</a>
                </div>
                <h1 className="card--title">{props.item.title}</h1>
                <p className="card--date">{props.item.startDate} - {props.item.endDate}</p>
                <p className="card--desc">{props.item.description}</p>
            </div>
        </div>
    )
}