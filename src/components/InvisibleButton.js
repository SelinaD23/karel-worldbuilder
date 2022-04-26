import React from "react"

class InvisibleButton extends React.Component {
    render() {
        return (
            <button 
                className="bg-transparent text-transparent w-10 h-10 border-transparent rounded-full cursor-default">
                !
            </button>
        );
    }
}
export default InvisibleButton