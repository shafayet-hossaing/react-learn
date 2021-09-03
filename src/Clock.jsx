import React from "react";
const Clock = ({local}) => {
    return (
        <>
            <h2>Clock One</h2>
            <h1>{new Date().toLocaleTimeString(local)}</h1>
        </>
    )
}
export default Clock