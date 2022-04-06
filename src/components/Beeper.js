import React from "react"

class Beeper extends React.Component {
    render() {

        return ( 
            <div>
                <button 
                    class="bg-transparent hover:bg-pink-500 text-pink-500 hover:text-white font-semibold py-2 px-4 border border-pink-500 hover:border-transparent rounded" 
                    onClick={() => this.props.beeperPress(this.props.buttons.id)}>
                    Beeper
                </button>
                {/* {this.props.buttons.map(buttons => {
                    <button 
                        class="bg-transparent hover:bg-pink-500 text-pink-500 hover:text-white font-semibold py-2 px-4 border border-pink-500 hover:border-transparent rounded" 
                        onClick={() => this.props.beeperPress(buttons.id)}>
                        Beeper
                    </button>
                    count++;
                    console.log(buttons.id);
                    if (count % 8 == 0) {
                        <br></br>
                    }
                })} */}
                {/* <button 
                    class="bg-transparent hover:bg-pink-500 text-pink-500 hover:text-white font-semibold py-2 px-4 border border-pink-500 hover:border-transparent rounded" 
                    onClick={() => this.props.beeperPress(11)}>
                    Beeper
                </button>
                <button 
                    class="bg-transparent hover:bg-pink-500 text-pink-500 hover:text-white font-semibold py-2 px-4 border border-pink-500 hover:border-transparent rounded" 
                    onClick={() => this.props.beeperPress(12)}>
                    Beeper
                </button>
                <button 
                    class="bg-transparent hover:bg-pink-500 text-pink-500 hover:text-white font-semibold py-2 px-4 border border-pink-500 hover:border-transparent rounded" 
                    onClick={() => this.props.beeperPress(11)}>
                    Beeper
                </button>
                <button 
                    class="bg-transparent hover:bg-pink-500 text-pink-500 hover:text-white font-semibold py-2 px-4 border border-pink-500 hover:border-transparent rounded" 
                    onClick={() => this.props.beeperPress(12)}>
                    Beeper
                </button> */}
            </div>
        );
    }
}
export default Beeper