import React, { Component } from "react";

class MapText extends Component {
  render() {
    return (
        <div className="h-64">
            <p> 
                {this.props.text.top.join("\n")}
                {this.props.text.beepers.join('\n')}
                {this.props.text.vertical.join('\n')}
                {this.props.text.horizontal.join('\n')}
            </p>
        </div>
    )
  }
}
export default MapText;