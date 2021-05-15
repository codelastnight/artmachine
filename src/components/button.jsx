import React from "react"

export default function button(props)  {


    return (
        <button className={props.className}>{props.children}</button>
    )
}