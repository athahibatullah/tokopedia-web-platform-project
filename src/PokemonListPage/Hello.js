import React from "react"
import './Hello.css'


export const Hello = () => {
    let Owned = Object.keys({...localStorage}).length;
    return (
        <div className="containerHello">
            <h1>Hello Anonim</h1>
            <h2>{Owned} Owned</h2>
        </div>
    )
}