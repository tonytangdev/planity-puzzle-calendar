import React, { Component } from "react";

import "./Event.css";

class Event extends Component {
  constructor(props) {
    super(props);

    this.state = {
      style: {
        left: props.event.startPosition.positionX,
        top: props.event.startPosition.positionY,
        width:
          props.event.endPosition.positionX -
          props.event.startPosition.positionX,
        height:
          props.event.endPosition.positionY -
          props.event.startPosition.positionY
      }
    };
  }

  render() {
    return (
      <div className="Event">
        <div className="event" style={this.state.style}>
          {this.props.event.start} - {this.props.event.end.hour}:
          {this.props.event.end.minute}
        </div>
      </div>
    );
  }
}

export default Event;
