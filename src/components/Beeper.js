import React from "react"

class Beeper extends React.Component {
    render() {
        return (
            <button 
                className="bg-transparent hover:bg-pink-500 text-pink-500 hover:text-white font-semibold w-10 h-10 border border-pink-500 hover:border-transparent rounded-full"
                onClick={() => this.props.beeperPress(this.props.buttons.id)}>
                {this.props.buttons.id}
            </button>
        );
    }
}
export default Beeper