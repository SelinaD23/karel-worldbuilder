import React from "react"
import Generate from "./Generate"

class Output extends React.Component {
    render() {
        return (
            <ul>
                <Generate 
                    buttons={this.props.buttons}
                    generateMap={this.props.generateMap}
                />
            </ul>
        )
    }
}

export default Output