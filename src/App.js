import React, { Component } from "react";
import "./App.css";

import Calendar from "./components/Calendar/Calendar";

import input from "./input.json";

import { sortEvents } from "./utils/sortEvents";
import { convertStringToHH_MM } from "./utils/convertTime";
import { createEventsGroups } from "./utils/createEventsGroups";
import { calculateEnd } from "./utils/calculateEnd";

class App extends Component {
  constructor(props) {
    super(props);
    let events = input.map(event => convertStringToHH_MM(event));
    events = events.map(event => calculateEnd(event));
    const orderedEvents = sortEvents(events);
    const groups = createEventsGroups(orderedEvents);

    this.state = { groups: groups };
  }

  render() {
    return (
      <div className="App">
        <Calendar
          groups={this.state.groups}
          height={window.innerHeight}
          width={window.innerWidth}
        ></Calendar>
      </div>
    );
  }
}

export default App;
