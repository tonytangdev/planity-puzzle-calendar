import React, { useEffect, useState } from "react";
import "./App.css";

import Calendar from "./components/Calendar/Calendar";

import input from "./input.json";

import { sortEvents } from "./utils/sortEvents";
import { convertStringToHH_MM } from "./utils/convertTime";
import { createEventsGroups } from "./utils/createEventsGroups";
import { calculateEnd } from "./utils/calculateEnd";
import { assignColumn } from "./utils/assignColumn";
import { calculateEventsPosition } from "./utils/calculateEventsPosition";

function App() {
  let events = input.map(event => convertStringToHH_MM(event));
  events = events.map(event => calculateEnd(event));
  const orderedEvents = sortEvents(events);
  let groups = createEventsGroups(orderedEvents);
  groups = groups.map(group => assignColumn(group));
  groups = groups.map(group =>
    calculateEventsPosition(group, window.innerHeight, window.innerWidth)
  );

  const [currentGroups, setGroup] = useState(groups);

  function updateSize() {
    setGroup(
      currentGroups.map(group =>
        calculateEventsPosition(group, window.innerHeight, window.innerWidth)
      )
    );
  }

  useEffect(() => {
    window.addEventListener("resize", updateSize.bind(this));

    return function cleanup() {
      window.removeEventListener("resize", updateSize.bind(this));
    };
  });

  return (
    <div className="App">
      <Calendar groups={currentGroups}></Calendar>
    </div>
  );
}

export default App;
