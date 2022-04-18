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
                id: 81,
                beeper: false, 
                vertical: false, 
                horizontal: false,
                beeperCommand: "beepers 8 1 1",
                verticalCommand: "northsouthwalls 1 1 1",
                horizontalCommand: "eastwestwalls 1 1 1",
            },
            {
                id: 82,
                beeper: false, 
                vertical: false, 
                horizontal: false,
                beeperCommand: "beepers 8 2 1",
                verticalCommand: "northsouthwalls 1 2 2",
                horizontalCommand: "eastwestwalls 2 1 1",
            },
            {
                id: 83,
                beeper: false, 
                vertical: false, 
                horizontal: false,
                beeperCommand: "beepers 8 3 1",
                verticalCommand: "northsouthwalls 1 3 3",
                horizontalCommand: "eastwestwalls 3 1 1",
            },
            {
                id: 84,
                beeper: false, 
                vertical: false, 
                horizontal: false,
                beeperCommand: "beepers 8 4 1",
                verticalCommand: "northsouthwalls 1 4 4",
                horizontalCommand: "eastwestwalls 4 1 1",
            },
            {
                id: 85,
                beeper: false, 
                vertical: false, 
                horizontal: false,
                beeperCommand: "beepers 8 5 1",
                verticalCommand: "northsouthwalls 1 5 5",
                horizontalCommand: "eastwestwalls 5 1 1",
            },
            {
                id: 86,
                beeper: false, 
                vertical: false, 
                horizontal: false,
                beeperCommand: "beepers 8 6 1",
                verticalCommand: "northsouthwalls 1 6 6",
                horizontalCommand: "eastwestwalls 6 1 1",
            },
            {
                id: 87,
                beeper: false, 
                vertical: false, 
                horizontal: false,
                beeperCommand: "beepers 8 7 1",
                verticalCommand: "northsouthwalls 1 7 7",
                horizontalCommand: "eastwestwalls 7 1 1",
            },
            {
                id: 88,
                beeper: false, 
                vertical: false, 
                horizontal: false,
                beeperCommand: "beepers 8 8 1",
                verticalCommand: "northsouthwalls 1 8 8",
                horizontalCommand: "eastwestwalls 8 1 1",
            },
            {
                id: 71,
                beeper: false, 
                vertical: false, 
                horizontal: false,
                beeperCommand: "beepers 7 1 1",
                verticalCommand: "northsouthwalls 1 1 1",
                horizontalCommand: "eastwestwalls 1 1 1",
            },
            {
                id: 72,
                beeper: false, 
                vertical: false, 
                horizontal: false,
                beeperCommand: "beepers 7 2 1",
                verticalCommand: "northsouthwalls 1 2 2",
                horizontalCommand: "eastwestwalls 2 1 1",
            },
            {
                id: 73,
                beeper: false, 
                vertical: false, 
                horizontal: false,
                beeperCommand: "beepers 7 3 1",
                verticalCommand: "northsouthwalls 1 3 3",
                horizontalCommand: "eastwestwalls 3 1 1",
            },
            {
                id: 74,
                beeper: false, 
                vertical: false, 
                horizontal: false,
                beeperCommand: "beepers 7 4 1",
                verticalCommand: "northsouthwalls 1 4 4",
                horizontalCommand: "eastwestwalls 4 1 1",
            },
            {
                id: 75,
                beeper: false, 
                vertical: false, 
                horizontal: false,
                beeperCommand: "beepers 7 5 1",
                verticalCommand: "northsouthwalls 1 5 5",
                horizontalCommand: "eastwestwalls 5 1 1",
            },
            {
                id: 76,
                beeper: false, 
                vertical: false, 
                horizontal: false,
                beeperCommand: "beepers 7 6 1",
                verticalCommand: "northsouthwalls 1 6 6",
                horizontalCommand: "eastwestwalls 6 1 1",
            },
            {
                id: 77,
                beeper: false, 
                vertical: false, 
                horizontal: false,
                beeperCommand: "beepers 7 7 1",
                verticalCommand: "northsouthwalls 1 7 7",
                horizontalCommand: "eastwestwalls 7 1 1",
            },
            {
                id: 78,
                beeper: false, 
                vertical: false, 
                horizontal: false,
                beeperCommand: "beepers 7 8 1",
                verticalCommand: "northsouthwalls 1 8 8",
                horizontalCommand: "eastwestwalls 8 1 1",
            },
            {
                id: 61,
                beeper: false, 
                vertical: false, 
                horizontal: false,
                beeperCommand: "beepers 6 1 1",
                verticalCommand: "northsouthwalls 1 1 1",
                horizontalCommand: "eastwestwalls 1 1 1",
            },
            {
                id: 62,
                beeper: false, 
                vertical: false, 
                horizontal: false,
                beeperCommand: "beepers 6 2 1",
                verticalCommand: "northsouthwalls 1 2 2",
                horizontalCommand: "eastwestwalls 2 1 1",
            },
            {
                id: 63,
                beeper: false, 
                vertical: false, 
                horizontal: false,
                beeperCommand: "beepers 6 3 1",
                verticalCommand: "northsouthwalls 1 3 3",
                horizontalCommand: "eastwestwalls 3 1 1",
            },
            {
                id: 64,
                beeper: false, 
                vertical: false, 
                horizontal: false,
                beeperCommand: "beepers 6 4 1",
                verticalCommand: "northsouthwalls 1 4 4",
                horizontalCommand: "eastwestwalls 4 1 1",
            },
            {
                id: 65,
                beeper: false, 
                vertical: false, 
                horizontal: false,
                beeperCommand: "beepers 6 5 1",
                verticalCommand: "northsouthwalls 1 5 5",
                horizontalCommand: "eastwestwalls 5 1 1",
            },
            {
                id: 66,
                beeper: false, 
                vertical: false, 
                horizontal: false,
                beeperCommand: "beepers 6 6 1",
                verticalCommand: "northsouthwalls 1 6 6",
                horizontalCommand: "eastwestwalls 6 1 1",
            },
            {
                id: 67,
                beeper: false, 
                vertical: false, 
                horizontal: false,
                beeperCommand: "beepers 6 7 1",
                verticalCommand: "northsouthwalls 1 7 7",
                horizontalCommand: "eastwestwalls 7 1 1",
            },
            {
                id: 68,
                beeper: false, 
                vertical: false, 
                horizontal: false,
                beeperCommand: "beepers 6 8 1",
                verticalCommand: "northsouthwalls 1 8 8",
                horizontalCommand: "eastwestwalls 8 1 1",
            },
            {
                id: 51,
                beeper: false, 
                vertical: false, 
                horizontal: false,
                beeperCommand: "beepers 5 1 1",
                verticalCommand: "northsouthwalls 1 1 1",
                horizontalCommand: "eastwestwalls 1 1 1",
            },
            {
                id: 52,
                beeper: false, 
                vertical: false, 
                horizontal: false,
                beeperCommand: "beepers 5 2 1",
                verticalCommand: "northsouthwalls 1 2 2",
                horizontalCommand: "eastwestwalls 2 1 1",
            },
            {
                id: 53,
                beeper: false, 
                vertical: false, 
                horizontal: false,
                beeperCommand: "beepers 5 3 1",
                verticalCommand: "northsouthwalls 1 3 3",
                horizontalCommand: "eastwestwalls 3 1 1",
            },
            {
                id: 54,
                beeper: false, 
                vertical: false, 
                horizontal: false,
                beeperCommand: "beepers 5 4 1",
                verticalCommand: "northsouthwalls 1 4 4",
                horizontalCommand: "eastwestwalls 4 1 1",
            },
            {
                id: 55,
                beeper: false, 
                vertical: false, 
                horizontal: false,
                beeperCommand: "beepers 5 5 1",
                verticalCommand: "northsouthwalls 1 5 5",
                horizontalCommand: "eastwestwalls 5 1 1",
            },
            {
                id: 56,
                beeper: false, 
                vertical: false, 
                horizontal: false,
                beeperCommand: "beepers 5 6 1",
                verticalCommand: "northsouthwalls 1 6 6",
                horizontalCommand: "eastwestwalls 6 1 1",
            },
            {
                id: 57,
                beeper: false, 
                vertical: false, 
                horizontal: false,
                beeperCommand: "beepers 5 7 1",
                verticalCommand: "northsouthwalls 1 7 7",
                horizontalCommand: "eastwestwalls 7 1 1",
            },
            {
                id: 58,
                beeper: false, 
                vertical: false, 
                horizontal: false,
                beeperCommand: "beepers 5 8 1",
                verticalCommand: "northsouthwalls 1 8 8",
                horizontalCommand: "eastwestwalls 8 1 1",
            },
            {
                id: 41,
                beeper: false, 
                vertical: false, 
                horizontal: false,
                beeperCommand: "beepers 4 1 1",
                verticalCommand: "northsouthwalls 1 1 1",
                horizontalCommand: "eastwestwalls 1 1 1",
            },
            {
                id: 42,
                beeper: false, 
                vertical: false, 
                horizontal: false,
                beeperCommand: "beepers 4 2 1",
                verticalCommand: "northsouthwalls 1 2 2",
                horizontalCommand: "eastwestwalls 2 1 1",
            },
            {
                id: 43,
                beeper: false, 
                vertical: false, 
                horizontal: false,
                beeperCommand: "beepers 4 3 1",
                verticalCommand: "northsouthwalls 1 3 3",
                horizontalCommand: "eastwestwalls 3 1 1",
            },
            {
                id: 44,
                beeper: false, 
                vertical: false, 
                horizontal: false,
                beeperCommand: "beepers 4 4 1",
                verticalCommand: "northsouthwalls 1 4 4",
                horizontalCommand: "eastwestwalls 4 1 1",
            },
            {
                id: 45,
                beeper: false, 
                vertical: false, 
                horizontal: false,
                beeperCommand: "beepers 4 5 1",
                verticalCommand: "northsouthwalls 1 5 5",
                horizontalCommand: "eastwestwalls 5 1 1",
            },
            {
                id: 46,
                beeper: false, 
                vertical: false, 
                horizontal: false,
                beeperCommand: "beepers 4 6 1",
                verticalCommand: "northsouthwalls 1 6 6",
                horizontalCommand: "eastwestwalls 6 1 1",
            },
            {
                id: 47,
                beeper: false, 
                vertical: false, 
                horizontal: false,
                beeperCommand: "beepers 4 7 1",
                verticalCommand: "northsouthwalls 1 7 7",
                horizontalCommand: "eastwestwalls 7 1 1",
            },
            {
                id: 48,
                beeper: false, 
                vertical: false, 
                horizontal: false,
                beeperCommand: "beepers 4 8 1",
                verticalCommand: "northsouthwalls 1 8 8",
                horizontalCommand: "eastwestwalls 8 1 1",
            },
            {
                id: 31,
                beeper: false, 
                vertical: false, 
                horizontal: false,
                beeperCommand: "beepers 3 1 1",
                verticalCommand: "northsouthwalls 1 1 1",
                horizontalCommand: "eastwestwalls 1 1 1",
            },
            {
                id: 32,
                beeper: false, 
                vertical: false, 
                horizontal: false,
                beeperCommand: "beepers 3 2 1",
                verticalCommand: "northsouthwalls 1 2 2",
                horizontalCommand: "eastwestwalls 2 1 1",
            },
            {
                id: 33,
                beeper: false, 
                vertical: false, 
                horizontal: false,
                beeperCommand: "beepers 3 3 1",
                verticalCommand: "northsouthwalls 1 3 3",
                horizontalCommand: "eastwestwalls 3 1 1",
            },
            {
                id: 34,
                beeper: false, 
                vertical: false, 
                horizontal: false,
                beeperCommand: "beepers 3 4 1",
                verticalCommand: "northsouthwalls 1 4 4",
                horizontalCommand: "eastwestwalls 4 1 1",
            },
            {
                id: 35,
                beeper: false, 
                vertical: false, 
                horizontal: false,
                beeperCommand: "beepers 3 5 1",
                verticalCommand: "northsouthwalls 1 5 5",
                horizontalCommand: "eastwestwalls 5 1 1",
            },
            {
                id: 36,
                beeper: false, 
                vertical: false, 
                horizontal: false,
                beeperCommand: "beepers 3 6 1",
                verticalCommand: "northsouthwalls 1 6 6",
                horizontalCommand: "eastwestwalls 6 1 1",
            },
            {
                id: 37,
                beeper: false, 
                vertical: false, 
                horizontal: false,
                beeperCommand: "beepers 3 7 1",
                verticalCommand: "northsouthwalls 1 7 7",
                horizontalCommand: "eastwestwalls 7 1 1",
            },
            {
                id: 38,
                beeper: false, 
                vertical: false, 
                horizontal: false,
                beeperCommand: "beepers 3 8 1",
                verticalCommand: "northsouthwalls 1 8 8",
                horizontalCommand: "eastwestwalls 8 1 1",
            },
            {
                id: 21,
                beeper: false, 
                vertical: false, 
                horizontal: false,
                beeperCommand: "beepers 2 1 1",
                verticalCommand: "northsouthwalls 1 1 1",
                horizontalCommand: "eastwestwalls 1 1 1",
            },
            {
                id: 22,
                beeper: false, 
                vertical: false, 
                horizontal: false,
                beeperCommand: "beepers 2 2 1",
                verticalCommand: "northsouthwalls 1 2 2",
                horizontalCommand: "eastwestwalls 2 1 1",
            },
            {
                id: 23,
                beeper: false, 
                vertical: false, 
                horizontal: false,
                beeperCommand: "beepers 2 3 1",
                verticalCommand: "northsouthwalls 1 3 3",
                horizontalCommand: "eastwestwalls 3 1 1",
            },
            {
                id: 24,
                beeper: false, 
                vertical: false, 
                horizontal: false,
                beeperCommand: "beepers 2 4 1",
                verticalCommand: "northsouthwalls 1 4 4",
                horizontalCommand: "eastwestwalls 4 1 1",
            },
            {
                id: 25,
                beeper: false, 
                vertical: false, 
                horizontal: false,
                beeperCommand: "beepers 2 5 1",
                verticalCommand: "northsouthwalls 1 5 5",
                horizontalCommand: "eastwestwalls 5 1 1",
            },
            {
                id: 26,
                beeper: false, 
                vertical: false, 
                horizontal: false,
                beeperCommand: "beepers 2 6 1",
                verticalCommand: "northsouthwalls 1 6 6",
                horizontalCommand: "eastwestwalls 6 1 1",
            },
            {
                id: 27,
                beeper: false, 
                vertical: false, 
                horizontal: false,
                beeperCommand: "beepers 2 7 1",
                verticalCommand: "northsouthwalls 1 7 7",
                horizontalCommand: "eastwestwalls 7 1 1",
            },
            {
                id: 28,
                beeper: false, 
                vertical: false, 
                horizontal: false,
                beeperCommand: "beepers 2 8 1",
                verticalCommand: "northsouthwalls 1 8 8",
                horizontalCommand: "eastwestwalls 8 1 1",
            },
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
                beeperCommand: "beepers 1 2 1",
                verticalCommand: "northsouthwalls 1 2 2",
                horizontalCommand: "eastwestwalls 2 1 1",
            },
            {
                id: 13,
                beeper: false, 
                vertical: false, 
                horizontal: false,
                beeperCommand: "beepers 1 3 1",
                verticalCommand: "northsouthwalls 1 3 3",
                horizontalCommand: "eastwestwalls 3 1 1",
            },
            {
                id: 14,
                beeper: false, 
                vertical: false, 
                horizontal: false,
                beeperCommand: "beepers 1 4 1",
                verticalCommand: "northsouthwalls 1 4 4",
                horizontalCommand: "eastwestwalls 4 1 1",
            },
            {
                id: 15,
                beeper: false, 
                vertical: false, 
                horizontal: false,
                beeperCommand: "beepers 1 5 1",
                verticalCommand: "northsouthwalls 1 5 5",
                horizontalCommand: "eastwestwalls 5 1 1",
            },
            {
                id: 16,
                beeper: false, 
                vertical: false, 
                horizontal: false,
                beeperCommand: "beepers 1 6 1",
                verticalCommand: "northsouthwalls 1 6 6",
                horizontalCommand: "eastwestwalls 6 1 1",
            },
            {
                id: 17,
                beeper: false, 
                vertical: false, 
                horizontal: false,
                beeperCommand: "beepers 1 7 1",
                verticalCommand: "northsouthwalls 1 7 7",
                horizontalCommand: "eastwestwalls 7 1 1",
            },
            {
                id: 18,
                beeper: false, 
                vertical: false, 
                horizontal: false,
                beeperCommand: "beepers 1 8 1",
                verticalCommand: "northsouthwalls 1 8 8",
                horizontalCommand: "eastwestwalls 8 1 1",
            },
        ]

    };

    beeperPress = id => {
        console.log("Beeper", id);
        this.state.buttons.filter(buttons => {
            if (buttons.id === id) {
                buttons.beeper = !buttons.beeper;
            }
            console.log("Beeper", buttons.id, buttons.beeper);
        });
    };

    verticalPress = id => {
        console.log("Vertical", id);
        this.state.buttons.filter(buttons => {
            if (buttons.id === id) {
                buttons.vertical = !buttons.vertical;
            }
            console.log("Vertical", buttons.id, buttons.vertical);
        });
    };

    horizontalPress = id => {
        console.log("Horizontal", id);
        this.state.buttons.filter(buttons => {
            if (buttons.id === id) {
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

            if (buttons.beeper === true) {
                beepers.push((buttons.beeperCommand));
            }
            if (buttons.vertical === true) {
                vertical.push((buttons.verticalCommand));
            }
            if (buttons.horizontal === true) {
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
//                    verticalPress={this.verticalPress}
//                    horizontalPress={this.horizontalPress}
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