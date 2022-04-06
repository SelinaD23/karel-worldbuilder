import React from "react"
import Beeper from "./Beeper"
import Vertical from "./Vertical"
import Horizontal from "./Horizontal"

class MapLocation extends React.Component {
    render() {
        return (
            <div>
                {this.props.buttons.map(buttons => (
                    <Beeper
                        key={buttons.id}
                        buttons={buttons}
                        beeperPress={this.props.beeperPress}
                    />
                ))}
                <br></br>
                {this.props.buttons.map(buttons => (
                    <Vertical
                        key={buttons.id}
                        buttons={buttons}
                        verticalPress={this.props.verticalPress}
                    />
                ))}
                <br></br>
                {this.props.buttons.map(buttons => (
                    <Horizontal
                        key={buttons.id}
                        buttons={buttons}
                        horizontalPress={this.props.horizontalPress}
                    />
                ))}
            </div>
        )}
}

export default MapLocation