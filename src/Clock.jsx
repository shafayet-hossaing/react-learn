import React from "react";
const Clock = (props) => {
    return (
        <>
        <h2>hello</h2>
            <h1>{new Date().toLocaleTimeString(props.local)}</h1>
        </>
    )
}
export default Clock