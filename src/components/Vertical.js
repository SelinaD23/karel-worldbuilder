import React from "react"

class Vertical extends React.Component {
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
        this.props.verticalPress(this.props.buttons.id)
    };

    render() {
        return (
            <button 
                className={`${this.state.isPressed === false ? "bg-transparent" : "bg-gradient-to-r from-gray-500 via-gray-800 to-gray-500"} text-transparent font-semibold w-6 h-10 border-2 border-black rounded-full`}
                onClick={this.handleClick}>
                {this.props.buttons.id}
            </button>
        );
    }
}
export default Vertical