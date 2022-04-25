import React from "react"

class Horizontal extends React.Component {
    render() {
        return (
            <span class="">
                <button 
                    className="bg-transparent hover:bg-blue-500 text-blue-500 hover:text-white font-semibold w-10 h-10 border border-blue-500 hover:border-transparent rounded-full"
                    onClick={() => this.props.beeperPress(this.props.buttons.id)}>
                    {this.props.buttons.id}
                </button>
            </span> 
                
        );
    }
}
export default Horizontal