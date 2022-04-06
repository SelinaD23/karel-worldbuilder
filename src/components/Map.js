import React from "react"
import Beeper from "./Beeper"
import Vertical from "./Vertical"
import Horizontal from "./Horizontal"
import World from "../World.png"
import MapLocation from "./MapLocation"

class Map extends React.Component {
    render() {
        return (
            // For stretch: Replace backgroundRepeat:"no-repeat" with backgroundSize: "cover", overflow: "hidden"
            //  class="grid grid-cols-4 gap-4 content-evenly" 
            <div style={{ backgroundImage: `url(${World})`, backgroundRepeat:"no-repeat"}}>
                {this.props.buttons.map((buttons, count) => {
                    <Beeper
                        key={buttons.id}
                        buttons={this.props.buttons}
                        beeperPress={this.props.beeperPress}
                    />
                    console.log(buttons.id);
                    if (count % 8 == 0) {
                        <br></br>
                    }
                })}
            </div>
        )
    }
}

export default Map