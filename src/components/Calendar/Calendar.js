import React, { Component } from "react";
import "./Calendar.css";

import { calculateEventsPosition } from "../../utils/calculateEventsPosition";

import GroupEvents from "../GroupEvents/GroupEvent";
import { assignColumn } from "../../utils/assignColumn";

class Calendar extends Component {
  constructor(props) {
    super(props);
    let groups = props.groups.map(group => assignColumn(group));
    groups = props.groups.map(group =>
      calculateEventsPosition(group, props.height, props.width)
    );

    this.state = {
      groups: groups
    };
  }

  render() {
    return (
      <div className="Calendar">
        {this.state.groups.map(group => (
          <GroupEvents key={group[0].id} group={group}></GroupEvents>
        ))}
      </div>
    );
  }
}

export default Calendar;
