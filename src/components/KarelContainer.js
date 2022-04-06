import React from "react"
import Map from "./Map"
import Output from "./Output"

class KarelContainer extends React.Component {
    // Adding States
    state = {
        // Button states will be saved as a dictionary
        // Key: h/v/b + x + y
        // Item: true/false

        // Commands dictionary
        // 1-1-east-inf
        // streats 8
        // beepers y x 1
        // northsouthwalls x y y
        // eastwestwalls y x x

        // Testing
        buttons: [
            {
                id: 11,
                beeper: false, 
                vertical: false, 
                horizontal: false,
                beeperCommand: "beepers 1 1 1",
                verticalCommand: "northsouthwalls 1 1 1",
                horizontalCommand: "eastwestwalls 1 1 1",
            },
            {
                id: 12,
                beeper: false, 
                vertical: false, 
                horizontal: false,
                beeperCommand: "beepers 2 1 1",
                verticalCommand: "northsouthwalls 1 2 2",
                horizontalCommand: "eastwestwalls 2 1 1",
            },
            {
                id: 13,
                beeper: false, 
                vertical: false, 
                horizontal: false,
                beeperCommand: "beepers 3 1 1",
                verticalCommand: "northsouthwalls 1 3 3",
                horizontalCommand: "eastwestwalls 3 1 1",
            },
            {
                id: 14,
                beeper: false, 
                vertical: false, 
                horizontal: false,
                beeperCommand: "beepers 4 1 1",
                verticalCommand: "northsouthwalls 1 4 4",
                horizontalCommand: "eastwestwalls 4 1 1",
            },
            {
                id: 15,
                beeper: false, 
                vertical: false, 
                horizontal: false,
                beeperCommand: "beepers 5 1 1",
                verticalCommand: "northsouthwalls 1 5 5",
                horizontalCommand: "eastwestwalls 5 1 1",
            },
            {
                id: 16,
                beeper: false, 
                vertical: false, 
                horizontal: false,
                beeperCommand: "beepers 6 1 1",
                verticalCommand: "northsouthwalls 1 6 6",
                horizontalCommand: "eastwestwalls 6 1 1",
            },
            {
                id: 17,
                beeper: false, 
                vertical: false, 
                horizontal: false,
                beeperCommand: "beepers 7 1 1",
                verticalCommand: "northsouthwalls 1 7 7",
                horizontalCommand: "eastwestwalls 7 1 1",
            },
            {
                id: 18,
                beeper: false, 
                vertical: false, 
                horizontal: false,
                beeperCommand: "beepers 8 1 1",
                verticalCommand: "northsouthwalls 1 8 8",
                horizontalCommand: "eastwestwalls 8 1 1",
            },
            {
                id: 21,
                beeper: false, 
                vertical: false, 
                horizontal: false,
                beeperCommand: "beepers 1 2 2",
                verticalCommand: "northsouthwalls 2 1 1",
                horizontalCommand: "eastwestwalls 1 2 2",
            }
        ]

    };

    beeperPress = id => {
        console.log("Beeper", id);
        this.state.buttons.filter(buttons => {
            if (buttons.id == id) {
                buttons.beeper = !buttons.beeper;
            }
            console.log("Beeper", buttons.id, buttons.beeper);
        });
    };

    verticalPress = id => {
        console.log("Vertical", id);
        this.state.buttons.filter(buttons => {
            if (buttons.id == id) {
                buttons.vertical = !buttons.vertical;
            }
            console.log("Vertical", buttons.id, buttons.vertical);
        });
    };

    horizontalPress = id => {
        console.log("Horizontal", id);
        this.state.buttons.filter(buttons => {
            if (buttons.id == id) {
                buttons.horizontal = !buttons.horizontal;
            }
            console.log("Horizontal", buttons.id, buttons.horizontal);
        });
    };

    generateMap = () => {
        console.log("Generating Map");
        var beepers = [];
        var vertical = []
        var horizontal = []

        this.state.buttons.filter(buttons => {

            if (buttons.beeper == true) {
                beepers.push((buttons.beeperCommand));
            }
            if (buttons.vertical == true) {
                vertical.push((buttons.verticalCommand));
            }
            if (buttons.horizontal == true) {
                horizontal.push((buttons.horizontalCommand));
            }
        });

        console.log("1-1-east-inf\nstreets 8")
        console.log(beepers.join('\n'));
        console.log(vertical.join('\n'));
        console.log(horizontal.join('\n'));
    }

    render() {
        return (
            <div>
                <Map
                    buttons={this.state.buttons}
                    beeperPress={this.beeperPress}
                    verticalPress={this.verticalPress}
                    horizontalPress={this.horizontalPress}
                />
                <Output 
                    buttons={this.state.buttons}
                    generateMap={this.generateMap}
                />
            </div>
        );
    };
}

export default KarelContainer