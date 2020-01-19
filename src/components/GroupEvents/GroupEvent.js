import React, { Component } from "react";

import Event from "../Event/Event";

class GroupEvents extends Component {
  render() {
    return (
      <div className="GroupEvent">
        {this.props.group.map(event => (
          <Event key={event.id} event={event}></Event>
        ))}
      </div>
    );
  }
}

export default GroupEvents;
