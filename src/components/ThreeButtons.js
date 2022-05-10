import React from "react"
import Beeper from "./Beeper"
import Vertical from "./Vertical"
import Horizontal from "./Horizontal"
import InvisibleButton from "./InvisibleButton"

class ThreeButtons extends React.Component {
    render() {
        return (
            <span className="inline-grid grid-cols-1 pb-2">
                <span className="pb-1.5">
                    <Beeper className="pr-1"
                        key={this.props.button.id}
                        buttons={this.props.button}
                        beeperPress={this.props.beeperPress}
                    />

                    {
                    this.props.button.vertical !== null &&
                        <>
                            <Vertical
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
                </span>
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