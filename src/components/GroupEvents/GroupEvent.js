import React from "react";

import Event from "../Event/Event";

function GroupEvents({ group }) {
  return (
    <div className="GroupEvent">
      {group.map(event => (
        <Event key={event.id} event={event}></Event>
      ))}
    </div>
  );
}

export default GroupEvents;
