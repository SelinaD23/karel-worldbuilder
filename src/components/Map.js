import React from "react"
import Beeper from "./Beeper"
import Vertical from "./Vertical"
import Horizontal from "./Horizontal"

class Map extends React.Component {
    render() {
        return (
            <ul>
                {this.props.buttons.map(buttons => (
                    <Beeper
                        key={buttons.id}
                        buttons={buttons}
                        beeperPress={this.props.beeperPress}
                    />
                ))}

                {this.props.buttons.map(buttons => (
                    <Vertical
                        key={buttons.id}
                        buttons={buttons}
                        verticalPress={this.props.verticalPress}
                    />
                ))}

                {this.props.buttons.map(buttons => (
                    <Horizontal
                        key={buttons.id}
                        buttons={buttons}
                        horizontalPress={this.props.horizontalPress}
                    />
                ))}
            </ul>
        )
    }
}

export default Map