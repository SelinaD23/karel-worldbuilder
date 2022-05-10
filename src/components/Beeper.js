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
                className={`${this.state.isPressed === false ? "bg-transparent text-transparent " : "bg-blue-500 text-blue-500"} font-semibold w-10 h-10 border border-blue-500 rounded-full`}
                onClick={this.handleClick}>
                {this.props.buttons.id}
            </button>
        );
    }
}
export default Beeper