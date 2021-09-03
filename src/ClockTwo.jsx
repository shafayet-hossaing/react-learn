import React from "react"
class ClockTwo extends React.Component {
    render(){
        return(
            <>
                <h2>Clock Two</h2>
                <h1>{new Date().toLocaleTimeString(this.props.local)}</h1>
            </>
        )
    }
}
export default ClockTwo