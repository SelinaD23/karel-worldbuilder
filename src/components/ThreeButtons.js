import React from "react"
import Beeper from "./Beeper"
import Vertical from "./Vertical"
import Horizontal from "./Horizontal"
import InvisibleButton from "./InvisibleButton"

class ThreeButtons extends React.Component {
    render() {
        return (
            <span className="inline-grid grid-cols-2 pb-2 p-0 ">
                <span className="pb-1">
                    <Beeper className="pr-1"
                        key={this.props.button.id}
                        buttons={this.props.button}
                        beeperPress={this.props.beeperPress}
                    />
                </span>
                <span className="justify-self-center">
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