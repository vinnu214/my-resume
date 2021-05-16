import React from 'react'

function Heading(props) {
    return (
        <div className="Heading">
            <h2 className="text__heading">{props.heading}</h2>
        </div>
    )
}

export default Heading
