import React from "react"

class Horizontal extends React.Component {
    render() {
        return ( 
            <button 
                class="bg-transparent hover:bg-pink-500 text-pink-500 hover:text-white font-semibold py-2 px-4 border border-pink-500 hover:border-transparent rounded" 
                onClick={() => this.props.horizontalPress(this.props.buttons.id)}>
                Horizontal
            </button>
        );
    }
}
export default Horizontal