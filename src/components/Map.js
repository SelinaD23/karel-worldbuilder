import React from "react"
import Beeper from "./Beeper"
import Vertical from "./Vertical"
import Horizontal from "./Horizontal"
import World from "../World.png"
import MapLocation from "./MapLocation"

const ROW_SIZE = 8;

class Map extends React.Component {

    render() {
        return (
            // bg-top
            // flex flex-wrap items-center justify-center
            <div class="pl-12 pt-2" style={{ backgroundImage: `url(${World})`, backgroundRepeat:"no-repeat"}}>
                {this.props.buttons.map((button, index) => (
                    <>
                        <Beeper
                            key={button.id}
                            buttons={button}
                            beeperPress={this.props.beeperPress}
                        />
                        {
                        button.vertical !== null &&
                            <>
                            <Vertical
                                key={button.id}
                                buttons={button}
                                beeperPress={this.props.beeperPress}
                            />
                            </>
                        }
                        {
                        ++index % ROW_SIZE === 0 &&
                            <>
                                <br></br>
                            </>
                        }  
                    </>    
                ))}
            </div>
            

            // For stretch: Replace backgroundRepeat:"no-repeat" with backgroundSize: "cover", overflow: "hidden"
        )
    }
}

export default Map