import React from "react"
import Header from "./Header"
import Map from "./Map"
import Output from "./Output"
import { v4 as uuidv4 } from "uuid";

class KarelContainer extends React.Component {
    // Adding States
    state = {
        // Button states will be saved as a dictionary
        // Key: h/v/b + x + y
        // Item: true/false
        buttonStates: {
            h11: false, h12: false, h13: false, h14: false, h15: false, h16: false, h17: false,
            h21: false, h22: false, h23: false, h24: false, h25: false, h26: false, h27: false,
            h31: false, h32: false, h33: false, h34: false, h35: false, h36: false, h37: false,
            h41: false, h42: false, h43: false, h44: false, h45: false, h46: false, h47: false,
            h51: false, h52: false, h53: false, h54: false, h55: false, h56: false, h57: false,
            h61: false, h62: false, h63: false, h64: false, h65: false, h66: false, h67: false,
            h71: false, h72: false, h73: false, h74: false, h75: false, h76: false, h77: false,
            h81: false, h82: false, h83: false, h84: false, h85: false, h86: false, h87: false,

            v11: false, v12: false, v13: false, v14: false, v15: false, v16: false, v17: false, v18: false,
            v21: false, v22: false, v23: false, v24: false, v25: false, v26: false, v27: false, v28: false,
            v31: false, v32: false, v33: false, v34: false, v35: false, v36: false, v37: false, v38: false,
            v41: false, v42: false, v43: false, v44: false, v45: false, v46: false, v47: false, v48: false,
            v51: false, v52: false, v53: false, v54: false, v55: false, v56: false, v57: false, v58: false,
            v61: false, v62: false, v63: false, v64: false, v65: false, v66: false, v67: false, v68: false,
            v71: false, v72: false, v73: false, v74: false, v75: false, v76: false, v77: false, v78: false,

            b11: false, b12: false, b13: false, b14: false, b15: false, b16: false, b17: false, b18: false,
            b21: false, b22: false, b23: false, b24: false, b25: false, b26: false, b27: false, b28: false,
            b31: false, b32: false, b33: false, b34: false, b35: false, b36: false, b37: false, b38: false,
            b41: false, b42: false, b43: false, b44: false, b45: false, b46: false, b47: false, b48: false,
            b51: false, b52: false, b53: false, b54: false, b55: false, b56: false, b57: false, b58: false,
            b61: false, b62: false, b63: false, b64: false, b65: false, b66: false, b67: false, b68: false,
            b71: false, b72: false, b73: false, b74: false, b75: false, b76: false, b77: false, b78: false,
            b81: false, b82: false, b83: false, b84: false, b85: false, b86: false, b87: false, b88: false,
        } 

        // Commands dictionary



    }
}

// button b11
    // if pressed 
        // states.buttonstates.b11 = True if false else false

// button b12
    // if pressed 
        // states.buttonstates.b12 != states.buttonstates.b12