import React, { useState } from "react"


class Beeper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isPressed: false,
        };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState(prevState => ({
            isPressed: !prevState.isPressed
          }));
        this.props.beeperPress(this.props.buttons.id)
    };
    render() {
        return (
            <button 
                className={`${this.state.isPressed === false ? "bg-transparent" : "bg-gradient-to-r from-blue-300 via-blue-500 to-blue-300"} text-transparent font-semibold w-10 h-10 border-2 border-blue-300 rounded-full`}
                onClick={this.handleClick}>
                {this.props.buttons.id}
            </button>
        );
    }
}
export default Beeper