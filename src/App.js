import React, { Component } from "react";
import "./App.css";

import Calendar from "./components/Calendar/Calendar";

import input from "./input.json";

import { sortEvents } from "./utils/sortEvents";
import { convertStringToHH_MM } from "./utils/convertTime";
import { createEventsGroups } from "./utils/createEventsGroups";
import { calculateEnd } from "./utils/calculateEnd";
import { assignColumn } from "./utils/assignColumn";
import { calculateEventsPosition } from "./utils/calculateEventsPosition";

class App extends Component {
  constructor(props) {
    super(props);
    let events = input.map(event => convertStringToHH_MM(event));
    events = events.map(event => calculateEnd(event));
    const orderedEvents = sortEvents(events);
    let groups = createEventsGroups(orderedEvents);
    groups = groups.map(group => assignColumn(group));
    groups = groups.map(group =>
      calculateEventsPosition(group, window.innerHeight, window.innerWidth)
    );

    this.state = { groups };
  }

  updateSize() {
    let groups = this.state.groups;
    groups = groups.map(group =>
      calculateEventsPosition(group, window.innerHeight, window.innerWidth)
    );

    this.setState({ groups });
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateSize.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateSize.bind(this));
  }

  render() {
    return (
      <div className="App">
        <Calendar groups={this.state.groups}></Calendar>
      </div>
    );
  }
}

export default App;
