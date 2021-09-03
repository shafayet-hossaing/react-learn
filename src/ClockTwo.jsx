import React from "react";

class ClockTwo extends React.Component {
    constructor(props){
        super(props);

        // Initializing for changing the time and to re-render the component. (state er moddhe data ta k rakha holo jate change korte pari & state ta holo React.Component er property r ei property ta dewa hoy jodi kono kichu change korte chai tahole first e eitar moddhe rekhe mane initialize kore then React.Component er arekta property (setState) er maddhome amra data/state ta k change korte pari)
        this.state = {date : new Date()};
    }

    // lifecycle event/hook & and eita React.Component er akta method
    componentDidMount() {
        // Updating data/state & the tick function calling form the line number 21
        this.myId = setInterval(() => this.tick(), 1000)
    }

    componentWillUnmount() {
        clearInterval(this.myId);
    }

    // This function is being called from line number 14
    tick() {
        // setState is to update the data.state
        this.setState({
            date: new Date(),
        });
    }

    render(){
        return(
                <h1>{this.state.date.toLocaleTimeString(this.props.local)}</h1>
        )
    }
}
export default ClockTwo