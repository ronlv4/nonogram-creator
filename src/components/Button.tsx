import React from "react"

export default function Button(props: any){
    return(
        <button className = "ui-button" onClick = {props.onClick}>{props.children}</button>
    )
}