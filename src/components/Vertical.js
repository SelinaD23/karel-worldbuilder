import React from "react"

class Vertical extends React.Component {
    render() {
        return (
            <button 
                className="bg-transparent hover:bg-green-500 text-green-500 hover:text-white font-semibold w-10 h-10 border border-green-500 hover:border-transparent rounded-full"
                onClick={() => this.props.verticalPress(this.props.buttons.id)}>
                {this.props.buttons.id}
            </button>
        );
    }
}
export default Vertical