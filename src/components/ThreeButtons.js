import React from "react"
import Beeper from "./Beeper"
import Vertical from "./Vertical"
import Horizontal from "./Horizontal"
import InvisibleButton from "./InvisibleButton"

class ThreeButtons extends React.Component {
    render() {
        return (
            <span className="inline-grid grid-cols-2">
                <Beeper
                    key={this.props.button.id}
                    buttons={this.props.button}
                    beeperPress={this.props.beeperPress}
                />
                {
                this.props.button.vertical !== null &&
                    <>
                        <Vertical className="block"
                            key={this.props.button.id}
                            buttons={this.props.button}
                            verticalPress={this.props.verticalPress}
                        />
                    </>
                }
                {
                this.props.button.vertical == null &&
                    <InvisibleButton />
                }
                {
                this.props.button.horizontal !== null &&
                    <>
                        <Horizontal
                            key={this.props.button.id}
                            buttons={this.props.button}
                            horizontalPress={this.props.horizontalPress}
                        />
                    </>
                }
            </span>
        )
    }
}

export default ThreeButtons