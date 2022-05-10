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
                verticalCommand: "northsouthwalls 1 8 8",
                horizontalCommand: "eastwestwalls 7 1 1",
            },
            {
                id: 82,
                beeper: false, 
                vertical: false, 
                horizontal: false,
                beeperCommand: "beepers 8 2 1",
                verticalCommand: "northsouthwalls 2 8 8",
                horizontalCommand: "eastwestwalls 7 2 2",
            },
            {
                id: 83,
                beeper: false, 
                vertical: false, 
                horizontal: false,
                beeperCommand: "beepers 8 3 1",
                verticalCommand: "northsouthwalls 3 8 8",
                horizontalCommand: "eastwestwalls 7 3 3",
            },
            {
                id: 84,
                beeper: false, 
                vertical: false, 
                horizontal: false,
                beeperCommand: "beepers 8 4 1",
                verticalCommand: "northsouthwalls 4 8 8",
                horizontalCommand: "eastwestwalls 7 4 4",
            },
            {
                id: 85,
                beeper: false, 
                vertical: false, 
                horizontal: false,
                beeperCommand: "beepers 8 5 1",
                verticalCommand: "northsouthwalls 5 8 8",
                horizontalCommand: "eastwestwalls 7 5 5",
            },
            {
                id: 86,
                beeper: false, 
                vertical: false, 
                horizontal: false,
                beeperCommand: "beepers 8 6 1",
                verticalCommand: "northsouthwalls 6 8 8",
                horizontalCommand: "eastwestwalls 7 6 6",
            },
            {
                id: 87,
                beeper: false, 
                vertical: false, 
                horizontal: false,
                beeperCommand: "beepers 8 7 1",
                verticalCommand: "northsouthwalls 7 8 8",
                horizontalCommand: "eastwestwalls 7 7 7",
            },
            {
                id: 88,
                beeper: false, 
                vertical: null, 
                horizontal: false,
                beeperCommand: "beepers 8 8 1",
                verticalCommand: "NONE",
                horizontalCommand: "eastwestwalls 7 8 8",
            },
            {
                id: 71,
                beeper: false, 
                vertical: false, 
                horizontal: false,
                beeperCommand: "beepers 7 1 1",
                verticalCommand: "northsouthwalls 1 7 7",
                horizontalCommand: "eastwestwalls 6 1 1",
            },
            {
                id: 72,
                beeper: false, 
                vertical: false, 
                horizontal: false,
                beeperCommand: "beepers 7 2 1",
                verticalCommand: "northsouthwalls 2 7 7",
                horizontalCommand: "eastwestwalls 6 2 2",
            },
            {
                id: 73,
                beeper: false, 
                vertical: false, 
                horizontal: false,
                beeperCommand: "beepers 7 3 1",
                verticalCommand: "northsouthwalls 3 7 7",
                horizontalCommand: "eastwestwalls 6 3 3",
            },
            {
                id: 74,
                beeper: false, 
                vertical: false, 
                horizontal: false,
                beeperCommand: "beepers 7 4 1",
                verticalCommand: "northsouthwalls 4 7 7",
                horizontalCommand: "eastwestwalls 6 4 4",
            },
            {
                id: 75,
                beeper: false, 
                vertical: false, 
                horizontal: false,
                beeperCommand: "beepers 7 5 1",
                verticalCommand: "northsouthwalls 5 7 7",
                horizontalCommand: "eastwestwalls 6 5 5",
            },
            {
                id: 76,
                beeper: false, 
                vertical: false, 
                horizontal: false,
                beeperCommand: "beepers 7 6 1",
                verticalCommand: "northsouthwalls 6 7 7",
                horizontalCommand: "eastwestwalls 6 6 6",
            },
            {
                id: 77,
                beeper: false, 
                vertical: false, 
                horizontal: false,
                beeperCommand: "beepers 7 7 1",
                verticalCommand: "northsouthwalls 7 7 7",
                horizontalCommand: "eastwestwalls 6 7 7",
            },
            {
                id: 78,
                beeper: false, 
                vertical: null, 
                horizontal: false,
                beeperCommand: "beepers 7 8 1",
                verticalCommand: "NONE",
                horizontalCommand: "eastwestwalls 6 8 8",
            },
            {
                id: 61,
                beeper: false, 
                vertical: false, 
                horizontal: false,
                beeperCommand: "beepers 6 1 1",
                verticalCommand: "northsouthwalls 1 6 6",
                horizontalCommand: "eastwestwalls 5 1 1",
            },
            {
                id: 62,
                beeper: false, 
                vertical: false, 
                horizontal: false,
                beeperCommand: "beepers 6 2 1",
                verticalCommand: "northsouthwalls 2 6 6",
                horizontalCommand: "eastwestwalls 5 2 2",
            },
            {
                id: 63,
                beeper: false, 
                vertical: false, 
                horizontal: false,
                beeperCommand: "beepers 6 3 1",
                verticalCommand: "northsouthwalls 3 6 6",
                horizontalCommand: "eastwestwalls 5 3 3",
            },
            {
                id: 64,
                beeper: false, 
                vertical: false, 
                horizontal: false,
                beeperCommand: "beepers 6 4 1",
                verticalCommand: "northsouthwalls 4 6 6",
                horizontalCommand: "eastwestwalls 5 4 4",
            },
            {
                id: 65,
                beeper: false, 
                vertical: false, 
                horizontal: false,
                beeperCommand: "beepers 6 5 1",
                verticalCommand: "northsouthwalls 5 6 6",
                horizontalCommand: "eastwestwalls 5 5 5",
            },
            {
                id: 66,
                beeper: false, 
                vertical: false, 
                horizontal: false,
                beeperCommand: "beepers 6 6 1",
                verticalCommand: "northsouthwalls 6 6 6",
                horizontalCommand: "eastwestwalls 5 6 6",
            },
            {
                id: 67,
                beeper: false, 
                vertical: false, 
                horizontal: false,
                beeperCommand: "beepers 6 7 1",
                verticalCommand: "northsouthwalls 7 6 6",
                horizontalCommand: "eastwestwalls 5 7 7",
            },
            {
                id: 68,
                beeper: false, 
                vertical: null, 
                horizontal: false,
                beeperCommand: "beepers 6 8 1",
                verticalCommand: "NONE",
                horizontalCommand: "eastwestwalls 5 8 8",
            },
            {
                id: 51,
                beeper: false, 
                vertical: false, 
                horizontal: false,
                beeperCommand: "beepers 5 1 1",
                verticalCommand: "northsouthwalls 1 5 5",
                horizontalCommand: "eastwestwalls 4 1 1",
            },
            {
                id: 52,
                beeper: false, 
                vertical: false, 
                horizontal: false,
                beeperCommand: "beepers 5 2 1",
                verticalCommand: "northsouthwalls 2 5 5",
                horizontalCommand: "eastwestwalls 4 2 2",
            },
            {
                id: 53,
                beeper: false, 
                vertical: false, 
                horizontal: false,
                beeperCommand: "beepers 5 3 1",
                verticalCommand: "northsouthwalls 3 5 5",
                horizontalCommand: "eastwestwalls 4 3 3",
            },
            {
                id: 54,
                beeper: false, 
                vertical: false, 
                horizontal: false,
                beeperCommand: "beepers 5 4 1",
                verticalCommand: "northsouthwalls 4 5 5",
                horizontalCommand: "eastwestwalls 4 4 4",
            },
            {
                id: 55,
                beeper: false, 
                vertical: false, 
                horizontal: false,
                beeperCommand: "beepers 5 5 1",
                verticalCommand: "northsouthwalls 5 5 5",
                horizontalCommand: "eastwestwalls 4 5 5",
            },
            {
                id: 56,
                beeper: false, 
                vertical: false, 
                horizontal: false,
                beeperCommand: "beepers 5 6 1",
                verticalCommand: "northsouthwalls 6 5 5",
                horizontalCommand: "eastwestwalls 4 6 6",
            },
            {
                id: 57,
                beeper: false, 
                vertical: false, 
                horizontal: false,
                beeperCommand: "beepers 5 7 1",
                verticalCommand: "northsouthwalls 7 5 5",
                horizontalCommand: "eastwestwalls 4 7 7",
            },
            {
                id: 58,
                beeper: false, 
                vertical: null, 
                horizontal: false,
                beeperCommand: "beepers 5 8 1",
                verticalCommand: "NONE",
                horizontalCommand: "eastwestwalls 4 8 8",
            },
            {
                id: 41,
                beeper: false, 
                vertical: false, 
                horizontal: false,
                beeperCommand: "beepers 4 1 1",
                verticalCommand: "northsouthwalls 1 4 4",
                horizontalCommand: "eastwestwalls 3 1 1",
            },
            {
                id: 42,
                beeper: false, 
                vertical: false, 
                horizontal: false,
                beeperCommand: "beepers 4 2 1",
                verticalCommand: "northsouthwalls 2 4 4",
                horizontalCommand: "eastwestwalls 3 2 2",
            },
            {
                id: 43,
                beeper: false, 
                vertical: false, 
                horizontal: false,
                beeperCommand: "beepers 4 3 1",
                verticalCommand: "northsouthwalls 3 4 4",
                horizontalCommand: "eastwestwalls 3 3 3",
            },
            {
                id: 44,
                beeper: false, 
                vertical: false, 
                horizontal: false,
                beeperCommand: "beepers 4 4 1",
                verticalCommand: "northsouthwalls 4 4 4",
                horizontalCommand: "eastwestwalls 3 4 4",
            },
            {
                id: 45,
                beeper: false, 
                vertical: false, 
                horizontal: false,
                beeperCommand: "beepers 4 5 1",
                verticalCommand: "northsouthwalls 5 4 4",
                horizontalCommand: "eastwestwalls 3 5 5",
            },
            {
                id: 46,
                beeper: false, 
                vertical: false, 
                horizontal: false,
                beeperCommand: "beepers 4 6 1",
                verticalCommand: "northsouthwalls 6 4 4",
                horizontalCommand: "eastwestwalls 3 6 6",
            },
            {
                id: 47,
                beeper: false, 
                vertical: false, 
                horizontal: false,
                beeperCommand: "beepers 4 7 1",
                verticalCommand: "northsouthwalls 7 4 4",
                horizontalCommand: "eastwestwalls 3 7 7",
            },
            {
                id: 48,
                beeper: false, 
                vertical: null, 
                horizontal: false,
                beeperCommand: "beepers 4 8 1",
                verticalCommand: "NONE",
                horizontalCommand: "eastwestwalls 3 8 8",
            },
            {
                id: 31,
                beeper: false, 
                vertical: false, 
                horizontal: false,
                beeperCommand: "beepers 3 1 1",
                verticalCommand: "northsouthwalls 1 3 3",
                horizontalCommand: "eastwestwalls 2 1 1",
            },
            {
                id: 32,
                beeper: false, 
                vertical: false, 
                horizontal: false,
                beeperCommand: "beepers 3 2 1",
                verticalCommand: "northsouthwalls 2 3 3",
                horizontalCommand: "eastwestwalls 2 2 2",
            },
            {
                id: 33,
                beeper: false, 
                vertical: false, 
                horizontal: false,
                beeperCommand: "beepers 3 3 1",
                verticalCommand: "northsouthwalls 3 3 3",
                horizontalCommand: "eastwestwalls 2 3 3",
            },
            {
                id: 34,
                beeper: false, 
                vertical: false, 
                horizontal: false,
                beeperCommand: "beepers 3 4 1",
                verticalCommand: "northsouthwalls 4 3 3",
                horizontalCommand: "eastwestwalls 2 4 4",
            },
            {
                id: 35,
                beeper: false, 
                vertical: false, 
                horizontal: false,
                beeperCommand: "beepers 3 5 1",
                verticalCommand: "northsouthwalls 5 3 3",
                horizontalCommand: "eastwestwalls 2 5 5",
            },
            {
                id: 36,
                beeper: false, 
                vertical: false, 
                horizontal: false,
                beeperCommand: "beepers 3 6 1",
                verticalCommand: "northsouthwalls 6 3 3",
                horizontalCommand: "eastwestwalls 2 6 6",
            },
            {
                id: 37,
                beeper: false, 
                vertical: false, 
                horizontal: false,
                beeperCommand: "beepers 3 7 1",
                verticalCommand: "northsouthwalls 7 3 3",
                horizontalCommand: "eastwestwalls 2 7 7",
            },
            {
                id: 38,
                beeper: false, 
                vertical: null, 
                horizontal: false,
                beeperCommand: "beepers 3 8 1",
                verticalCommand: "NONE",
                horizontalCommand: "eastwestwalls 2 8 8",
            },
            {
                id: 21,
                beeper: false, 
                vertical: false, 
                horizontal: false,
                beeperCommand: "beepers 2 1 1",
                verticalCommand: "northsouthwalls 1 2 2",
                horizontalCommand: "eastwestwalls 1 1 1",
            },
            {
                id: 22,
                beeper: false, 
                vertical: false, 
                horizontal: false,
                beeperCommand: "beepers 2 2 1",
                verticalCommand: "northsouthwalls 2 2 2",
                horizontalCommand: "eastwestwalls 1 2 2",
            },
            {
                id: 23,
                beeper: false, 
                vertical: false, 
                horizontal: false,
                beeperCommand: "beepers 2 3 1",
                verticalCommand: "northsouthwalls 3 2 2",
                horizontalCommand: "eastwestwalls 1 3 3",
            },
            {
                id: 24,
                beeper: false, 
                vertical: false, 
                horizontal: false,
                beeperCommand: "beepers 2 4 1",
                verticalCommand: "northsouthwalls 4 2 2",
                horizontalCommand: "eastwestwalls 1 4 4",
            },
            {
                id: 25,
                beeper: false, 
                vertical: false, 
                horizontal: false,
                beeperCommand: "beepers 2 5 1",
                verticalCommand: "northsouthwalls 5 2 2",
                horizontalCommand: "eastwestwalls 1 5 5",
            },
            {
                id: 26,
                beeper: false, 
                vertical: false, 
                horizontal: false,
                beeperCommand: "beepers 2 6 1",
                verticalCommand: "northsouthwalls 6 2 2",
                horizontalCommand: "eastwestwalls 1 6 6",
            },
            {
                id: 27,
                beeper: false, 
                vertical: false, 
                horizontal: false,
                beeperCommand: "beepers 2 7 1",
                verticalCommand: "northsouthwalls 7 2 2",
                horizontalCommand: "eastwestwalls 1 7 7",
            },
            {
                id: 28,
                beeper: false, 
                vertical: null, 
                horizontal: false,
                beeperCommand: "beepers 2 8 1",
                verticalCommand: "NONE",
                horizontalCommand: "eastwestwalls 1 8 8",
            },
            {
                id: 11,
                beeper: false, 
                vertical: false, 
                horizontal: null,
                beeperCommand: "beepers 1 1 1",
                verticalCommand: "northsouthwalls 1 1 1",
                horizontalCommand: "NONE"
            },
            {
                id: 12,
                beeper: false, 
                vertical: false, 
                horizontal: null,
                beeperCommand: "beepers 1 2 1",
                verticalCommand: "northsouthwalls 2 1 1",
                horizontalCommand: "NONE"
            },
            {
                id: 13,
                beeper: false, 
                vertical: false, 
                horizontal: null,
                beeperCommand: "beepers 1 3 1",
                verticalCommand: "northsouthwalls 3 1 1",
                horizontalCommand: "NONE"
            },
            {
                id: 14,
                beeper: false, 
                vertical: false, 
                horizontal: null,
                beeperCommand: "beepers 1 4 1",
                verticalCommand: "northsouthwalls 4 1 1",
                horizontalCommand: "NONE"
            },
            {
                id: 15,
                beeper: false, 
                vertical: false, 
                horizontal: null,
                beeperCommand: "beepers 1 5 1",
                verticalCommand: "northsouthwalls 5 1 1",
                horizontalCommand: "NONE"
            },
            {
                id: 16,
                beeper: false, 
                vertical: false, 
                horizontal: null,
                beeperCommand: "beepers 1 6 1",
                verticalCommand: "northsouthwalls 6 1 1",
                horizontalCommand: "NONE"
            },
            {
                id: 17,
                beeper: false, 
                vertical: false, 
                horizontal: null,
                beeperCommand: "beepers 1 7 1",
                verticalCommand: "northsouthwalls 7 1 1",
                horizontalCommand: "NONE"
            },
            {
                id: 18,
                beeper: false, 
                vertical: null, 
                horizontal: null,
                beeperCommand: "beepers 1 8 1",
                verticalCommand: "NONE",
                horizontalCommand: "NONE"
            }
        ],

        text: {             
            top: ["1-1-east-inf", "streets 8"],           
            beepers: [],
            vertical: [],
            horizontal: []
        }
    };

    beeperPress = id => {
        console.log("Beeper", id);
        this.state.buttons.filter(buttons => {
            if (buttons.id === id) {
                buttons.beeper = !buttons.beeper;
            }
        });
    };

    verticalPress = id => {
        console.log("Vertical", id);
        this.state.buttons.filter(buttons => {
            if (buttons.id === id) {
                buttons.vertical = !buttons.vertical;
            }
        });
    };

    horizontalPress = id => {
        console.log("Horizontal", id);
        this.state.buttons.filter(buttons => {
            if (buttons.id === id) {
                buttons.horizontal = !buttons.horizontal;
            }
        });
    };

    generateMap = () => {
        this.state.text = {
            top: ["1-1-east-inf", "streets 8"],           
            beepers: [],
            vertical: [],
            horizontal: []
        }

        console.log("Generating Map");
        this.state.buttons.filter(buttons => {

            if (buttons.beeper === true) {
                this.state.text.beepers.push((buttons.beeperCommand));
            }
            if (buttons.vertical === true) {
                this.state.text.vertical.push((buttons.verticalCommand));
            }
            if (buttons.horizontal === true) {
                this.state.text.horizontal.push((buttons.horizontalCommand));
            }
        });

        console.log(this.state.text.top.join('\n'))
        console.log(this.state.text.beepers.join('\n'));
        console.log(this.state.text.vertical.join('\n'));
        console.log(this.state.text.horizontal.join('\n'));

        this.render()
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
                />
            </div>
        );
    };
}

export default KarelContainer