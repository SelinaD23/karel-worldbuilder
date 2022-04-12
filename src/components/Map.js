import React from "react"
import Beeper from "./Beeper"
import Vertical from "./Vertical"
import Horizontal from "./Horizontal"
import World from "../World.png"
import MapLocation from "./MapLocation"

const ROW_SIZE = 7;

class Map extends React.Component {

    render() {
        return (
            <div style={{ backgroundImage: `url(${World})`, backgroundRepeat:"no-repeat"}}>
                {this.props.buttons.map((button, index) => (
                    <>
                        <Beeper
                            key={button.id}
                            buttons={button}
                            beeperPress={this.props.beeperPress}
                        />  
                        {index === ROW_SIZE &&
                            <br></br>
                        }  
                    </>    
                ))}
            </div>
            

            // For stretch: Replace backgroundRepeat:"no-repeat" with backgroundSize: "cover", overflow: "hidden"
            //  class="grid grid-cols-4 gap-4 content-evenly" 
            // <div style={{ backgroundImage: `url(${World})`, backgroundRepeat:"no-repeat"}}>
            //     {this.props.buttons.map(buttons => {
            //         <Beeper
            //             key={buttons.id}
            //             buttons={this.props.buttons}
            //             beeperPress={this.props.beeperPress}
            //         />
            //         // console.log(buttons.id);
            //         // if (count % 8 == 0) {
            //         //     <br></br>
            //         // }
            //     })}
            // </div>
        )
    }
}

export default Map