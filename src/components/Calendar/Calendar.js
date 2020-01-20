import React from "react";
import "./Calendar.css";

import GroupEvents from "../GroupEvents/GroupEvent";

function Calendar({ groups }) {
  return (
    <div className="Calendar">
      {groups.map(group => (
        <GroupEvents key={group[0].id} group={group}></GroupEvents>
      ))}
    </div>
  );
}

export default Calendar;
