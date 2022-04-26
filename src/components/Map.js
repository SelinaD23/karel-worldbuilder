import React from "react"
import World from "../World.png"
import ThreeButtons from "./ThreeButtons"
import InvisibleButton from "./InvisibleButton"

class Map extends React.Component {

    render() {
        return (
            // bg-top
            // flex flex-wrap items-center justify-center
            <div class="pt-2 pl-14 inline-grid grid-cols-8" style={{ backgroundImage: `url(${World})`, backgroundRepeat:"no-repeat"}}>
                {this.props.buttons.map((button, index) => (
                    <ThreeButtons 
                        key={button.id}
                        button={button}
                        beeperPress={this.props.beeperPress}
                        verticalPress={this.props.verticalPress}
                        horizontalPress={this.props.horizontalPress}
                    />    
                ))}
                <InvisibleButton />
                <br></br>
                <InvisibleButton />
                <br></br>
                <InvisibleButton />
            </div>
            // For stretch: Replace backgroundRepeat:"no-repeat" with backgroundSize: "cover", overflow: "hidden"
        )
    }
}

export default Map