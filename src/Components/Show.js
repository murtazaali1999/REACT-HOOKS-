import React, { useContext } from 'react'
import { AppContext } from "../App"

const Show = (props) => {
    const { counter, updateCounter } = useContext(AppContext);

    return (
        <div>
            <h1>Fractured Lumber-1 {counter}</h1>
            <button onClick={updateCounter}> Click</button>
        </div>
    )
}

export default Show
