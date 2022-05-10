import React, { useState } from "react"
import Generate from "./Generate"

const Output = (props) => {

    var [topList, setTopList] = useState([]);
    var [beepsList, setBeepsList] = useState([]);
    var [verticalsList, setVerticalsList] = useState([]);
    var [horizontalsList, setHorizontalList] = useState([]);

    const generateMap = event => {
        var text = {
            top: ["1-1-east-inf", "streets 8"],           
            beepers: [],
            vertical: [],
            horizontal: []
        }
        topList = []
        beepsList = []
        verticalsList = []
        horizontalsList = []

        console.log("Generating Map");
        props.buttons.filter(buttons => {

            if (buttons.beeper === true) {
                text.beepers.push((buttons.beeperCommand));
            }
            if (buttons.vertical === true) {
                text.vertical.push((buttons.verticalCommand));
            }
            if (buttons.horizontal === true) {
                text.horizontal.push((buttons.horizontalCommand));
            }
        });

        console.log(text.top.join('\n'))
        console.log(text.beepers.join('\n'));
        console.log(text.vertical.join('\n'));
        console.log(text.horizontal.join('\n'));

        setTopList(topList.concat(text.top));
        setBeepsList(beepsList.concat(text.beepers.join('\r\n')));
        setVerticalsList(verticalsList.concat(text.vertical.join('\r\n')));
        setHorizontalList(horizontalsList.concat(text.horizontal.join('\r\n')));
    }

    return (
        <div>
            {topList.filter(item => (
                {item}
            ))}
            {topList}
            <br></br>
            {beepsList}
            <br></br>
            {verticalsList}
            <br></br>
            {horizontalsList}
            <br></br>
            <Generate 
                onClick = {generateMap}
            />
        </div>
    )
}

export default Output