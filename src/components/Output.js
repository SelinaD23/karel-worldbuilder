import React from "react"
import Generate from "./Generate"

class Output extends React.Component {
    render() {
        return (
            <div>
                <textarea id="worldGenerated" name="worldGenerated" cols="75">

                </textarea>
                <br></br>
                <Generate 
                    buttons={this.props.buttons}
                    generateMap={this.props.generateMap}
                />
            </div>
        )
    }
}

export default Output