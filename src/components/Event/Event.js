import React from "react";

import "./Event.css";

function Event({ event }) {
  const style = {
    left: event.startPosition.positionX,
    top: event.startPosition.positionY,
    width: event.endPosition.positionX - event.startPosition.positionX,
    height: event.endPosition.positionY - event.startPosition.positionY
  };

  return (
    <div className="Event">
      <div className="event" style={style}>
        {event.id}
      </div>
    </div>
  );
}

export default Event;
